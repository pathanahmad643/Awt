import React from 'react'
import Slider2 from '../Home/Slider2'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from '../Home/Footer';


const Team = () => {
  return (
    <div className='w-screen h-full  '>

      <div className=' w-screen h-90'>
        <img className='absolute w-full h-90 object-cover'
        src="https://www.awtbharat.com/public/team%20(1).jpg" alt="" />

        <h1 className='relative text-5xl text-center  font-bold font-sans text-purple-600 py-10'
        >Our Leadership Team </h1>

         <Link className='font-sans relative ml-[47%]  text-purple-600' to='/'> /Home</Link>
          <Link className=' font-sans relative  text-green-500 font-medium' to='/About/Team'>/Our Team</Link>
         
      </div>
                       {/* CARDs */}
      <div className='w-screen h-100  mt-10 flex justify-evenly items-center'>
                    {/* CARD_1 */}
          <div className='w-80 h-90  hover:scale-98 transition-all shadow-2xl shadow-gray-500 rounded '>
                 <img 
                 className='w-44 h-45 py-2   m-auto object-cover rounded-full  '
                 src="https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg" alt="" />

                 <h1 className='text-xl py-2 font-medium font-sans block text-center'>Sheikh Jalil</h1>

                 <p className='block font-medium text-lg text-green-400 text-center'>President</p> 

                 <p className='flex text-4xl py-15 font-light w-full h-10 gap-5 items-center justify-center '>  <FaFacebook /> <FaInstagram />  <FaTwitter />  </p>
                 
          </div>
                      {/* CARD_2 */}
          <div className='w-80 h-90  hover:scale-98 transition-all shadow-2xl shadow-gray-500 rounded '>
                 <img 
                 className='w-44 h-45 py-2   m-auto object-cover rounded-full  '
                 src="https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg" alt="" />

                 <h1 className='text-xl py-2 font-medium font-sans block text-center'>Md Sikendar ALI</h1>

                 <p className='block font-medium text-lg text-green-400 text-center'>Secretry</p> 

                 <p className='flex text-4xl py-15 font-light w-full h-10 gap-5 items-center justify-center '>  <FaFacebook /> <FaInstagram />  <FaTwitter />  </p>
                 
          </div>
                      {/* CARD_3 */}
          <div className='w-80 h-90  hover:scale-98 transition-all shadow-2xl shadow-gray-500 rounded '>
                 <img 
                 className='w-44 h-45 py-2   m-auto object-cover rounded-full  '
                 src="https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg" alt="" />

                 <h1 className='text-xl py-2 font-medium font-sans block text-center'>Md Akbar Ali</h1>

                 <p className='block font-medium text-lg text-green-400 text-center'>Managing Director</p> 

                 <p className='flex text-4xl py-15 font-light w-full h-10 gap-5 items-center justify-center '>  <FaFacebook /> <FaInstagram />  <FaTwitter />  </p>
                 
          </div>
          <div className='w-80 h-90  hover:scale-98 transition-all shadow-2xl shadow-gray-500 rounded '>
                 <img 
                 className='w-44 h-45 py-2   m-auto object-cover rounded-full  '
                 src="https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg" alt="" />

                 <h1 className='text-xl py-2 font-medium font-sans block text-center'>Tahir Ansari</h1>

                 <p className='block font-medium text-lg text-green-400 text-center'>Treasurer</p> 

                 <p className='flex text-4xl py-15 font-light w-full h-10 gap-5 items-center justify-center '>  <FaFacebook /> <FaInstagram />  <FaTwitter />  </p>
                 
          </div>
          
      </div>
                     {/* FOOTER */}
     
     

    </div>
  )
}

export default Team
