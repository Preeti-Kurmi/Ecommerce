
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const AddProduct = () => {
  const API_BASE_URL = import.meta.env.VITE_APP_URL
  const token = localStorage.getItem('token');
console.log("frontend",token)
    const API_URL = `${API_BASE_URL}/api/products`;
    const IMAGE_URL = `${API_BASE_URL}/assets/Images/`;
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
    });
    const [categories] = useState([
        "Electronics",
        "Fashion",
        "Home & Kitchen",
        "Beauty",
        "Sports",
        "Automotive",
    ]);
    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("price", formData.price);
        data.append("description", formData.description);
        data.append("category", formData.category);
        if (formData.image) data.append("image", formData.image);

        try {
            if (editingProductId) {
                await axios.put(`${API_URL}/${editingProductId}`, data,  {
                  headers: {
                    "Authorization": `Bearer ${token}`
                  }
                });
                alert("Product updated successfully!");
            } else {
              await axios.post(
                API_URL, 
                data, 
                {
                  headers: {
                    "Authorization": `Bearer ${token}`
                  }
                }
              );
              
                alert("Product added successfully!");
            }
            fetchProducts();
            setFormData({
                name: "",
                price: "",
                description: "",
                category: "",
                image: null,
            });
            setEditingProductId(null);
        } catch (err) {
            console.error(err);
            alert("Failed to save product!");
        }
    };

    const handleEdit = (product) => {
        setEditingProductId(product._id);
        setFormData({
            name: product.name,
            price: product.price,
            description: product.description,
            category: product.category,
            image: null,
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`,  {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            });
            alert("Product deleted successfully!");
            fetchProducts();
        } catch (err) {
            console.error(err);
            alert("Failed to delete product!");
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-8">
            <h2 className="text-2xl font-semibold mb-6">{editingProductId ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={handleSubmit} className="mb-6">
       
      <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="image">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div> 
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    {editingProductId ? "Update Product" : "Add Product"}
                </button>
            </form>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Image</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td className="border px-4 py-2">
                                <img src={`${IMAGE_URL}${product.image}`} alt={product.name} className="h-16 w-16 object-cover" />
                            </td>
                            <td className="border px-4 py-2">{product.name}</td>
                            <td className="border px-4 py-2">${product.price}</td>
                            <td className="border px-4 py-2">
                                <button onClick={() => handleEdit(product)} className="mr-4 text-blue-500">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleDelete(product._id)} className="text-red-500">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AddProduct;
