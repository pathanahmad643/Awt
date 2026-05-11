import React from 'react'
import Navbar from '../../NAV/Navbar'
import { Link } from 'react-router-dom'

function Media() {
  return (
    <div>
      <Navbar/>

      <div className='top-10 fixed  w-full h-full grid grid-cols-3  p-20  gap-5 font-bold text-2xl text-center mt-10 text-white bg-[url(https://i.pinimg.com/1200x/37/a7/f0/37a7f0f2f1afe68709caeca3864a54ca.jpg)]'>

        
           <Link
            className='w-110 h-70 flex hover:scale-104 transition-all justify-center items-center flex-col text-shadow-lg text-shadow-white ring-2 ring-black rounded-xl'
            to='/Events'>
               <img 
               className='absolute w-110 h-70 overflow-hidden rounded-xl object-cover' 
               src="https://i.pinimg.com/736x/dd/e4/ed/dde4eda96c506e8dd5bf63db1e81e139.jpg" alt="" />
              <h1 className='text-6xl relative font-bold mb-30 text-black'>Events</h1>
              <button className='absolute bg-purple-600 w-50 h-10 rounded-2xl mt-30 hover:bg-pink-700 active:scale-95'>See More</button>
           
             </Link>

           <Link 
           className='w-110 h-70 flex hover:scale-104 transition-all justify-center items-center flex-col ring-2 ring-black text-shadow-lg text-shadow-white rounded-xl '
           to='/Gallary'> Gallary
            <img className=' absolute w-110 h-70 overflow-hidden object-fill rounded-xl' src="https://i.pinimg.com/1200x/29/ab/dd/29abdd44da97b595c20a96e102e324d0.jpg" alt="" />
             <h1 className='text-6xl relative font-bold mb-40 text-black'>Gallary</h1>
              <button className='absolute bg-purple-600 w-50 h-10 rounded-2xl mt-30 hover:bg-pink-700 active:scale-95'>See More</button>
           </Link>

           
           <Link 
           className='w-110 h-70 flex hover:scale-104 transition-all justify-center items-center flex-col ring-2 ring-black text-shadow-lg text-shadow-white rounded-xl '
           to='/Reports'>Reports
            <img className=' absolute w-110 h-70 overflow-hidden object-fill rounded-xl' src="https://i.pinimg.com/736x/57/7c/79/577c791d711165ee23722634dd764885.jpg" alt="" />
             <h1 className='text-6xl relative font-bold mb-40 text-black'>Media</h1>
              <button className='absolute bg-purple-600 w-50 h-10 rounded-2xl mt-30 hover:bg-pink-700 active:scale-95'>See More</button>
           </Link>
        


      </div>

    </div>
  )
}

export default Media
