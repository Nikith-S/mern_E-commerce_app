import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const { auth } = useAuth(); 

  useEffect(() => {
    const authCheck = async () => {
      try {
        const token = auth?.token;
        if (token) {
          const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);
          if (res.data.ok) {
            setOk(true);
          } else {
            setOk(false);
          }
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error('Error in authCheck:', error);
        setOk(false);
      }
    };
    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
