import {useState} from "react"
import '../SignUp/SignupSec.css'
import eml from '../Assets/LoginSignup/eml.png'
import psd from '../Assets/LoginSignup/psd.png'
import person from '../Assets/LoginSignup/person.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function SignupSec() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('mongodb://localhost:3000/signup', {name, email, password})
    .then(result => {console.log(result)
     navigate('/login')
    })
    .catch(err => console.log(err))


  }

  return (
    <form onSubmit={handleSubmit}>

    
    <div className="sign--container">
      
      <div className="sign--header">
        <div className="sign--text">Sign Up</div>
        <div className="sign--underline"></div>
      </div>
      <div className="sign--inputs">


        <div className="sign--input">
          <img src={person} alt=""></img>
          <input type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required/>
        </div>
        

        <div className="sign--input">
          <img src={eml} alt=""></img>
          <input type="email" 
            placeholder="Email Id" 
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>

        <div className="sign--input">
          <img src={psd} alt=""></img>
          <input type="password" 
          
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
          required/>
        </div>

       

        
        <div className="sign--submit-container">
        <button type="submit" className="submit" >Sign Up</button>

          {/* <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
          
        </div>
      </div>

    </div>
    </form>
  )
}

export default SignupSec