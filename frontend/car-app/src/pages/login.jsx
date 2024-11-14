import React, { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/login.css';
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext); // Use AuthContext to manage authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://car-management-application-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token); // Save the JWT token and update authentication state
        alert("Login successful!");
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="row text-center justify-content-center w-100">
        <div className="col-md-8 col-lg-5 login-box p-4 bg-light rounded shadow">
          <h2 className="text-dark mb-4">Login</h2>
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
          <button
            className="btn btn-primary w-100"
            onClick={handleLogin}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
