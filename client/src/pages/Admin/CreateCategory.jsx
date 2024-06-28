import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import toast from 'react-hot-toast';
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm';

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");

  const handleSubmit= async(e)=> {
    e.preventDefault();
    try{
      const {data} = await axios.post(`${process.env.REACT_APP_API}/api/v1/category/create-category`, {name})
      if(data?.success){
        toast.success(`${name} is created`)
        getAllCategory();
      }
      else{
        toast.error(data.message)
      }
    }catch(error){
      console.log(error)
      toast.error("Something went wrong in Input form")

    }
  }

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/getcategory`);

      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong in category');
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={'DashBoard - Create Product'}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className="p-3 w-50">
            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName}/>

            </div>
            <div className="w-75">
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <tr key={c._id}>
                      <td>{c.name}</td>
                      <td>
                        <button className="btn btn-primary ms-2">Edit</button>
                        <button className="btn btn-danger ms-2">Delete</button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
