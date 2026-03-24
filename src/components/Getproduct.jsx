import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Carousel from './Carousel'

const GetProducts = () => {
  // hooks for array comming from flask api
  const [products,setProduct]=useState([]) //empty array
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")

  const navigate=useNavigate()

  

  const img_url="https://mathwity.alwaysdata.net/static/images/"

  // function to get the products
  const getProducts=async()=>{
    setLoading("please wait as product loads...")
    setError()
    try {
      const response=await axios.get("https://mathwity.alwaysdata.net/api/get_product_details")
      console.log(response)
      setLoading("")
      setProduct(response.data)
    } catch (error) {
      setLoading("")
      setError(error.message)

    }
  }

  useEffect(()=>{
    getProducts()
  },[]) //empty dependancy


  return (
    <div className='row mt-4 container-fluid'>
      <Navbar/>
      <Carousel/>
        <h3 className='text-center text-muted'>Avilable products</h3>
        <h5 className='text-info'>{loading}</h5>
        <h5 className='text-warning'>{error}</h5>

        {/*map over products array and display them */}

        {products.map((product)=>(
            <div className='col-md-3 justify-content-center mb-4'>
              <div className="card shadow p-3 text-center card-margin">
                <img src={img_url+product.product_photo} alt={product.product_photo} className='product_img mt-3' />
                <div className='card-body'>
                  <h5 className='mt-2'>{product.product_name}</h5>
                  <p className='text-secondary'>{product.product_description}</p>
                  <b className='text-success'>Ksh:{product.product_cost}</b> <br />
                  <button className='btn btn-info' onClick={()=>navigate('/makepayment',{state:{product}})}>Buy Now</button>


                </div>

              </div>

            </div>

        ))


        }
        <Footer/>
    </div>
  )
}

export default GetProducts