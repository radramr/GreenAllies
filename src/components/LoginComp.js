
import React, { useState } from 'react';
import './LoginComp.css';
 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB60DfB68_nBFXhhdgqhIC8YPUsbrsdKlA",
   authDomain: "ecooo-5c31c.firebaseapp.com",
   projectId: "ecooo-5c31c",
   storageBucket: "ecooo-5c31c.appspot.com",
   messagingSenderId: "598816187292",
   appId: "1:598816187292:web:5539c4acc62e4a38491e59",
   measurementId: "G-GR2FE0N8VW"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
function LoginComp() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="abc">
            <div className="wrapp">
                {isLogin ? (
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <i className="bx bx-user" ></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <i className="bx bxs-lock-alt" ></i>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#">Forgot password</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="register-link">
                            <p> Don't have an account? <button type="button" onClick={toggleForm}>Register</button></p>
                        </div>
                    </form>
                ) : (
                    <form action="">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <i className="bx bx-user" ></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                            <i className='bx bx-envelope'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <i className="bx bxs-lock-alt" ></i>
                        </div>
                        <button type="submit" className="btn">Create account</button>
                        <div className="register-link">
                            <p> Already have an account? <button type="button" onClick={toggleForm}>Login</button></p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default LoginComp;

