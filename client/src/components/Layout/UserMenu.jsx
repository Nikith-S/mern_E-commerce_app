import React from 'react'
import { NavLink } from 'react-router-dom'
const UserMenu = () => {
  return (
    <>
    <div className="text-centre">
  <div className="list-group">
   
   <h4>DashBoard</h4>
    <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
    <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>

  </div>
  </div>
    
    </>
  )
}

export default UserMenu
