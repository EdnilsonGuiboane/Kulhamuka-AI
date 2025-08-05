import Agent from '@/components/Agent'
import React from 'react'

const page = () => {

   
  return (
    <>
            <h3> Gere sua Entrevista com IA</h3>

            <Agent userName="Voce" userId = "user1" type="generate"/>

    </>
  )
}

export default page