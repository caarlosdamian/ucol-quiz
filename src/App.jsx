import fondo from "./assets/page-font.svg";
import google from "./assets/google.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left">
        <img className="img-login" src={fondo} alt="Fondo" />
      </div>
      <div className="right">
        <form action="" className="login-headers">
          <h1 className="login-title">Iniciar sesion</h1>
          <span className="login-subtitle">correo universitario</span>
          <label htmlFor="" className="login-label">
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
          </div>
        <button className="login-google"><img className="google-img" src={google}alt='button'/><span className="span-google">Iniciar con Google</span></button>
        </form>
      </div>
    </div>
  );
}

export default App;
