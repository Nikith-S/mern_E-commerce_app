import React from 'react'
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../context/auth';
const AdminDashBoard = () => {


const {auth} = useAuth();


  return (
  <Layout>

   <div className="container-fluid m-3 p-3">
    <div className="row">
      <div className="col-md-3">

        <AdminMenu/>

      </div>
      <div className="col-md-9 ">
      <div className="card w-75 p-3">
         <h3>admin Name:{auth?.user?.name}</h3>
         <h3>admin Email:{auth?.user?.email}</h3>
         <h3>admin Contact:{auth?.user?.phone}</h3>
      </div>
      </div>
    </div>

   </div>
  </Layout>
  )
}

export default AdminDashBoard
