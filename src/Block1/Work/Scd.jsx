import React from 'react'
import Navbar from '../../NAV/Navbar'
import { Link} from 'react-router-dom'
import {Sprout,Store,HandHeart,IndianRupee,Hospital,BookOpen,Venus, icons} from 'lucide-react'
import {Shirt,Wrench ,Flower2,FlaskConical,Users,TestTubeDiagonal} from 'lucide-react'
import {Earth,Droplet,Building2} from 'lucide-react'
import Footer from '../Home/Footer'


function Scd() {
  const data= [

     {  p:"To work for the development of Agriculture with application of appropriate technology, modern equipments, developed seeds, pesticides for better yield.",
      icon:<Sprout color="#1fb761" size='40px' />

     },
       
      { p:"To organize small and cottage industries in the rural area with the help of khadi and village udyog.",
        icon:<Store color="brown" size='35px' />
      },

      { p:"To organize activity like animal husbandry, poultry, goatery, fishery for economic development.",
        icon:<HandHeart color="#ec5ba8" size='35px'/>
      },

      {p:"To organize different income generating activities.",
          icon:<IndianRupee color="blue" size='35px' />
       },

       { p:"To promote awareness in various field such as Health Education etc.",
        icon:<Hospital color="red" size='35px' />
       },

        {p:"To implement innovative and experimental education programmes for children activities in the bio-sphere and vice verse",
          icon:<BookOpen color="purple" size='35px'/>
        },

       { p:"To promote Mahila Mandals, Self Help Groups and Youth Groups for the development of women and youths and also provide micro finance for weaker section of society according to the law prevailing that time and the trustees to make rule and regulation as per law prevailed.",
        icon:<Venus color="#ec5ba8" size='35px'/>
       },

        {p:"To arrange handicrafts and cottage industries training centres for the needy women.",
          icon:<Shirt color="blue" size='35px'/>
        },

     {  p:"To organize different skill development programmes to raise the competency and managerial skill of the rural youths",
      icon:<Wrench color="brown" size='35px'/>
     },

        {p:"To introduce new technology of farming.",
          icon:<Flower2 color="green" size='35px'/>
        },

       { p:" To conduct lab to land programmes.",
        icon:<FlaskConical color="gray" size='35px'/>
       },

       { p:"To impact vocational training to farmers and women.",
        icon:<Users color="blue" size='35px'/>
       },

       { p:"To give demonstrations and perform farm testing programmes.",
        icon:<TestTubeDiagonal color="gray" size='35px'/>
       },

       { p:" To enable endeavors like watershed development, environmental management, resources planning etc.",
        icon:<Earth color="green" size='35px'/>
       },

       { p:"To envisage a role in planning of water resources so as to serve the purpose of sustainability and equity.",
        icon:<Droplet color="blue" size='35px'/>
       },

      {  p:"To work towards building local tribal women's organization to improve their position and conditions of living.",
        icon:<Building2 color="red" size='35px'/>
      },
    
  
  ]
  return (
    <div className='w-screen h-full  text-white'>
           <Navbar/>
       <div className='  flex justify-center items-center flex-col w-full h-80 bg-[url(https://www.awtbharat.com/public/social_head.png)] mt-25 mb-15'>
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center '
           >Social Economic Development <span className='text-green-500'>Programme</span></h1>
 
           <div className='flex font-medium text-lg gap-4 bg-purple-600 w-[30%] justify-center rounded-2xl  '>
                <Link className='hover:text-green-400' to='/'>/Home</Link>
                <Link className='hover:text-green-400' to='/About'>/About</Link>
                <Link className='hover:text-green-400' to='/Ourwork'>/Ourwork</Link>
                <Link className='text-green-400' to='/Scd'>Social Development</Link>
           </div>
       </div>

       <div className='w-[70%] h-65 m-auto text-black shadow-xl shadow-gray-500'>
          <h1 className='text-3xl font-bold font-sans text-center py-10'>Social Economic Development Programme</h1>
          <p className='px-40 font-400 text-gray-600 font-sans'
          >The services and outputs of the Social Development Division include regional, national and subnational studies; comparative analyses of policies and policymaking services; the dissemination and exchange of experiences in respect of analytical models and policy alternatives; the collection, processing and dissemination of data on indicators and the management of social policies; the coordination of stakeholders and specialized institutions; technical assistance and training for national working groups.</p>
       </div>

       <div className='w-[80%] flex h-80 m-auto mt-25 '>
         <div className='w-[30%] h-full hover:scale-110 transition ease-out delay-150'>
             <img className='w-full h-full object-contain '
              src="https://www.awtbharat.com/public/social_icon.png" alt="" />
         </div>
         <div className='full h-full p-20 text-black '>
           <h1 className='font-bold text-3xl '>Empowering Communities , Driving Change</h1>
           <p className='w-100 h-70 text-gray-500 font-400 py-10'>Our Social Development Division focuses on fostering inclusive growth, promoting education, sustainable agriculture,  women’s empowerment, and creating opportunities for underprivileged communities.</p>
         </div>
      </div>

      {data.map((d,idx)=>(
        
         <div key={idx} className=' flex justify-self-start items-center w-[80%] h-17 m-auto shadow-2xl shadow-gray-400 rounded-xl mt-10 text-black hover:shadow-gray-700 transition ease-in-out duration-100 '>
          <h3 className=' px-10 py-2.5 rounded-full w-15 h-15 '>{d.icon}</h3>
          <p className='px-3 font-sans'>{d.p}</p>
         </div>

      ))}

      <div>
        <Footer/>
      </div>



   </div>
  )
}

export default Scd
