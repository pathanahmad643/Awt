import React from 'react'
import Navbar from '../../NAV/Navbar'
import Footer from '../Home/Footer'
import { Landmark,UserRoundSearch,Users,BriefcaseMedical,Navigation,ShieldCheck,Smile,HandHeart,GraduationCap,Music } from 'lucide-react'
import { Link } from 'react-router-dom'

const  Miscelleneous =() => {

  const data = [

      { 
      p:"To undertake various development programmes and national thrust programmes of government and non government agencies in the rural area.",
      icon:<Landmark color="#153aa8" strokeWidth={2} size='35' />
    },
    {
      p:"To work as a forum to provide job opportunities to the unemployed youth.",
      icon:<UserRoundSearch size={35} color="#15a832" strokeWidth={2} />
    },
    {
      p:"To bring about effective integration of community participation in various development schemes launched by the Government and other social development organizations.",
      icon:<Users size={35} color="purple" strokeWidth={2} />
    },
    {
      p:"To offer management consultancy and implementation support services to various State and Central Government organizations.",
      icon:<BriefcaseMedical size={35} color="orange" strokeWidth={2} />
    },
    {
      p:"Providing legal aid to the women innocent prisoners, poor people etc.",
      icon:<Navigation size={35} color="Red" strokeWidth={2} />
    },
     {
      p:"Helping the children and family of the prisoners..",
      icon:<Users size={35} color="pink" strokeWidth={2} />
    },
    {
      p:"Undertaking correctional measures for the prisoners.",
      icon:<ShieldCheck size={35} color="blue" strokeWidth={2} />
    },
    {
      p:"To rescue and rehabilitate children working in hazardous industries, by organizing fieldwork and surveys and also by helping other welfare agencies working in the area of child labour..",
      icon:<Smile size={35} color="yellow" strokeWidth={2} />
    },
     {
      p:"To work for the rehabilitation of street children though education and imparting values and life skills..",
      icon:<HandHeart size={35} color="pink" strokeWidth={2} />
    },
    {
      p:"To create awareness about the govt. schemes & its implementations..",
      icon:<GraduationCap size={35} color="purple" strokeWidth={2} />
    },
    {
      p:"To work for the promotion of folk cultures, music and other parts of different areas and protect them from vanishing by organizing functions and encouraging artists..",
      icon:<Music size={35} color="blue" strokeWidth={2} />
    },
  ]

  return (
    <div>
       < Navbar/>

         <div className='  flex justify-center items-center flex-col w-full h-80 bg-[url(https://i.pinimg.com/1200x/ff/68/f1/ff68f1f111b643e1b1e1c3a67bee020b.jpg)]  mt-25 mb-15 '>
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center t '
           >Miscellaneous <span className='text-red-800'>Programme</span></h1>
 
           <div className='flex font-medium text-lg gap-4 bg-purple-600 w-[35%] justify-center rounded-2xl text-white  '>
                <Link className='hover:text-green-400' to='/'>/Home</Link>
                <Link className='hover:text-green-400' to='/About'>/About</Link>
                <Link className='hover:text-green-400' to='/Ourwork'>/Ourwork</Link>
                <Link className='text-green-400' to='/Miscellaneous'>Miscellaneous program</Link>
           </div>
       </div>
     
       <div className=' flex w-[70%] h-90 m-auto mt-15 text-blue-900 shadow-xl shadow-gray-400 rounded-xl'>
            <div className='w-[40%] h-full hover:scale-y-130 ease-in-out delay-200 '>
                <img className='w-full h-full object-contain'
                src="https://www.awtbharat.com/public/Card8.png" alt="" />
            </div>
            <div className='w-[60%] h-full mt-20'>
               <h1 className='font-bold text-4xl  font-sans text-center py-5 text-red-800'>Research Training & Advocacy</h1> 
             
             <p className='text-gray-600 font-400 px-20'>Our Miscellaneous Programme includes multiple welfare, legal aid, and community-based activities aimed at uplifting marginalized groups, supporting street children, promoting folk culture, and creating job opportunities for the unemployed youth..</p>
            </div>
       </div>

       <div className='w-[70%] h-90 m-auto mt-20 shadow-xl shadow-gray-400 rounded-xl'>
        <img className='w-full h-full overflow-hidden object-contain' src="https://www.awtbharat.com/public/training.png" alt="" />
       </div>

       <div className='w-[70%] h-full m-auto mt-20 rounded-xl '>

         {data.map((d,idx) =>(
           <div key={idx} className=' flex justify-self-start items-center w-full h-full font-sans m-auto shadow-2xl shadow-gray-400  rounded-xl mt-10 text-black hover:scale-105 transition ease-in duration-100  '>

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

export default Miscelleneous
