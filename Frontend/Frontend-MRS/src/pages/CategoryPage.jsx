import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import Axios

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from the URL
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch data for the selected category
    axios
      .get(`https://api.example.com/categories/${categoryName}`) // Replace with your API endpoint
      .then((response) => {
        setItems(response.data); // Set the fetched items
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{categoryName} Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-200 p-4 rounded">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
