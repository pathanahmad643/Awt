import React from 'react'
import { HandHelping } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { Mails } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div w-full h-full bg-black>
        <div className=' mt-10 w-full h-40 flex justify-center-safe gap-30 items-center  bg-[url(https://images.unsplash.com/photo-1637825891035-1930cbd564dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ring-2 ring-white'>
             
              <div className=' w-[40%] h-full '>
                 <div className='flex '>
                   <h1
                 className='bg-white rounded-full ml-32 w-11 h-11 mt-2  flex items-center justify-center'
                 ><HandHelping strokeWidth={1.5}size={39} /></h1>
                <h1
                className='text-white font-bold text-2xl mt-2 text-center ml-2'
                >Donate to Alibro's Walfare Trust</h1>
                 </div>
                <div>
                  <p className='text-white font-light mt-0 ml-45'>Your small contribution can bring a big change in someone’s life.</p>
                  <button className='w-27 text-white active:scale-95 h-7 ml-45 mt-5 bg-red-600 rounded-2xl'>Donate Now</button>
                </div>
              </div>

               <div className=' w-[20%] h-full '>
                <img
                className='w-[36%] mt-2'
                src="https://www.awtbharat.com/public/donate.jpg" alt="" />
               </div>

          </div>
        
                          {/* BOX-8 */}
          <div className='flex justify-evenly items-center bg-black w-full h-90  '>
              <div className='w-[25%] h-full '>
                    <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.6882673064206!2d85.46531727508844!3d23.471706499418932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4faeff9d2a89b%3A0x23c9bfc51f33077f!2sBanke%20Bihari%20Market%20Ormanjhi!5e0!3m2!1sen!2sin!4v1778345196046!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                      width="100%"
                      height="100%"
                      style={{border:0}}
                      allowFullScreen="yes"
                      loading="lazy"
                      classname='rounded-2xl overflow-hidden'
                    >
                    </iframe>
              </div>

               <div className='w-[25%] h-full text-white'>
                  <h1
                  className='flex font-bold text-xl text-center px-5 mt-10 gap-3'
                  ><MapPinHouse size={32} color="#870cc0" strokeWidth={1.5} /> Address</h1>
                  <p className='px-6 py-2 text-sm'>Banke Bihari Market , Near Block Chowk , Ormanjhi Ranchi , Jharkhand - 835219</p>
                   
                 <p className='flex gap-3 px-5 text-sm mt-5 cursor-pointer  hover:text-purple-600  '><Phone size={22} color="#ffffff" strokeWidth={1.25} />+91 - 8340265398</p>  
                 <p className='flex gap-3 px-5 text-sm py-3 cursor-pointer hover:text-purple-600 '><Mails size={22} color="#ffffff" strokeWidth={1.25} />alibroswelfaretrust@gmail.com</p>
              </div>

               <div className='w-[25%] h-full  text-white'>
                 <h1 className='text-2xl mt-10 text-center font-bold'>Useful Links</h1>
                 <Link to='/about'><h1 className='px-32 py-5 text-xl '>About Us</h1></Link>
                <Link to='/Team'><h1 className='px-32  text-xl '>Our team</h1></Link>
                <Link to='/ContactUS'><h1 className='px-32  py-5 text-xl '>Contact Us</h1></Link>

              </div>
          </div>

          <footer  className='w-full py-5 border-t-2 border-gray-400 bg-black text-gray-300 text-lg '>
           <h1 className='text-center'> © Copyright 2025 - 2027,<span className='text-purple-600'> Alibros Welfare Trust</span> | All Rights Reserved</h1>
          </footer>
 
    </div>
  )
}

export default Footer

