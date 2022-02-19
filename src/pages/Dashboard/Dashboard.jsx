import React from "react";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'

export const Dashboard = ({ user,setUser,setAuth }) => {
  let navigate = useNavigate();
  const logout = ()=>{
    setAuth(false)
    setUser('')
    navigate('/')
  }
  return (
    <div className="dashboard">
   
      <div className="left">
      <h1 className="sidebar-header">Ucol Quiz</h1>
      <ul>
        <li  onClick={logout}> <span className="span-list"><BiExit/></span> Salir</li>
      </ul>
      </div>
      <div className="right">
        <div className="top">
          {/* <h1>boton</h1>
          <h1>input</h1> */}
        </div>
        <div className="bottom">
          <h1 className="welcome-header">Bienvenido</h1>
          <h1  className="welcome-header">{user?.profileObj?.givenName}</h1>
        </div>
      </div>
    </div>
  );
};
