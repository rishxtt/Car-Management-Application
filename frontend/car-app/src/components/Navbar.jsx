import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gradient p-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-3" to="/">Car Management</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/products">My Cars</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/products/new">Add Car</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
