import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details via API
  }, [id]);

  const handleEdit = () => {
    // Call API to update product
  };

  const handleDelete = () => {
    // Call API to delete product
    navigate("/products");
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container d-flex justify-content-center align-items-center">
      <div className="row text-center justify-content-center">
        <div className="col-md-10 col-lg-8 product-detail-box p-4 bg-light rounded shadow">
          <h2 className="text-dark mb-4">{product.title}</h2>
          <p className="lead text-dark mb-3">{product.description}</p>
          <p className="text-secondary mb-4">Tags: {product.tags}</p>
          <div className="mb-4 d-flex justify-content-center gap-3 flex-wrap">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt="Car" className="product-image rounded" />
            ))}
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            <button className="btn btn-warning btn-lg" onClick={handleEdit}>Edit</button>
            <button className="btn btn-danger btn-lg" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
