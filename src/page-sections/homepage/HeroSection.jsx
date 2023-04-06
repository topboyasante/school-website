import React from 'react'

function HeroSection() {
  return (
    <main className='relative w-screen h-[100svh]'>
        <video autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover
        object-center'>
            <source src={`/assets/bg-video-2.mp4`} type='video/mp4'/>
            Your browser does not support the video tag.
        </video>
        <div className='absolute top-0 left-0 w-full h-full bg-[#0a2c07] opacity-50'></div>
        <section className='absolute bottom-0 left-0 text-white p-5'>
                <section className='text-msrt lg:w-[50%]'>
                    <h1 className='lg:text-xl uppercase tracking-widest'>Welcome to West Side International School.</h1>
                    <hr className='my-3' />
                    <p className='lg:text-xl'>From the inspiring teachers who guide our students to the extracurricular activities that challenge them to new heights, 
                        our school provides a nurturing environment for every student to thrive. We believe that every student has the potential to be a 
                        hero in their own way, and we are committed to helping them discover their unique strengths and abilities.
                    </p>
                    <button className='border my-5 px-4 py-2 lg:text-xl uppercase tracking-widest hover:scale-105 ease duration-500 cursor-pointer'>Explore our curriculum</button>
                </section>            
        </section>
    </main>
  )
}

export default HeroSection