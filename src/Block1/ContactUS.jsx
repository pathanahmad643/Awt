import React from 'react'
import Navbar from '../NAV/Navbar'
import { Link } from 'react-router-dom'
import { MapPin,Phone, Mail} from 'lucide-react'
import Footer from './Home/Footer'

function ContactUS() {
  return (
    <div>
        <Navbar/>

        
         <div className='  flex justify-center items-center flex-col w-screen h-100  mt-25  '>
          <img
          className='w-screen h-100 object-cover absolute'
          src="https://i.pinimg.com/1200x/10/f4/ce/10f4ced44a1d35a79c4e17023041527c.jpg" alt="" />
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center text-shadow-lg text-shadow-gray-400 '
           >Contact Us</h1>
 
           <div className='flex font-medium relative text-lg gap-4 bg-gray-400 w-[30%] justify-center rounded-2xl text-white '>
                <Link className='hover:text-gray-600' to='/'>/Home</Link>
                <Link className='hover:text-gray-600' to='/About'>/About</Link>
                <Link className='hover:text-gray-600' to='/Team'>/Our Team</Link>
                <Link className='text-gray-900' to='/ContactUS'>Contact-us</Link>
           </div>
       </div>

       <div className='w-screen h-full mt-10'>
          <h1 className='text-6xl text-center  font-bold  py-5 font-sans'>Let's Connect</h1>
          <p className='text-gray-500 text-lg font-medium text-center'> We’d love to hear from you! Reach out for queries, collaborations, or support</p>

       </div>

       <div className='w-screen h-80 flex justify-center items-center gap-20 '>

           <div className='w-[42%] h-60  rounded-lg shadow-lg shadow-gray-700'>
             <h1 className='w-full h-10 text-3xl font-bold px-10 mt-5'>Contact Information</h1>
             <p className='flex text-sm font-medium px-9 py-3 '> <MapPin color="red" strokeWidth='3px' size='25px' />Banke Bihari Market , Near Block Chowk , Ormanjhi Ranchi , Jharkhand - 835219</p>
             <p className='flex  text-sm font-medium text-center px-9 py-2'> <Phone color="#1cce3a" strokeWidth='3px' size='25px' /> +91 8340265398</p>
             <p className='flex text-center  text-sm font-medium px-9 py-3'> <Mail color="#ce521c"strokeWidth='3px' size='25px' /> alibroswelfaretrust@gmail.com</p>
           </div>

             <div className='w-[35%] h-60 bg-amber-900 rounded-lg '>
                <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.6882673064206!2d85.46531727508844!3d23.471706499418932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4faeff9d2a89b%3A0x23c9bfc51f33077f!2sBanke%20Bihari%20Market%20Ormanjhi!5e0!3m2!1sen!2sin!4v1778345196046!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                      width="100%"
                      height="100%"
                      style={{border:0}}
                      allowFullScreen=""
                      loading="lazy"
                      className='rounded-2xl overflow-hidden'
                    >
                    </iframe>
             </div>

            </div>

       <Footer/>
       
    </div>
  )
}

export default ContactUS
