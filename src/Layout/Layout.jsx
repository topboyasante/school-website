import Navbar from '@/components/navigation/Navbar'
import React from 'react'

function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default Layout