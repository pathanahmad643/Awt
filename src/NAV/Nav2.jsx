import React from 'react'
import {ArrowLeft} from 'lucide-react';
import {ArrowRight} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';


const Nav2 = () => {
    let navigate = useNavigate()

  return (
    <div >

        <div className=' flex justify-around items-center fixed top-0 left-0 z-50 border-b-2  border-white bg-green-500 w-screen h-25 position:sticky'>
                  {/* NAVIGATION */}
            <div className='flex justify-center items-center gap-5'>
               <button className='text-lg text-black active:scale-95 bg-gray-200 rounded-full'
               onClick={()=>{
                   if(navigate != 1){
                     navigate(-1)
                   } 
                 
               }}
               > <ArrowLeft /> </button>
       
               <button className='text-lg text-black active:scale-95 bg-gray-200 rounded-full'
               onClick={()=>{
                   navigate(+1)
               }}
               > <ArrowRight /> </button>
       
           </div>

                    {/* LOGO */}
            <div className='w-25 h-23 '>
           <img 
             className='w-23 h-23 object-cover border-2 border-white rounded-full '
             src="https://www.awtbharat.com/public/logo.png" alt="" />
            </div>  

                 {/* OPTIONS */}
            <div className='flex justify-around text-white gap-8 full px-5 text-lg font-bold font-sans '>
                 
                 <Link to='/'>Home</Link>

                 <Link className='flex' to='about'> About <ChevronDown /></Link>

            </div>





         </div>
           

    </div>
  )
}

export default Nav2
