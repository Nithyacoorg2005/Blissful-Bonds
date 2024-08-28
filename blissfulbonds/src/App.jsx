import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import './App.css'
import OnlineDate from './Components/OnlineDate/OnlineDate'
import Chat from './Components/Chat/Chat'
import More from './Components/More/More'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUpPage from './Components/SignUpPage/SignUpPage'
import Updates from './Components/Updates/Updates'
import Plus from './Components/Plus/Plus'
import Connections from './Components/Connections/Connections'



const App = () => {
 
  return (
    <>
       
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<><Main/></>}/>
      <Route path="/OnlineDate"  element={<OnlineDate/>}/>
      <Route path="/Chat" element={<Chat/>}/>
      <Route path="/SignUpPage" element={<SignUpPage/>}/>
      <Route path="/Updates" element={<Updates/>}/>
      <Route path="/More" element={<More/>}/>
      <Route path="/Plus" element={<Plus/>}/>
      <Route path="/Connections" element={<Connections/>}/>
     
    </Routes>
 
    
    </BrowserRouter>
  
 
    

      
    </>
  )
}

export default App
