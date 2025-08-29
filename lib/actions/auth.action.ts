"use server"

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";


const ONE_WEEK = 60 * 60 * 24 * 7;
export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try{

        const userRecord = await db.collection('users').doc(uid).get();

        if(userRecord.exists) {
            return {
                success: false,
                message: "O usuário já está cadastrado. Por favor, faça login."
            }
        }
 
        await db.collection('users').doc(uid).set({
            name, email
        })

        return {
            success: true,
            message: 'Cadastro concluído com sucesso. Agora é só fazer login!'
        }

    } catch (e: any) {
        console.error("Error creating a user", e);

        if(e.code === 'auth/email-already-exists'){
            return {
                success: false,
                message: 'Ops! Este e-mail já está sendo usado.'
            }
        }

        return {
            success: false,
            message: "Não foi possível criar a conta."
        }
    }
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000,
    })

    cookieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK ,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
    })


    
}

export async function signIn(params:SignInParams) {
    const { email, idToken} = params
    
    try{
        const userRecord = await auth.getUserByEmail(email);

        if(!userRecord){
            return {
                success: false,
                message: 'Este usuário não existe. Crie uma conta'
            }
        }

        await setSessionCookie(idToken);
    }catch(e) {
        console.log(e);

        return {
            success: false,
            message: 'Não conseguimos fazer login. Verifique suas credenciais e tente novamente.'
        }

    }
}

export async function getCurrentUser(): Promise<User | null> {

    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get('session')?.value;

    if(!sessionCookie) return null;

    try{

        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

        const userRecord = await db.collection('users')
        .doc(decodedClaims.uid)
        .get();

        if(!userRecord.exists) return null;

        return {
            ...userRecord.data(),
            id: userRecord.id,

        } as User;

    } catch (e) {
        console.log(e)

        return null;
    }
}

export async function isAuthenticated() {
    const user = await getCurrentUser();

    return !!user;
    
}

