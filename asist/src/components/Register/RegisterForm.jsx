import React from "react";
import './RegisterForm.css';
import { FaUser,FaLock  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const RegisterForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="imput-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="ICO"/>
                </div>
                <div className="imput-box">
                    <input type="text" placeholder="Correo" required />
                    <FaUser className="ICO"/>
                </div>
                <div className="imput-box">
                    <input type="Password" placeholder="Password" required />
                    <FaLock className="ICO"/>
                </div>
                <div className="imput-box">
                    <input type="Repeat-Password" placeholder="Repeat Password" required />
                    <FaLock className="ICO"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>you have an account?<NavLink to="/">Login</NavLink></p>
                </div>
            </form>
            
        </div>
    );
}
export default RegisterForm; 