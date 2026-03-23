import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // hooks-useState that will be updated later in the program
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")

  // loading hook helps the user to know the cureent state of the subbmition when he / she clicks submit button
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("")

  // onSubmit function that will handle submitting of our form to flask api
  // the preventDefault is used due to normal page reloading when submit button is clicked
  const submit=async(e)=>{
    e.preventDefault()

    setError("")
    setSuccess("")
    setLoading("please wait as we register you..")

    // we use try catch to arrest/catch any error that might occur during submmition of the form

    try { 
      // FormData object that will hold all the users input which later will be sent to the server -flask api
      const data=new FormData()
      // append the key-value pairs to our data object
      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)

      // send a post request to the backend through signup endpoint
      // we use axios library which helps in makinga diffrent types of request methods
      // we can use await so that we can wait for response before moving to execute other lines of code
      const response= await axios.post("https://mathwity.alwaysdata.net/api/signup",data)


      setLoading("")
      console.log("response:",response)
      setSuccess(response.data.message)


      setUsername("")
      setEmail("")
      setPhone("")
      setPassword("")
      
    } catch (error) {

      setLoading("")
      setSuccess("")
      setError(error.message)
      
    }


  }

  return (
    <div className='row mt-4 justify-content-center password-container'>
      <div className="card shadow col-md-6 text-center">
        <h1 className='text-warning'>Signup...*_*</h1>
        <h4>0_0</h4>
        <h4 className='text-success'>{loading}</h4>
        <h4 className='text-danger'>{error}</h4>
        <h4 className='text-success'>{success}</h4>
        <form onSubmit={submit}>
          {username}
          <input type="text"className='form-control mt-4 mb-3' placeholder='Enter username' required value={username} onChange={(e)=>setUsername(e.target.value)}/> <i class="fa fa-eye" id="togglePassword"></i>
          <br />

          {email}
          <input type='email' className='form-control' required placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/><i class="fa fa-eye" id="togglePassword"></i> <br />

          {phone}
          <input type='tel' className='form-control'
          placeholder='Enter phone'required onChange={(e)=>setPhone(e.target.value)}/> <i class="fa fa-eye" id="togglePassword"></i> <br />
          
          {password}
          <input type="password" className='form-control' placeholder='Enter Password' required onChange={(e)=>setPassword(e.target.value)}/> <i class="fa fa-eye" id="togglePassword"></i> <br />

          <button type='submit' className='btn btn-secondary'>Sign up</button>

        </form>
        <p className='text-secondary'>Already have an account? <Link to={'/signin'}>Sign In</Link></p>

      </div>

    </div>
  )
}

export default Signup