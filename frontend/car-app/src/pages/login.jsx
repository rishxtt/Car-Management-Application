import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/login.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Call API for login
  };

  const handleSignup = () => {
    // Call API for signup
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="row text-center justify-content-center w-100">
        <div className="col-md-8 col-lg-5 login-box p-4 bg-light rounded shadow">
          <h2 className="text-dark mb-4">Login / Sign Up</h2>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
            <button className="btn btn-secondary w-100" onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
