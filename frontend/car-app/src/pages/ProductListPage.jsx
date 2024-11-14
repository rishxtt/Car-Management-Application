import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductListPage.css';
import '../styles/global.css';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (query = "") => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://car-management-application-backend.onrender.com/api/cars?search=${query}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        alert("Failed to fetch products.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("An error occurred while fetching the products.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    fetchProducts(search);
  };

  return (
    <div className="product-list-container d-flex justify-content-center align-items-start">
      <div className="row text-center justify-content-center w-100">
        <div className="col-md-10 col-lg-8 product-list-box p-4 bg-light rounded shadow">
          <h2 className="text-dark mb-4">Your Cars</h2>
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search cars"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-primary search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <Link to="/products/new" className="btn btn-info btn-lg mb-4">
            Add New Car
          </Link>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ul className="list-group">
              {products.length > 0 ? (
                products.map((product) => (
                  <li
                    key={product.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                      {product.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="list-group-item">No cars found.</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
