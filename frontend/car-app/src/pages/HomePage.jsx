import React, { useContext } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomePage.css';
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  const { isLoggedIn, logout } = useContext(AuthContext); // Use AuthContext for dynamic navigation

  return (
    <div className="homepage-container d-flex justify-content-center align-items-center">
      <div className="row justify-content-center text-center">
        <div className="col-md-10 col-lg-8">
          <h1 className="display-4 text-dark">Welcome to the Car Management Application</h1>
          <p className="lead text-dark">Manage your cars effortlessly!</p>

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
                <Link to="/register" className="btn btn-secondary btn-lg">Register</Link>
              </>
            ) : (
              <>
                <Link to="/products" className="btn btn-success btn-lg">View Your Cars</Link>
                <Link to="/products/new" className="btn btn-info btn-lg">Add New Car</Link>
                <button className="btn btn-danger btn-lg" onClick={logout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
