import React, { useState } from 'react'
import './css/loginsignup.css'

const Loginsignup = () => {

  const [state,setState] = useState("Sign Up")
  const [formData,setFormData] = useState({
    "username":"",
    "email":"",
    "password":""
  })

const changeHandler = (e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

  const Login = async ()=>{
    console.log('Login success',formData);
    let responseData;
    await fetch('https://shoppy-backend-pt.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/')
    }else{
      alert(responseData.error)
    }
  }

  const SignUp = async ()=>{
    console.log('SignUp success',formData);
    let responseData;
    await fetch('https://shoppy-backend-pt.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/')
    }else{
      alert(responseData.error)
    }
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-field">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?Login():SignUp()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login</span></p>
        :<p className="loginsignup-login">Create an account?<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
