import React, { useEffect, useState } from 'react'
import {CiMenuFries} from 'react-icons/ci'

function Navbar() {

  const [navIsOpened, setNavIsOpened] = useState(false)
  const [shadow,setShadow] = useState(false)

  useEffect(()=>{
    const handleShadow = ()=>{
        if(window.scrollY>=90){
            setShadow(true)
        }
        else{
            setShadow(false)
        }
    }
    window.addEventListener('scroll',handleShadow)
},[])

  return (
  <>
      <nav className={shadow?'bg-[#2aa013] fixed top-0 left-0 w-full h-[7vh] z-50 p-5 text-white flex justify-between items-center ease duration-300'
      :'fixed top-0 left-0 w-full h-[7vh] z-50 p-5 text-white flex justify-between items-center ease duration-300'}>
        <section>
          <img src="https://thewestsideschools.ca/wp-content/uploads/2022/11/cropped-Site-Icon-1.png" alt="logo" className='w-[40px] lg:w-[50px] lg:h-[50px] h-[40px]' />
        </section>
        <section className='hover:scale-105 ease duration-500 cursor-pointer'>
            <CiMenuFries size={35} onClick={()=>setNavIsOpened(!navIsOpened)}/>
        </section>
      </nav>

      <section className={navIsOpened?"fixed top-0 right-0 bg-[#0a2c07] w-full h-full z-[60] ease duration-500 p-5"
      :"fixed top-0 right-[-100vw] bg-[#0a2c07] w-full h-full z-[60] ease duration-500 p-5"}
      onClick={()=>setNavIsOpened(!navIsOpened)}>

        <section>
          <img src="https://thewestsideschools.ca/wp-content/uploads/2022/11/cropped-Site-Icon-1.png" alt="logo" className='w-[40px] lg:w-[50px] lg:h-[50px] h-[40px]' />
        </section>

      </section>
  </>
  )
}

export default Navbar