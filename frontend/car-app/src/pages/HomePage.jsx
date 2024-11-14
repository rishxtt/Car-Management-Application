import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomePage.css'; // Add a separate CSS file for custom styles

const HomePage = () => {
  return (
    <div className="homepage-container d-flex justify-content-center align-items-center">
      <div className="row justify-content-center text-center">
        <div className="col-md-10 col-lg-8">
          <h1 className="display-4 text-dark">Welcome to the Car Management Application</h1>
          <p className="lead text-dark">Manage your cars effortlessly!</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
            <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
            <Link to="/products" className="btn btn-success btn-lg">View Your Cars</Link>
            <Link to="/products/new" className="btn btn-info btn-lg">Add New Car</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
