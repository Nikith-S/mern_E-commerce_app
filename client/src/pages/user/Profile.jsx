import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Profile = () => {
  return (
    <Layout title={'My Profile'}>
    <div className="container-flui p-3 m-3">
    <div className="row">
        <div className="col-md-3">
        <UserMenu/>
        </div>
        <div className="col-md-9">

            <h1>Your Profile- DashBoard </h1>
        </div>
    </div>
    </div>

</Layout>
  )
}

export default Profile

