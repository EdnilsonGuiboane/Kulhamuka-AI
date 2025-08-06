import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { getRandomInterviewCover } from '@/lib/utils';
import { db } from '@/firebase/admin';

export async function GET() {
    return Response.json({ success: true, data : 'Obrigado'}, { status: 200});

    
}

export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid} = await request.json();

    try{
        const { text: questions } = await generateText({
           model: google("gemini-2.0-flash-001"),
            prompt: `Prepare perguntas para uma entrevista de emprego.
            O cargo é ${role}.
            O nível de experiência exigido é ${level}.
            A stack de tecnologias utilizadas é: ${techstack}.
            O foco entre perguntas comportamentais e técnicas deve pender para: ${type}.
            A quantidade de perguntas solicitada é: ${amount}.
            Por favor, retorne apenas as perguntas, sem nenhum texto adicional.
            As perguntas serão lidas por um assistente de voz, então não use "/" ou "*" ou qualquer outro caractere especial que possa atrapalhar a leitura.
            Retorne as perguntas formatadas assim:
            ["Pergunta 1", "Pergunta 2", "Pergunta 3"]

                Obrigado! <3`,

        });

        const interview = {
            role, type, level,
            techstack: techstack.split(','),
            questions: JSON.parse(questions),
            userId: userid,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString()
            
        }

        await db.collection("interviews").add(interview)

        return Response.json({ success: true}, {status: 200})

    } catch (error) {
        console.error(error);

        return Response.json({ success: false, error}, { status: 500});
    }
    
}


