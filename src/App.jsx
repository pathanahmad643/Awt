import React from 'react'
import { Route,Routes } from "react-router-dom"
import Home from './Block1/Home/Home'
import About from './Block1/About/About'
import Login from './Block1/Login'
import Media from './Block1/Media/Media'
import Commercial from './Block1/Commercial'
import Download from './Block1/Download'
import Team from './Block1/About/Team'
import Info from './Block1/About/Info'
import Ourwork from './Block1/Work/Ourwork'
import Scd from './Block1/Work/Scd'
import Health from './Block1/Work/Health'
import Educ from './Block1/Work/Educ'
import Env from './Block1/Work/Env'
import Resrch from './Block1/Work/Resrch'
import Misscelleneous from './Block1/Work/Miscelleneous'
import Events from './Block1/Media/Events'
import Gallary from './Block1/Media/Gallary'
import Reports from './Block1/Media/Reports'
import ContactUS from './Block1/ContactUS'
import Notfound from './Block1/Notfound'





const App = () => {
  

  return (
    <div>
     
      
     

      <Routes>
          <Route path='/' element={<Home/>}/> 
          
          <Route path='/about' element={<About/>} >
              {/* <Route path='About' element={<Aboutus/>}/> */}
              <Route path='Team' element={<Team/>}/>
          </Route>
                       {/* OURWOrk */}
          <Route path='/Ourwork' element={<Ourwork/>}/>
          <Route path='/Scd' element={<Scd/>}/>
          <Route path='/Education' element={<Educ/>}/>
           <Route path='/Health' element={<Health/>}/>
           <Route path='Env' element={<Env/>}/>
           <Route path='/Miscelleneous' element={<Misscelleneous/>}/>
           <Route path='/Resrch' element={<Resrch/>}/> 
    
                      {/* MEDIA */}
           <Route path='/Media' element={<Media/>}/>
           <Route path='/Events' element={<Events/>}/>
           <Route path='/Gallary' element={<Gallary/>}/>
           <Route path='/Reports' element={<Reports/>}/>


           <Route path='/Commercial' element={<Commercial/>}/>
           <Route path='/ContactUS' element={<ContactUS/>}/>
           <Route path='/Download' element={<Download/>}/> 

           <Route path='/*' element={<Notfound/>}/>

           
        
      </Routes>

    </div>
  )
}

export default App
