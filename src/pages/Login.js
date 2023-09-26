import React, { useState } from "react";
import { useUserContext } from "../context/usercontext";
import { useCartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import "../styles/Login.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { login, signup, onChangeLogin, onChangeSignup, SubmitLogin } =
    useUserContext();
  const { updateCartFromStorage } = useCartContext();

  const navigate = useNavigate(); //to redirect to other page
  const [activeTab, setActiveTab] = useState("tab1");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await SubmitLogin();
      updateCartFromStorage();
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Incorrect credentials");
    }
  };

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
  };

  const handleTabClick = (value) => {
    if (value === activeTab) {
      return;
    }
    setActiveTab(value);
  };

  return (
    <div className="login">
      <HeroSection page="Sign Up" />
      <ToastContainer />
      <div className="main">
        <div className="sub-main">
          <div className="tab-content">
            <ul className="nav nav-pills mb-3 d-flex flex-row justify-content-around">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab1")}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab2")}
                >
                  Register
                </button>
              </li>
            </ul>
            <div
              className={`tab-pane ${
                activeTab === "tab1" ? "show active" : ""
              }`}
            >
              <form onSubmit={handleSubmitLogin} className="loginForm">
                <div className="text-center mt-5 mb-3">
                  <p>SIGN IN</p>
                </div>
                <br />
                <div className="signInGoogle">
                  <span className="googleLogo">
                    <i className="fab fa-google"></i>
                  </span>
                  <span className="colorBar"></span>
                  <span className="googleText">Sign in with Google</span>
                </div>
                <br />
                <h4>OR</h4>
                <br />
                <div className="mb-4 fields">
                  <input
                    placeholder="Email Address"
                    type="email"
                    id="form1"
                    onChange={onChangeLogin}
                    value={login.email}
                    name="email"
                  />
                </div>
                <div className="mb-4 fields">
                  <input
                    placeholder="Password"
                    type="password"
                    id="form2"
                    onChange={onChangeLogin}
                    value={login.password}
                    name="password"
                  />
                </div>

                <button type="submit">Sign in</button>
                <p className="text-center">
                  Not a member?{" "}
                  <a href="#!" onClick={() => handleTabClick("tab2")}>
                    Register
                  </a>
                </p>
              </form>
            </div>

            <div
              className={`tab-pane ${
                activeTab === "tab2" ? "show active" : ""
              }`}
            >
              <form onSubmit={handleSubmitSignUp} className="loginForm">
                <div className="text-center mt-5 mb-3">
                  <p>SIGN UP</p>
                </div>

                <div className="mb-4 fields">
                  <input
                    placeholder="Name"
                    type="text"
                    id="form3"
                    onChange={onChangeSignup}
                    value={signup.name}
                    name="name"
                  />
                </div>

                <div className="mb-4 fields">
                  <input
                    placeholder="Email"
                    type="email"
                    id="form5"
                    onChange={onChangeSignup}
                    value={signup.email}
                    name="email"
                  />
                </div>

                <div className="mb-4 fields">
                  <input
                    placeholder="Password"
                    type="password"
                    id="form6"
                    onChange={onChangeSignup}
                    value={signup.password}
                    name="password"
                  />
                </div>

                <div className="mb-4 fields">
                  <input
                    placeholder="Repeat Your Password"
                    type="password"
                    id="form7"
                    name="password"
                  />
                </div>
                <button type="submit">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
