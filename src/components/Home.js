import React from 'react'
import image from '../images/leaves.jpg'

export default function Home () {
  return (
    <main>
      <img  src = {image} alt='Leaves in Glass' className = 'absolute object-cover w-full h-full'/> 
        <section className = 'relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
          <h1 className= 'text-6xl text-black font-TT leading-none lg:leading-snug home_name'>Hi, I'm Mubashir.</h1>
        </section>
    </main>
  )
}