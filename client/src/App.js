
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


function App() {
  return (
   <>
     
    <Routes>
    <Route path='/' element={<HomePage/>}/>


    <Route path="/dashboard" element={<PrivateRoute/>}>
    <Route path='user' element={<DashBoard/>}/>
    </Route>

    <Route path="/dashboard" element={<AdminRoute/>}>
    <Route path='admin' element={<AdminDashBoard/>}/>
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
