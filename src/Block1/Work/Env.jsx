import React from 'react'
import { TreePalm } from 'lucide-react'
import Navbar from '../../NAV/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'

const Env=() =>{

const data=[
  { 
      p:"Work for agricultural development using modern technology, equipment, improved seeds, and pesticides for better yield.",
      icon:<TreePalm strokeWidth={2} size='35px' color='green'  />
    },
    {
      p:"Promote small and cottage industries in rural areas with the help of khadi and village udyog.",
      icon:<TreePalm strokeWidth={2} size='35px' color='green'  />
    },
    {
      p:"Organize activities like animal husbandry, poultry, goatery, and fishery for economic development.",
      icon:<TreePalm strokeWidth={2} size='35px' color='green'  />
    },
    {
      p:"Encourage different income-generating activities..",
      icon:<TreePalm strokeWidth={2} size='35px' color='green'  />
    },
    {
      p:"Promote awareness in health, education, and environment.",
      icon:<TreePalm strokeWidth={2} size='35px' color='green'  />
    },
    {
      p:"Implement innovative and experimental education programmes related to biosphere..",
      icon:<TreePalm strokeWidth={2} size='35px' color='green'  />

    },
    { p:"Promote Mahila Mandals, Self Help Groups, and Youth Groups; provide microfinance for weaker sections..",
      icon: <TreePalm strokeWidth={2} size='35px' color='green'  />
    },
     { p:"Arrange handicrafts and cottage industries training centres for needy women.",
      icon: <TreePalm strokeWidth={2} size='35px' color='green'  />
    },
     { p:"Organize skill development programmes for rural youth to improve competence and managerial skills..",
      icon: <TreePalm strokeWidth={2} size='35px' color='green'  />
    },
     { p:"Introduce new farming technologies.",
      icon: <TreePalm strokeWidth={2} size='35px' color='green'  />
    },

]
  return (
    <div>
       <Navbar/>
      
  <div className='  flex justify-center items-center flex-col w-full h-80 bg-[url(https://i.pinimg.com/1200x/99/00/69/9900695d0074ed7306102da522b64a35.jpg)]  mt-25 mb-15 '>
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center '
           >Enironment Development <span className='text-green-600'>Programme</span></h1>
 
           <div className='flex font-medium text-lg gap-4 bg-purple-600 w-[35%] justify-center rounded-2xl  '>
                <Link className='hover:text-green-400' to='/'>/Home</Link>
                <Link className='hover:text-green-400' to='/About'>/About</Link>
                <Link className='hover:text-green-400' to='/Ourwork'>/Ourwork</Link>
                <Link className='text-green-400' to='/Education'>Environment Development</Link>
           </div>
       </div>

       <div className='w-[70%] h-90 m-auto mt-15 text-green-600 shadow-xl shadow-gray-400 rounded-xl'>
             <h1 className='font-bold text-4xl font-sans text-center py-5'>Enviornment Development Programme</h1> 

             <p className='text-gray-600 font-400 px-13 py-5'>Environment, Development and Sustainability focuses on the complex interactions between society, economy, and environment. It seeks ways to achieve sustainability in agriculture, forestry, water, and energy usage while promoting awareness, skill development, and resource management for future generations. The programme also supports women empowerment, rural industries, and eco-friendly livelihood options..</p>

             <p className='text-gray-600 font-400 px-13 py-2 '>Our trust actively works for environmental development through various awareness and sustainability programs. We organize tree plantation drives, cleanliness campaigns, waste management activities, and water conservation initiatives to create a greener and healthier society. We also spread awareness among people about reducing pollution, saving natural resources, and maintaining cleanliness in daily life. Through teamwork and community participation, our trust aims to protect the environment and inspire people to contribute towards a clean, safe, and sustainable future.</p>


       </div>

       <div className='w-[70%] h-90 m-auto mt-20 shadow-xl shadow-gray-400 rounded-xl'>
        <img className='w-full h-full overflow-hidden object-fill' src="https://www.awtbharat.com/public/environment2.png" alt="" />
       </div>

       <div className='w-[70%] h-full m-auto mt-20  rounded-xl '>

         <h1 className='w-full h-5 ml-[47%]'><TreePalm strokeWidth={2} size='45px' color='green'  /></h1>

         {data.map((d,idx) =>(
           <div key={idx} className=' flex justify-self-start items-center w-full h-17 m-auto shadow-2xl shadow-gray-400  rounded-xl mt-10 text-black hover:scale-105 transition ease-in duration-100  '>

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

export default Env
