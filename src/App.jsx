import React, { useState } from "react";
import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./routes/PrivateRoute";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  const [user, setUser] = useState([]);
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Login setUser={setUser} setAuth={setAuth}/> } />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute auth={auth}>
                <Dashboard user={user} setUser={setUser} setAuth={setAuth}/>
              </PrivateRoute>
            }
          />
      <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
