import React from 'react'
import './Navbar.css'
import image from '../../images/image.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <Link  to="/"><img src={image}  alt=""/></Link>
        <ul>
            <li><Link style={{textDecoration:"none",color:"peru"}} to="/OnlineDate">Online date</Link></li>
            <li><Link style={{textDecoration:"none",color:"peru"}} to="/Chat">Chat</Link></li>
            <li><Link style={{textDecoration:"none",color:"peru"}}to="/Connections">Connections</Link></li>
            <li><Link style={{textDecoration:"none",color:"peru"}}to ="/Plus">Blissful Bonds Plus</Link></li>
        </ul>
        <div className="signupsbtn">
        <button className="btn"><Link style={{textDecoration:"none",color:"#fff"}} to="/SignUpPage">Sign Up</Link></button>
        <button className="btn"><Link style={{textDecoration:"none",color:"#fff"}} to="/More">More</Link></button>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
