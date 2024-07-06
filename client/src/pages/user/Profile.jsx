import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios  from 'axios';

const Profile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const {auth, setAuth} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  // get User Data

  useEffect(() => {
    const {email, name, phone,address} = auth.user
    setName(name)
    setPhone(password)
    setEmail(email)
    setAddress(address)
  },[auth?.user])



  return (
    <Layout title={'My Profile'}>
    <div className="container-flui p-3 m-3">
    <div className="row">
        <div className="col-md-3">
        <UserMenu/>
        </div>
        <div className="col-md-9">

        <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">USER PROFILE</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="nameInput"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="emailInput"
              placeholder="Enter Your Email"
              required
              disabled
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="passwordInput"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phoneInput"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="addressInput"
              placeholder="Enter Your Address"
              required
            />
          </div>
      
          <button type="submit" className="btn btn-primary">
       UPDATE
          </button>
        </form>
      </div>
        </div>
    </div>
    </div>

</Layout>
  )
}

export default Profile

