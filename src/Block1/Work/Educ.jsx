import React from 'react'
import Navbar from '../../NAV/Navbar'
import { Link } from 'react-router-dom'
import { Laptop,Users,BookOpen,House,Venus,HandHeart,FileText } from 'lucide-react';
import Footer from '../Home/Footer';

const Educ = () => {

  const data=[
    {
      p:"Conduct training for women in rural, backward, and tribal areas to identify their needs through surveys and training camps, enabling them to address challenges effectively.",
      icon:<Users color="blue" size='30px'/>
    },
    {
      p:"Organize primary, non-formal, and adult education centres for deprived communities. Support poor but meritorious students for higher studies.",
      icon:<BookOpen color="green" size='30px'/>
    },
    {
      p:"Undertake vocational education and skill development courses such as computer training, mobile repairing, tailoring, and more.",
      icon:<Laptop color="purple" size='30px' />
    },
    {
      p:"Manage Balwadis, crèches, and day-care centres, along with non-formal education programmes for children.",
      icon:<House color="brown" size='30px'/>
    },
    {
      p:"Promote women awareness and development programmes to eradicate illiteracy.",
      icon:<Venus color="#ec5ba8" size='30px'/>
    },
    {
      p:"Create awareness campaigns to discourage harmful practices like alcohol consumption, dowry, and female infanticide.",
      icon:<HandHeart color="#ec5ba8" size='30px'/>
    }, 
      {
         p:"Conduct adult literacy programmes for the illiterate population of rural and tribal areas.",
         icon:<FileText color="black" size='30px'/>
      }  
  ]

  return (
    <div className='w-screen h-full text-white '>
      <Navbar/>
      
        <div className='  flex justify-center items-center flex-col w-full h-80 bg-[url(https://www.awtbharat.com/public/education.jpeg)]  mt-25 mb-15 '>
           <h1
           className='relative w-full h-15 font-extrabold text-5xl  font-sans text-center '
           >Education & Awareness <span className='text-blue-500'>Programme</span></h1>
 
           <div className='flex font-medium text-lg gap-4 bg-purple-600 w-[30%] justify-center rounded-2xl  '>
                <Link className='hover:text-green-400' to='/'>/Home</Link>
                <Link className='hover:text-green-400' to='/About'>/About</Link>
                <Link className='hover:text-green-400' to='/Ourwork'>/Ourwork</Link>
                <Link className='text-green-400' to='/Education'>Education & AWareness</Link>
           </div>
       </div>

       <div className='w-[70%] h-90 m-auto mt-15 text-blue-600 shadow-xl shadow-gray-400 rounded-xl'>
             <h1 className='font-bold text-4xl font-sans text-center py-5'>Education and Awareness Programme</h1> 

             <p className='text-gray-600 font-400 px-13 py-5'>The majority of people in rural areas of our focused blocks work as daily laborers and have very little awareness about education. Due to their low income, which is often not enough for daily survival, they are unable to prioritize schooling for their children.</p>

             <p className='text-gray-600 font-400 px-13 py-2 '>Many parents prefer to involve their children as helpers in daily work rather than sending them to school. Financial challenges and lack of knowledge about government support schemes, such as free education, free uniforms, and scholarships, make the situation worse.</p>

             <p className='text-gray-600 font-400 px-13 py-2'>To address this, our organization has conducted awareness programmes highlighting the importance of education and its long-term impact. We also organize counseling sessions for parents to encourage them to send their children to school. More than 50 parents and children have actively participated in these programmes.</p>

       </div>

       <div className='w-[70%] h-90 m-auto mt-10 shadow-xl shadow-gray-400 rounded-xl'>
        <img className='w-full h-full overflow-hidden object-contain' src="https://www.awtbharat.com/public/educationpage.png" alt="" />
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

export default Educ
