import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <section className='card-cta'>
          <div className='flex flex-col gap-6 max-w-lg'>
            <h2>Com KuhlamukaAI, estás um passo mais perto do teu futuro</h2>
            <p className='text-lg'>
              Treina com perguntas reais de entrevista e recebe feedback na hora
            </p>

            <Button asChild className='btn-primary max-sm:w-full'>
                <Link href="/interview"> Treina com o KuhlamukaAI </Link>
            </Button>
          </div>

          <Image src="/robot.png" alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>

        </section>

        <section className='flex flex-col gap-6 mt-8'>
          <h2>Minhas Entrevistas</h2>

          <div className='interviews-section'>
            {dummyInterviews.map((interview) => (
              <InterviewCard {...interview } key={interview.id} />
            ))}
          </div>

        </section>

        <section className='flex flex-col gap-6 mt-8'>
          <h2> Quero Praticar!</h2>

          <div className='interviews-section'>
          
              {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id}/>
            ))}
          </div>
        </section>
    
    </>
  )
}

export default page