import React from "react";
import { BiExit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_OUT } from "../../redux/userSlice/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(SIGN_OUT());
    navigate("/");
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <Link to="/dashboard" className="links">
          <h1 className="sidebar-header">Ucol Quiz</h1>
        </Link>

      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-list">
          <ul className="sidebar-list">
            <Link to="/questionnaires" className="links">
              <li>Questionaries</li>
            </Link>
            <Link to="/questionnaires" className="links">
              <li>Questionaries</li>
            </Link>
            <Link to="/questionnaires" className="links">
              <li>Questionaries</li>
            </Link>


          </ul>
        </div>
        <div className="sidebar-bottom-buttom">
          <button onClick={logout} className="sidebar-button">
            <BiExit /> <span>Salir</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
