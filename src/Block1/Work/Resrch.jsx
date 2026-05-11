import React from 'react'
import Navbar from '../../NAV/Navbar'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

const Resrch = () => {
    
  const data =[
      { 
      p:"To organize different training activities for the grass root level worker to raise their efficiency and skil",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"To organize different survey and research work on various aspect of rural development.",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"To organize Counseling centers for youth, HIV/AIDS patients, and other chronically ill persons..",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"Information dissemination against various habits/diseases and its side effects..",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"Doing research on various areas and bringing out issues that require attention.",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"Finding out areas with maximum risk and providing intervention services to prevent the calamity..",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"To undertake prefeasibility studies in the areas relating to Government, consultancy project monitoring, internal system design and implementation, reporting on implementation of projects, strategic planning, interim management, evaluation, financial planning, development consulting, capacity building for micro enterprises and organization development..",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"To promote scientific research training and field action in rural development.",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"To undertake other activities like field action project research, advocacy, networking and to promote understanding and better professional practice in the areas of social work, social services and allied professional fields.",
      icon:<GraduationCap color="#153aa8" size='35'  />
    },
    {
      p:"Promoting a broader understanding of rural poverty, including aspects related to health, human rights, entitlements and participation.",
      icon:<GraduationCap color="#153aa8" size='35'  />
    }
  ]

  return (
    <div>
      <Navbar/>

       <div className='  flex justify-center items-center flex-col w-full h-80 bg-[url(https://www.awtbharat.com/public/training_head.jpg))]  mt-25 mb-15 '>
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center text-white '
           >Research Training & Advocacy <span className='text-blue-600'>Programme</span></h1>
 
           <div className='flex font-medium text-lg gap-4 bg-purple-600 w-[35%] justify-center rounded-2xl text-white  '>
                <Link className='hover:text-green-400' to='/'>/Home</Link>
                <Link className='hover:text-green-400' to='/About'>/About</Link>
                <Link className='hover:text-green-400' to='/Ourwork'>/Ourwork</Link>
                <Link className='text-green-400' to='/Resrch'>Research & Devocacy</Link>
           </div>
       </div>
     
       <div className='w-[70%] h-90 m-auto mt-15 text-blue-900 shadow-xl shadow-gray-400 rounded-xl'>
             <h1 className='font-bold text-4xl font-sans text-center py-5'>Research Training & Advocacy</h1> 

             <p className='text-gray-600 font-400 px-13 py-5'>It takes into account the needs and aspirations of the people and thus is related to the realities of diversities. Advocacy at different levels are coherent to collective actions for effective implementation of various development activities. As part of community empowering process and the sustainability plan, training forms a core component of the organisation’s operational plan. Alibros seeks to mobilize and organize inter-agency and community resources for greater development management by conducting various camps, seminars, celebrating special days, awareness programs etc..</p>
       </div>

       <div className='w-[70%] h-90 m-auto mt-20 shadow-xl shadow-gray-400 rounded-xl'>
        <img className='w-full h-full overflow-hidden object-contain' src="https://www.awtbharat.com/public/training.png" alt="" />
       </div>

       <div className='w-[70%] h-full m-auto mt-20 rounded-xl '>

         <h1 className='text-center text-3xl font-bold text-blue-900'>Key Objects</h1>

         {data.map((d,idx) =>(
           <div key={idx} className=' flex justify-self-start items-center w-[88%] h-full font-sans m-auto shadow-2xl shadow-gray-400  rounded-xl mt-10 text-black hover:scale-105 transition ease-in duration-100  '>

             <h3 className=' px-10 py-2.5 rounded-full w-15 h-15  '>{d.icon}</h3>
              <p className='px-3 font-sans'>{d.p}</p>
         </div>
         ))}

       </div>



      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Resrch
