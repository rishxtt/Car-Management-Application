import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductCreationPage.css';

const ProductCreationPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleCreateProduct = async () => {
    if (!title || !description || !tags || images.length === 0) {
      alert("Please fill in all fields and upload at least one image.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await fetch(
        "https://car-management-application-backend.onrender.com/api/cars",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
          },
          body: formData,
        }
      );

      if (response.ok) {
        alert("Car created successfully!");
        setTitle("");
        setDescription("");
        setTags("");
        setImages([]);
      } else {
        const data = await response.json();
        alert(data.message || "Failed to create car.");
      }
    } catch (error) {
      console.error("Error creating car:", error);
      alert("An error occurred while creating the car. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="product-creation-container d-flex justify-content-center align-items-center">
      <div className="row justify-content-center text-center">
        <div className="col-md-10 col-lg-8">
          <h2 className="text-dark mb-4">Add a New Car</h2>
          <form className="p-4 rounded bg-light shadow">
            <div className="mb-3">
              <label className="form-label" htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="tags">Tags (comma separated)</label>
              <input
                type="text"
                className="form-control"
                id="tags"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="images">Images</label>
              <input
                type="file"
                className="form-control"
                id="images"
                multiple
                onChange={handleFileChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg w-100"
              onClick={handleCreateProduct}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreationPage;
