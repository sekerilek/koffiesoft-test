import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import WelcomePage from "./WelcomePage";
import { useState, useEffect } from "react";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(localStorage.getItem("firstLogin"));
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Koffiesoft
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {login ? (
                false
              ) : (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              )}
              {login ? true : <></>}
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/welcome" element={<WelcomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
