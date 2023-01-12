import React, {useContext}from 'react'
import { useNavigate } from 'react-router-dom';
import { UseContext } from './UseContext';

 const Login = () => {
    const navigate = useNavigate();
    const {setEmail, setName} = useContext(UseContext)

    const registerUser = () =>{
        navigate("/home")
    }
  return (
   <center>
    <div>
        <h1>Register Now.....!</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <input  type="text" placeholder='enter your name please' onChange={(e) => {
            setName(e.target.value);
        }}>
           
        </input>
        <br/>
        <input type="text" placeholder='eneter your emali' 
        onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <button onClick={registerUser}>submit</button>
    </div>
   </center>
  )
}

export default Login