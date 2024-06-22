import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'

const Register = () => {

    const [name,setName]= useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [phone, setPhone]=useState('')
    const [address, setAddress]=useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
      try{
        const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{
            name,email,password,address
        })
      }
      catch(error){
        console.log(error)
        toast.error("something went wrong");
      }

    }
  return (
    <Layout title="Register E-commerce App">

    <div className='register '>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder='Enter Your Name'
    value={name}
    onChange={(e) => setName(e.target.value)}
    required/>
  </div>

  <div className="mb-3">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder='Enter Email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required/>
  </div>

  <div className="mb-3">
    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder='Enter password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required/>
  </div>

  <div className="mb-3">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder='Enter phone Number'
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    required/>
  </div>

  <div className="mb-3">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder='Enter Address'
    value={address}  onChange={(e) => setAddress(e.target.value)}
    required/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    
</div>

    </Layout>
  )
}

export default Register
