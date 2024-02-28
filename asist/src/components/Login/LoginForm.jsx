import React from "react";
import './LoginForm.css';
import { FaUser,FaLock  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="imput-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="ICO"/>
                </div>
                <div className="imput-box">
                    <input type="Password" placeholder="Password" required />
                    <FaLock className="ICO"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account?<NavLink to="/Register">Register</NavLink></p>
                </div>
            </form>
            
        </div>
    );
}
export default LoginForm; 