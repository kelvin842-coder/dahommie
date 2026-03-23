import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin =()=> {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")

  const navigate=useNavigate()

  const submit=async(e)=>{
    e.preventDefault()
    setError("")
    setLoading("please wait as we log you in....")

    try {
      // create form data object to hold key-value pairs
      const data=new FormData()
      // append to attach key-value pairs to our data object
      data.append("email",email)
      data.append("password",password)
     
      // send our data to flask api
      const response=await axios.post("https://mathwity.alwaysdata.net/api/signin",data)

      console.log("response:",response)
      setLoading("")

      if(response.data.user){
        navigate("/")


      }else{
        setError(response.data.message)
      }

    } catch (error) {
      setLoading("")
      setError(error.message)
    }

  }
  return (
    <div className='row justify-content-center mt-5'>
      <div className='card shadow col-md-6 text-center p-4'>

      
        <div className='mb-3 text-success'> </div>  
        <div className='mb-3 text-info'><h2>Signin</h2></div>
        <h6 className='text-warning'>{loading}</h6>
        <h6 className='text-danger'>{error}</h6>
        <div className='text-info'><p>.......Hilarious!!.......</p></div>
        
        <form onSubmit={submit}>


          {email}
          <input type="email" className='form-control'placeholder='please enter @email.....' required value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />

          {password}
          <input type="password" className='form-control'placeholder='please enter pa**word.....' required value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />

          <button type='submit' className='btn btn-success'>sign In</button>
      



        </form> <br />
        <p>Dont have an account <Link to={'/signup'}>sign up</Link></p>
      </div>

    </div>
  )
}

export default Signin