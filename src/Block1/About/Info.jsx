import React, { useState } from 'react'
import { SquareCheckBig } from 'lucide-react';
import Footer from '../Home/Footer';
const Info = () => {
   
  const data =[
    {p :'To open, establish, run, maintain and support madarsa, schools, colleges, study centres, universities, polytechnic       colleges, medical colleges, vocational and other institutions for advancement of education and knowledge.'
     },

     {
    p:"To open, establish promote, set up, run, maintain, assist, finance, support, and/or aid to or help in the setting up and/or maintaining and/or running computer training centers, Institutions for medical, Para Medical, Nursing, Technical, Non-Technical & Vocational courses, Skill Development Course, Training centers for motor vehicle driving, Hostels, boarding houses, libraries, reading rooms, gymnasium and other training and vocational institutions.",
    },

   {
     p:"To open, establish, promote, set-up, run, maintain, assist, finance, support, and/or aid or help in the setting up and/or maintain and/or running hospitals or other similar institutions and centers for rendering or providing medical relief and/or aid to the suffering humanities."
     },

     {
      p:"o establish, promote, set up, run, maintain, assist, finance, support and/or aid to or help in the setting up and/or maintaining and/or running orphanages, widow homes, lunatic, asylums, poor houses or other establishment for relief and/or help to the poor, old and infirm people and/or destitute."
     },

     {
      p:"To give, provide and render help and assistance to and implement any scheme for providing livelihood and upliftment of the poor"
     },

     
     {
      p:"To promote, organize, administer, establish, support, maintain and/or grant aid to any person, institute or society or organization whatsoever having for its objects of charitable purpose and to incur expenditure in connection there with."
     },

     
     {
      p:"To provide financial assistance to displaced, crippled, deaf, dump, blind, orphans, handicapped, students and disabled person or any other society, Trust, Institutions or authority looking after the welfare of such persons as mentioned above"
     },

    

  ];

  
    
  return (
    <div className=' w-screen h-full mt-10 '>

      <div className=' w-full h-[40%]   '>
          <img
          className='absolute w-full h-70  object-cover '
           src="https://www.awtbharat.com/public/about-us.png" alt="" />
           <h1 className='relative text-5xl font-extrabold font-sans text-center py-20 text-white text-shadow-sm text-shadow-purple-600'>Alibro's Walfare Trust</h1>
      </div>
       
       <div className=' flex justify-center items-center w-full h-full  '>

         <div className=' w-[70%]  bg-white text-black h-full '>
              <h1 className='text-3xl font-bold  text-center mt-25'>About Alibro's Walfare Trust</h1>
               <p className='px-10 py-3 text-lg  font-sarif font-light'>The office of the trust shall be situated at Banke Bihari Market , Near Block Chowk , Ormanjhi Ranchi , Jharkhand - 835219, India which may be shifted from time to time to such other place or places as the TRUSTEES may deem fit and proper at their discretion.</p>

              <div>
                <h1 className='text-2xl font-bold px-10 mt-10'>Our Objectives</h1>
              {data.map((d)=>(
                 <p className='px-10 py-3 text-lg  font-sarif font-light'><SquareCheckBig color="#ea15f9" strokeWidth={1.75} />{d.p}</p>
              ))}
             
              </div>
         </div>
       </div>

       <div><Footer/></div>

    </div>
    
      
  )
}

export default Info
