
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import DashBoard from "./pages/user/DashBoard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminDashBoard from "./pages/Admin/AdminDashBoard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";


function App() {
  return (
   <>
     
    <Routes>
    <Route path='/' element={<HomePage/>}/>


    <Route path="/dashboard" element={<PrivateRoute/>}>
    <Route path='user' element={<DashBoard/>}/>
    <Route path='user/orders' element={<Orders/>}/>
    <Route path='user/profile' element={<Profile/>}/>

    </Route>

    <Route path="/dashboard" element={<AdminRoute/>}>
    <Route path='admin' element={<AdminDashBoard/>}/>
    <Route path='admin/create-category' element={<CreateCategory/>}/>
    <Route path='admin/create-product' element={<CreateProduct/>}/>
    <Route path='admin/users' element={<Users/>}/>
    </Route>

    
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
   



  


    </Routes>
   </>
  );
}

export default App;
