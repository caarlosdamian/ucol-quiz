import React, { useEffect } from "react";
import fondo from "../../assets/page-font.svg";
import GoogleLogin from "react-google-login";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_IN } from "../../redux/userSlice/userSlice";

export const Login = (  ) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state)=>state.user)

  
  const responseGoogle = (respuesta) => {
    if (respuesta.lenght !== 0) {
      dispatch(SIGN_IN(respuesta));
      navigate("/dashboard");
    }
  };
  return (
    <>
      {" "}
      <div className="left">
        <img className="img-login" src={fondo} alt="Fondo" />
      </div>
      <div className="right">
        <form action="" className="login-headers">
          <h1 className="login-title">Iniciar sesion</h1>
          <span className="login-subtitle">correo universitario</span>
          {/* <label htmlFor="" className="login-label">
        Email*
      </label>
      <input
        type="text"
        className="login-input"
        placeholder="test@ucol.mx"
      />
      <label htmlFor="" className="login-label">
        Password*
      </label>
      <input type="text" className="login-input" placeholder="**********" />
      <label className="login-checbox">
        <input type="checkbox" id="cbox1" value="first_checkbox" />{" "}
        Recuerdame
      </label>
      <button className="login-button">Iniciar sesion</button>
      <div className="line-group">
        <div className="line"> </div>
        <span className="login-line">or</span>
        <div className="line"> </div>
      </div> */}
          <GoogleLogin
            className="login-google"
            clientId="463595295319-ug1hb92gokes851jf3qqh3gp5gocp45h.apps.googleusercontent.com"
            buttonText="Iniciar con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </form>
      </div>
    </>
  );
};
