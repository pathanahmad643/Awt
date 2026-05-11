import React from 'react'
import Navbar from '../../NAV/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'

const Gallary = () => {
  return (
    <div className='w-screen h-full text-white font-sans'>
      <Navbar/> 

        <div className='  flex justify-center items-center flex-col w-screen h-100  mt-25 mb-15 '>
          <img
          className='w-screen h-100 object-cover absolute'
          src="https://i.pinimg.com/736x/d9/1b/32/d91b32c4f884553ac8d4c4f91dd5cf12.jpg" alt="" />
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center text-shadow-lg text-shadow-amber-500 '
           >Events Gallary</h1>
 
           <div className='flex font-medium relative text-lg gap-4 bg-purple-600 w-[30%] justify-center rounded-2xl text-black '>
                <Link className='hover:text-amber-500' to='/'>/Home</Link>
                <Link className='hover:text-amber-500' to='/About'>/About</Link>
                <Link className='hover:text-amber-500' to='/Media'>/Media</Link>
                <Link className='text-amber-600' to='/Events'>Events</Link>
           </div>
       </div>

         <div className='w-screen h-full  transition-all ease-in-out delay-1000'>
          <div className='w-200 h-50  m-auto'>
                 <h1 className='text-6xl text-amber-600 font-bold font-sans text-center'>Events</h1>
                 
                 <p className='text-gray-500 font-medium font-sans py-5 px-15'>Welcome to our gallery! Here, we showcase the most unforgettable school events, cultural programs, and memories that define our journey. Each picture tells a story of learning, celebration, and togetherness.</p>

                <input type="search" placeholder='🔍 Search Events....'
                 className=' w-90 h-10 px-3 ml-60 mt-5 border-none rounded-2xl  focus:ring-2 focus:ring-amber-600 outline-none bg-white text-black text-lg font-medium font-sans'/>
           </div>

             <div className='grid grid-cols-3 w-screen h-full mt-20 bg- '>
               <div className='w-105 rounded-xl h-90 m-10 '>
                  <img 
                       className='w-105 h-80  overflow-hidden rounded-xl hover:opacity-40 hover:scale-110'
                        src="https://www.awtbharat.com/public/education.jpeg" alt="" />
                   <h1 className='text-black text-2xl text-center'>Republic Day Celebration</h1>
                </div>  


                <div className='w-105 rounded-xl h-90 m-10'>
                    <img 
                       className='w-105 h-80  overflow-hidden rounded-xl hover:opacity-40 hover:scale-110'
                        src="https://www.awtbharat.com/public/education.jpeg" alt="" />
                   <h1 className='text-black text-2xl text-center'>Republic Day Celebration</h1>
                </div>   
                <div className='w-105 rounded-xl h-90 m-10 '>
                    <img 
                       className='w-105 h-80  overflow-hidden rounded-xl hover:opacity-40 hover:scale-110'
                        src="https://www.awtbharat.com/public/education.jpeg" alt="" />
                   <h1 className='text-black text-2xl text-center'>Republic Day Celebration</h1>
                  
                </div>  
               
            </div> 
          </div>

       <Footer/>     
  

    </div>
  )
}

export default Gallary
