import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

export const Questionnaires = () => {
  return (
    <div className="dashboard">
   
    <div className="left">
  <Sidebar/>
    </div>
    <div className="right">
      <div className="top">
        {/* <h1>boton</h1>
        <h1>input</h1> */}
      </div>
      <div className="bottom">
        <h1 className="welcome-header">Bienvenido</h1>
        {/* <h1  className="welcome-header">{user?.profileObj?.givenName}</h1> */}
      </div>
    </div>
  </div>

  )
}
