import axios from 'axios'
import React, { useState } from 'react'


const AddProduct = () => {

      const[product_name,setproduct_name]=useState("")
      const[product_description,setproduct_description]=useState("")
      const[product_cost,setproduct_cost]=useState("")
      const[product_photo,setproduct_photo]=useState("")

      const[loading,setLoading]=useState("")
      const[error,setError]=useState("")
      const[success,setSuccess]=useState("")

      
      const submit=async(e)=>{

        e.preventDefault()
        setError("")
        setSuccess("")

        setLoading("please wait as we add your request...")


        try{

          const data=new FormData()

          data.append("product_name",product_name)
          data.append("product_description",product_description)
          data.append("product_cost",product_cost)
          data.append("product_photo",product_photo)

          const response=await axios.post("https://mathwity.alwaysdata.net/api/add_product",data)

          setLoading("")
          console.log(response)
          setSuccess(response.data.message)         
          
        } catch (error){
          setLoading("")
          setSuccess("")
          setError(error.message)
        }
      }

  return (
      <div className='row mt-4 justify-content-center'>
         <div className='card shadow text-center p-5 col-md-6'>
          <h1 className='text-warning'>Add Product</h1>
          <h4 className='text-info'>{loading}</h4>
          <h4 className='text-danger'>{error}</h4>
          <h6 className='text-success'>{success}</h6>
            <form onSubmit={submit}>
              {product_name}
              <input type="text " className='form-control' placeholder=' product name.................' value={product_name} onChange={(e)=>setproduct_name(e.target.value)} /> <br />
              {product_description}
              <input type="text " className='form-control' placeholder='*enter description* ' value={product_description} onChange={(e)=>setproduct_description(e.target.value)} /> <br />
              {product_cost}
              <input type="text " className='form-control' placeholder='enter cost.................... ' value={product_cost} onChange={(e)=>setproduct_cost(e.target.value)} /> <br />
              <input type="file" className='form-control' required accept='image/*' onChange={(e)=>setproduct_photo (e.target.files[0])} /> <br />
              <b className='text-primary'>Browse/Upload product</b> <br />

              <button type='submit' className='btn btn-info mt-4'>Add product</button>
            </form>
             
         </div>


      </div>
      


  )
}

export default AddProduct