// import { Info } from 'lucide-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Info from './Info'
import Team from './Team'
import Navbar from '../../NAV/Navbar'



const About = () => {
  

  return (
    <div className='w-screen h-full text-black' >

    <Navbar/> 
     
      <div className='w-full justify-center items-center  flex gap-5 mt-25  '>
            <Link className='text-purple-600' to='/'> /Home</Link>
            <Link className='text-xl  font-sans bg-purple-600 font-medium' to='/About/Team'>Our Team</Link>
       </div>
    <Outlet/>
    <Info/>
   
   
    

    </div>
  )
}

export default About
