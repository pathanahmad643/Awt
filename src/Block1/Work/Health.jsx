import React from 'react'
import Navbar from '../../NAV/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'
import { Droplet,Leaf,Accessibility,HeartPulse,BriefcaseMedical,Users,Venus,Hospital } from 'lucide-react'

const Health = () => {

  const data =[
    { 
      p:"Take care of Village Tanks, wells and provide drinking water through various programmes.",
      icon:<Droplet strokeWidth={2.5} color="blue" size='35px'/>
    },
    {
      p:"Undertake sanitation programmes for better eco-friendly rural environment.",
      icon:<Leaf strokeWidth={2.5} color='green'size='35px' />
    },
    {
      p:"Provide medical facilities for needy and poor people where services are inadequate.",
      icon:<Hospital color="red" strokeWidth={2.5} size='35px' />
    },
    {
      p:"Organize activities for development of physically handicapped and other special needs.",
      icon:<Accessibility strokeWidth={2.5} size='35px' color='purple' />
    },
    {
      p:"Promote general health conditions of communities.",
      icon:<HeartPulse strokeWidth={2.5} size='35px' color='red'/>
    },
    {
      p:"Conduct health camps and supply medicines to needy persons.",
      icon:<BriefcaseMedical strokeWidth={2.5} size='35px' color='red'/>

    },
    { p:"Implement family welfare and population education programmes.",
      icon: <Users strokeWidth={2.5} size='35px' color='blue'/>
    },
    {
      p:"Organize safe mother & child survival projects.",
      icon:<Venus strokeWidth={3} size='35px' color='#ec5ba8'/>
    },
    {
      p:"Conduct voluntary blood donation programmes.",
      icon: <Droplet strokeWidth={3} size='35px' color='red' />
    }
  ]

  return (
    <div className='w-full h-full text-white'>
      <Navbar/>

        <div className='flex justify-center items-center flex-col w-full h-80 bg-[url(https://www.awtbharat.com/public/hand.jpg]  mt-25 mb-15 '>
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center text-black '
           >Health & Sanitation <span className='text-blue-500'>Programme</span></h1>
 
           <div className='flex font-medium text-lg gap-4 bg-purple-600 w-[30%] justify-center rounded-2xl  '>
                <Link className='hover:text-green-400' to='/'>/Home</Link>
                <Link className='hover:text-green-400' to='/About'>/About</Link>
                <Link className='hover:text-green-400' to='/Ourwork'>/Ourwork</Link>
                <Link className='text-green-400' to='/Health'>Health & Sanitation</Link>
           </div>
       </div>

       <div className='w-[70%] h-70 m-auto mt-15 text-blue-600 shadow-xl shadow-gray-400 rounded-xl'>
             <h1 className='font-bold text-4xl font-sans text-center py-5'>Education and Awareness Programme</h1> 

             <p className='text-gray-700 font-500  px-13 py-5'>We encourage communities to adopt secure sanitation and hygiene behaviour and help build household infrastructure. Our incorporated water and sanitation model reduces incidences of water-borne sicknesses and lowers malnutrition rates thereby maintaining kids and families healthy. Access to private, safe bathrooms with water gives women dignity and decreases the daily struggle of fetching and carrying water.</p>

             

       </div>

        <div className='w-[70%] h-90 m-auto mt-10 shadow-xl shadow-gray-400 rounded-xl'>
        <img className='w-full h-full overflow-hidden object-contain' src="https://www.awtbharat.com/public/health1.png" alt="" />
        </div>

          <div className='w-[70%] h-full m-auto mt-10 shadow-xl shadow-gray-400 rounded-xl'>
         <h1>Key Focus Areas</h1>
         {data.map((d,idx) =>(
           <div key={idx} className=' flex justify-self-start items-center w-[88%] h-17 m-auto shadow-2xl shadow-gray-400  rounded-xl mt-10 text-black hover:bg-blue-100 transition ease-in-out duration-100  '>
             <h3 className=' px-10 py-2.5 rounded-full w-15 h-15 hover:rotate-7 '>{d.icon}</h3>
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

export default Health
