import { Link } from 'react-router-dom'
import React from 'react'
import Navbar from '../../NAV/Navbar'


function Ourwork() {
  return (
    <div className='bg-[url(https://i.pinimg.com/736x/19/7a/6a/197a6a346c51797eb0387a268881d516.jpg)] w-screen h-screen object-contain flex flex-flex-nowrap'>
      <Navbar/>

      <div className='top-10 fixed  w-full h-full grid grid-cols-3  p-20  gap-5 font-bold text-2xl text-center text-white '>

           <Link
            className='w-110 h-70 flex hover:scale-104 transition-all justify-center items-center flex-col text-shadow-sm text-shadow-purple-600 ring-2 ring-white   bg-[url(https://www.awtbharat.com/public/social_head.png)] object-cover rounded-xl'
            to='/Scd'>Social Economic Development
             <button>Learn More</button>
             </Link>

           <Link
            className='w-110 h-70 hover:scale-104 transition-all flex justify-center items-center flex-col text-shadow-sm text-shadow-purple-600 ring-2 ring-white   bg-[url(https://www.awtbharat.com/public/education.jpeg)] object-cover rounded-xl'
            to='/Education'>Education & Awareness
             <button>Learn More</button>
             </Link>

         
           <Link
            className='w-110 h-70 hover:scale-104 transition-all flex justify-center items-center flex-col text-shadow-sm text-shadow-purple-600 ring-2 ring-gray-200  bg-[url(https://www.awtbharat.com/public/hand.jpg)] object-cover rounded-xl'
            to='/Health'>Health & Sanitation
             <button>Learn More</button>
             </Link>

           <Link
            className='w-110 h-70 hover:scale-104 transition-all flex justify-center items-center flex-col text-shadow-sm text-shadow-purple-600 ring-2 ring-white  bg-[url(https://www.awtbharat.com/public/environment.jpeg)] object-cover rounded-xl'
            to='/Env'>Enviorenment Development
             <button>Learn More</button>
             </Link>

            
           <Link
            className='w-110 h-70 hover:scale-104 transition-all flex justify-center items-center flex-col text-shadow-sm text-shadow-purple-600 ring-2 ring-white   bg-[url(https://www.awtbharat.com/public/training_head.jpg)] object-cover rounded-xl'
            to='/Resrch'>Research & Advocacy
             <button>Learn More</button>
             </Link>
          
            <Link
            className='w-110 h-70 hover:scale-104 transition-all flex justify-center items-center flex-col text-shadow-sm text-shadow-purple-600 ring-2 ring-white  bg-[url(https://i.pinimg.com/736x/09/3b/4e/093b4e6c876080de83d855c3a525708e.jpg)] object-cover rounded-xl'
            to='/Miscelleneous'>Misscellaneous
             <button>Learn More</button>
             </Link>
      </div>
      
    </div>
  )
}

export default Ourwork
