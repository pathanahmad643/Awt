import React, { useEffect, useState } from 'react'
import { Eye } from 'lucide-react';
import { Flag } from 'lucide-react';

import SliderBar from './SliderBar';
import Slider2 from './Slider2';
import Footer from './Footer';
import Slider3 from './Slider3';



const Homeelem = () => {
  



  
  return (
    <div className='overflow-auto w-screen h-screen  '>


               
                      {/* BOX-1 */}

     <div className='w-full h-150  mt-12 mb-10'>
      <SliderBar/>
     </div>
                        {/* BOX-2 */}

       <div className=' flex justify-center items-center ring-2 ring-white w-[80%] h-90 rounded-2xl m-auto border-2 bg-[url(https://images.unsplash.com/photo-1637825891035-1930cbd564dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] '>
         <div className='w-[60%] h-full text-white '>
           <h1
            className='text-4xl font-extrabold font-sans text-center px-5 py-10 '
            >Alibro's Welfare Trust</h1>
           <p 
           className='w-[80%] h-full m-auto text-lg font-sans text-center'
           >The office of the trust shall be situated at <strong> Banke Bihari Market, Near Block Chowk, Ormanjhi Ranchi, Jharkhand - 835219.</strong> The trust aims to open, establish, set up, run, maintain, assist, finance, support and/or aid in setting up and maintaining madarsas, schools, colleges, study centres, universities, polytechnic colleges, medical colleges, vocational and other institutions for advancement of education and knowledge.</p>
         </div>
         <div className='w-[40%] h-full flex justify-center items-center '>
             <img 
             className='w-[90%] h-[90%] rounded-2xl '
             src="https://www.awtbharat.com/public/education.jpeg" alt="" />
         </div>
       </div>

                        {/* BOX-3 */}

         <div className=' w-full h-410 mt-10  border-2 border-amber-50 '>  
             <Slider3/>
          </div>   
                          {/* BOX-4 */}

          <div className=' w-full h-120 mt-1
          0'>
            <h1 className='text-white text-4xl font-extrabold font-sans text-center py-10'>Our Vision & Mission</h1>
            <div className='w-full h-100  flex justify-center items-center  gap-5'>

              <div className='vision w-[40%] h-[90%] rounded-xl ring-2 ring-white    bg-[url(https://images.unsplash.com/photo-1637825891035-1930cbd564dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] '>
                  <h1
                   className=' flex text-3xl text-center items-center px-8 py-4 text-white font-bold'> <Eye size={52} strokeWidth={1.25} /> Our Vision</h1>
                  <p
                  className='text-white font px-8'
                  >Our vision is to see a future where every rural community is empowered with education, healthcare, and dignity of life. We dream of villages that are not left behind, but instead become models of growth, self-reliance, and innovation. A poverty-free India where opportunities are equally accessible to all, regardless of background or circumstances.</p>
                 <div>
                   <button
                  className='text-bold active:scale-95 underline font-semibold px-8 py-10 text-white'>Read more</button>
                 
                 </div>

             </div>

              <div className='w-[40%] h-[90%] rounded-xl ring-2 ring-white text-white  bg-[url(https://images.unsplash.com/photo-1637825891035-1930cbd564dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8M.HxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>

                <h1 
                className='mission flex font-bold text-3xl px-8 py-4 items-center'><Flag size={52} strokeWidth={1.25} /> Our Mission</h1>
                <p
                className='text-white font px-8'
                >
                 To open, establish, set-up, run, maintain, assist, finance, support and/or aid to or help in the setting up and/or maintaining and/or running madarsa , schools, colleges, study centres, for universities/colleges, polytechnic colleges, medical colleges, vocational and other institutions for advancement of education and of knowledge.
                </p>
                  <button 
                  className='text-bold active:scale-95 underline font-semibold px-8 py-10 text-white'>Read more</button>  
             </div>
            </div>
          </div>

                           {/* BOX-5 */}
          <div>
            <Slider2/>
          </div>
                           {/* BOX-6 */}

          <div 
          className='w-[70%] h-50 rounded-xl ring-1 ring-white m-auto bg-[url(https://images.unsplash.com/photo-1637825891035-1930cbd564dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
              <h1 
              className='text-4xl font-extrabold text-green-500 p-5 font-sans'>School Events</h1>
              <p 
              className='text-white text-lg font-light font-sans px-5'>A school organises many events where students can participate. These events help the students to discover their talents. It is always a happy and memorable moment to participate in these events. The event name was “The Mirage” . It told the story of a Fisherman and his greedy wife. I played the role of a Golden Mermaid. On that day, our teachers asked us to do makeup at home and then come to school.</p>
          </div>
                            {/* BOX-7 */}
        <div>
          <Footer/>
        </div>

           
    </div>

    
    
  )
}

export default Homeelem
