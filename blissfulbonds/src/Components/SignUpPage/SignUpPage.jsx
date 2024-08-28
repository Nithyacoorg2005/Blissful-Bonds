import React from 'react'
import './SignUpPage.css'
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


const SignUpPage = () => {
return (
    <>
   <div className="sign">
    <div className="page">
        <h1>SignUp</h1>
        <div className="buttons">
            <button className="facebook"><i><FaFacebookF/></i><a href="https://www.facebook.com/">  facebook</a></button>
            <button className="Google"><i><FcGoogle/></i> <a href="https://www.google.com/">Google</a></button>
            <div className="form">
                <h5>Enter your Name:</h5>
               <input type="text" placeholder="Name" required/>
               <h5>Enter your Email:</h5>
               <input type="text" placeholder="Email" required/>
               <h5>Password:</h5>
               <input type="password" placeholder="Password" required/>
               <h5>Confirm Password:</h5>
               <input type="password" placeholder="Password" required/>
               <br/>
               <button className="butt">Sign Up</button>
               <h5>Already have an account?<a href="/">Login</a></h5>
                
              
            </div>
        </div>
    </div>

   </div>
   
      
    </>
  )
}

export default SignUpPage
