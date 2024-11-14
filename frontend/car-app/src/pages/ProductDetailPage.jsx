import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://car-management-application-backend.onrender.com/api/cars/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is in localStorage
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          alert("Failed to fetch product details.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        alert("An error occurred while fetching product details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleEdit = () => {
    navigate(`/products/${id}/edit`); // Redirect to edit page
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch(`https://car-management-application-backend.onrender.com/api/cars/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is in localStorage
        },
      });

      if (response.ok) {
        alert("Product deleted successfully!");
        navigate("/products");
      } else {
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (!product) return <div>Product not found.</div>;

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
            <button className="btn btn-warning btn-lg" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger btn-lg" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
