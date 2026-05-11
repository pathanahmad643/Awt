import React from 'react'
import Footer from './Home/Footer'

const Notfound = () => {
  return (
    <div className='w-screen h-screen bg-black '>
        <img className='absolute w-screen h-screen ' src="https://i.pinimg.com/1200x/62/1c/db/621cdb56e2d5d80107ad95ca23fa79fa.jpg" alt="" />
        <div className=' relative w-screen h-screen flex flex-col justify-center items-center text-white'>
             <h1 
         className='relative font-extrabold text-8xl text-white '
         >404 | Not Found</h1>
         <p className='realtive ml-150'>We are Working on it</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Notfound
