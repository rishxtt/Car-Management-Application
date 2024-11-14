import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login";
import ProductListPage from "./pages/ProductListPage";
import ProductCreationPage from "./pages/ProductCreationPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/new" element={<ProductCreationPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
