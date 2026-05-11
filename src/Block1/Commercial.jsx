import React from 'react'
import Navbar from '../NAV/Navbar'
import { Link } from 'react-router-dom'

function Commercial() {
  return (
    <div>
      <Navbar/>
       

         <div className='  flex justify-center items-center flex-col w-screen h-100  mt-25  '>
          <img
          className='w-screen h-100 object-cover absolute'
          src="https://i.pinimg.com/736x/70/a8/ab/70a8abd042e61ba2ae0fc5c7d795dc59.jpg" alt="" />
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center text-shadow-lg text-shadow-gray-400 '
           >Commercial</h1>
 
           <div className='flex font-medium relative text-lg gap-4 bg-gray-400 w-[30%] justify-center rounded-2xl text-white '>
                <Link className='hover:text-gray-600' to='/'>/Home</Link>
                <Link className='hover:text-gray-600' to='/About'>/About</Link>
                <Link className='hover:text-gray-600' to='/Team'>/Our Team</Link>
                <Link className='text-gray-900' to='/Commercial'>Commercial</Link>
           </div>
       </div>

       <div className='flex justify-center items-center w-screen h-90 '>
            <div className='w-200 h-50 '> 
              <h1 className='font-extrabold text-7xl'>🚀 Coming Soon</h1>
              <p className='ml-100 font-medium'>We are working hard , Stay Tuned....</p>
            </div>
       </div>
    </div>
  )
}

export default Commercial
