import React from 'react'
import { Link, NavLink    } from 'react-router-dom';
import { GiShop } from "react-icons/gi";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';

function Header() {

const {auth,setAuth} = useAuth();
 const handleLogout = () => {

setAuth({
  ...auth, 
  user:null,
  token:''
})
localStorage.removeItem('auth')
toast.success("logout Successfully");



 }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link    className="navbar-brand"><GiShop /> E-commerce App </Link>


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink    className="nav-link  "  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink    className="nav-link  "  to="/category">Category</NavLink>
        </li>
       {
       
       !auth.user  ?  (
        <>
        <li className="nav-item">
        <NavLink  className="nav-link"  to="/register">Register</NavLink>
      </li>

      <li className="nav-item">
        <NavLink  className="nav-link" to="/login">Login</NavLink>
      </li>
      </>
       )
       : (
        <>
         <li className="nav-item">
        <NavLink  onClick={handleLogout} className="nav-link" to="/login">Logout</NavLink>
      </li>
        
        </>


       )
       
       
       
       }

        <li className="nav-item">
          <NavLink    className="nav-link" to="/cart">cart(0)</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Header;
