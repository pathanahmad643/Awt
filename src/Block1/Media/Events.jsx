import React from 'react'
import Navbar from '../../NAV/Navbar'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'


const Events = () => {
  return (
    <div className='w-screen h-full text-white'>
    
      <Navbar/>

        <div className='  flex justify-center items-center flex-col w-full h-80 bg-[url(https://www.awtbharat.com/public/education.jpeg)]  mt-25 mb-15 '>
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center '
           >Events</h1>
 
           <div className='flex font-medium text-lg gap-4 bg-purple-600 w-[30%] justify-center rounded-2xl  '>
                <Link className='hover:text-pink-500' to='/'>/Home</Link>
                <Link className='hover:text-pink-500' to='/About'>/About</Link>
                <Link className='hover:text-pink-500' to='/Media'>/Media</Link>
                <Link className='text-pink-800' to='/Events'>Events</Link>
           </div>
       </div>

       <div className='w-screen h-170  transition-all ease-in-out delay-1000'>
          <div className='w-100 h-35  m-auto'>
                 <h1 className='text-6xl text-pink-700 font-bold font-sans text-center'>Events</h1>
                <input type="search" placeholder='Search Events....'
                 className=' w-90 h-10 px-3 ml-6 mt-5 rounded-2xl border-2 border-pink-600 bg-white text-black text-lg font-medium font-sans'/>
          </div>

          <div className='grid grid-cols-3 w-screen h-full bg- '>
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

export default Events
