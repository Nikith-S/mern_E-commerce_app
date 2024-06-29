import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import {useS, useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'


const CreateProduct = () => {

const [categories, setCategories] = useState([])
const [photo, setPhoto]= useState('')
const [name, setName]= useState('')
const [description, setDescription]= useState('')
const [price, setPrice]= useState('')
const [category, setCategory]= useState('')
const [quantity, setQuantity]= useState('');
const [shipping, setShipping]= useState('')


const getAllCategory = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/getcategory`);
    if (data?.success) {
      setCategories(data?.category);
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong in getting all category');
  }
};


useEffect(() => {
  getAllCategory();
}, []);

  return (
    <Layout title={'DashBoard- CreateProduct'}>
         <div className="container-fluid m-3 p-3">
    <div className="row">
    <div className="col-md-3">
        <AdminMenu/>
    </div>
    
    <div className="col-md-9">
    
        <h1>CreateProduct</h1>
    </div>
    </div>
    </div>
    
       </Layout>
  )
}

export default CreateProduct
