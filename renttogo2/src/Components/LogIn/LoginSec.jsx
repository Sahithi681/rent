import React from 'react'
import './LogicSec.css'
import eml from '../Assets/LoginSignup/eml.png'
import psd from '../Assets/LoginSignup/psd.png'


import { Link } from 'react-router-dom'


function LoginSec() {



  return (
    <div className="login--container">
      
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
       
        

        <div className="input">
          <img src={eml} alt=""></img>
          <input type="email" placeholder="Email Id" required />
        </div>

        <div className="input">
          <img src={psd} alt=""></img>
          <input type="password" placeholder="Password" required/>
        </div>

        <div className="forgot-password"> Don't have an account? 
        <span >
          <Link to="/signup">Sign Up</Link>
        </span> 
        </div>


        
        <div className="submit-container">
        <button type="submit" className="submit" >Login</button>
          {/* <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> */}
        </div>
      </div>

    </div>
  )
}

export default LoginSec