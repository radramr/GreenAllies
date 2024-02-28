import React, { useState } from 'react';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track if it's login or register mode

  const handleToggleMode = () => {
    setIsLogin(!isLogin); // Toggle between login and register mode
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <h2>Login</h2>
          {/* Login form JSX */}
          <form>
            {/* Your login form fields */}
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <span onClick={handleToggleMode}>Register here</span></p>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          {/* Register form JSX */}
          <form>
            {/* Your register form fields */}
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <span onClick={handleToggleMode}>Login here</span></p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;