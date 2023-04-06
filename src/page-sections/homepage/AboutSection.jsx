import React from 'react'

function AboutSection() {
  return (
    <main>
        {/* Achievement Section */}
        <section className='w-full lg:h-[10vh] bg-[#2aa013] flex flex-col lg:flex-row justify-around items-center text-white gap-5 p-3'>
          <div className='flex flex-col justify-center items-center text-msrt'>
              <h1 className='text-msrt text-4xl'>1955</h1>
              <p className='text-sm uppercase tracking-widest'>Established</p>
          </div>
          <div className='flex flex-col justify-center items-center text-msrt'>
              <h1 className='text-msrt text-4xl'>2500</h1>
              <p className='text-sm uppercase tracking-widest'>Students</p>
          </div>
          <div className='flex flex-col justify-center items-center text-msrt'>
              <h1 className='text-msrt text-4xl'>100</h1>
              <p className='text-sm uppercase tracking-widest'>Nationalities</p>
          </div>
          <div className='flex flex-col justify-center items-center text-msrt'>
              <h1 className='text-msrt text-4xl'>30</h1>
              <p className='text-sm uppercase tracking-widest'>After-School Activities</p>
          </div>
          <div className='flex flex-col justify-center items-center text-msrt'>
              <h1 className='text-msrt text-4xl'>20</h1>
              <p className='text-sm uppercase tracking-widest'>Awards</p>
          </div>
        </section>
        {/* About Section */}
        <section className='w-full p-5 flex flex-col lg:flex-row justify-around items-center gap-5'>
            <div className="overflow-hidden lg:w-[45%]">
            <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="west side students"
            className='w-full hover:scale-125 ease duration-[800ms] cursor-pointer'/>
            </div>
            <section className='lg:w-[45%]'>
                <h1 className='lg:text-xl uppercase tracking-widest text-msrt'>About West Side :</h1>
                <hr className='my-3' />
                <p className='text-msrt'>West Side International School is a not-for-profit, private, non-sectarian, coeducational day school established in September 1955 to provide international education to students of all races and creeds, at a time when Ghana was yet to achieve full independence, and international schools were a rarity. Sixty years on, GIS continues to provide quality education to both international and local students in a completely different and more competitive educational setting.
                    GIS offers a curriculum modeled along the English National Curriculum and Cambridge International Examinations, IGCSE and GCE Advanced level with English language as the medium of instruction. Ghana International School after years of application and hard work is the first and only international school in Ghana to be accredited by both the Council of International Schools (CIS) and the New England Association of Schools and Colleges (NEASC). 
                    The school is also an active member of the Association of International Schools in Africa (AISA).
                </p>
                <button className='my-5 px-4 py-2 uppercase tracking-widest hover:scale-105 ease duration-500 cursor-pointer bg-[#2aa013] text-white'>Read More</button>
            </section>
        </section>
    </main>
  )
}

export default AboutSection