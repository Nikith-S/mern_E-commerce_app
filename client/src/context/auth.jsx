import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ''
  });


  // default axios
axios.defaults.headers.common['Authorizaation']= auth?.token


  useEffect(() => {

const data = localStorage.getItem('auth')
if(data){
    const paraseData = JSON.parse(data)
    setAuth({
        ...auth,
        user:paraseData.user,
        token:paraseData.token,
    })
} 
},[])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
