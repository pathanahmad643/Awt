import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react';

const Navbar = () => {

 

  return (
    <div>
      <div className=' flex justify-around items-center fixed top-0 left-0 z-50 border-b-2  border-white bg-[url(https://i.pinimg.com/736x/19/7a/6a/197a6a346c51797eb0387a268881d516.jpg)] w-screen h-25 position:sticky'>
        


       <div className='w-25 h-23 '>
         <img 
         className='w-23 h-23 object-cover border-2 border-white rounded-full '
         src="https://www.awtbharat.com/public/logo.png" alt="" />
       </div>
        
        <div className='flex justify-around text-white gap-8 full px-5 text-lg font-bold font-sans '>
            <Link  to='/'>Home</Link>

            <Link to='/about'
            className='about flex justify-center items-center '>About <ChevronDown size={25}/> </Link>
            
            <Link to='/Ourwork'>Our Work </Link>
            <Link to='/Media'>Media</Link>
            <Link to='/Commercial'>Commercial</Link>
            <Link to='/ContactUs'>Contact-Us</Link>
          </div>
          <div className= 'flex justify-around text-black gap-8 full px-5 text-lg font-bold font-sans '>
               <a className='bg-white rounded-full w-25 text-center' href="https://awtbharat.com/Loan_app/Main/login"> Khan</a>
             <Link className='bg-white gap-2 px-7 rounded-full'to='/Download'>Download</Link>
          </div>

      
       

      

         
       
    </div>
    </div>
  )
}

export default Navbar
