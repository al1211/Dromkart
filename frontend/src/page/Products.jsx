// src/components/ProductCard.jsx
import React from "react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Education",
    price: "₹399",
    summary:"	Logical thinking, gravity, spatial reasoning",
    
    image: "https://toyland.toys/wp-content/uploads/2024/01/81PryHGXGuL._SL1500_.jpg"
  },
  {
    id: 2,
    name: "Science",
    price: "₹300",
    summary:"Math, drawing, puzzles, spelling",
    image: "https://toyland.toys/wp-content/uploads/2024/01/81roDvY5yWL._SL1500_.jpg"
  },
  {
    id: 3,
    name: "Nature Science",
    price: "₹350",
    summary:"	Sequencing, problem-solving, 3D thinking",
    image: "https://toyland.toys/wp-content/uploads/2023/09/S1-1.jpg"
  },
  {
    id: 4,
    name: "Puzzle",
    price: "₹250",
    summary:"	Circuits, engineering, hands-on physics",
    image: "https://toyland.toys/wp-content/uploads/2024/02/71of09cFvmL._SL1500_-1.jpg"
  },
  {
    id: 5,
    name: "Spelling puzzle  ",
    price: "₹340",
    summary:"	Critical thinking, planning, pattern solving",
    image: "https://toyland.toys/wp-content/uploads/2023/09/23.jpg"
  } ,{
    id: 6,
    name: "Science",
    price: "₹400",
    summary:"	Chemistry, observation, hands-on experiments",
    image: "https://toyland.toys/wp-content/uploads/2024/01/91nV29735tL._SL1500_.jpg"
  },
   {
    id: 7,
    name: "Electronic Science",
    price: "₹200",
    summary:"Math, puzzles, problem-solving with a tablet",
    image: "https://toyland.toys/wp-content/uploads/2023/11/716AxZ3sULL._SL1280_.jpg"
  },
   {
    id: 8,
    name: "Animal Puzzle",
    price: "₹199",
    summary:"	Fun experiments with real science behind them",
    image: "https://toyland.toys/wp-content/uploads/2023/09/6-4.webp"
  },
   {
    id: 9,
    name: "Puzzle",
    price: "₹399",
    summary:"	3D spatial awareness, logic, concentration",
    image: "https://toyland.toys/wp-content/uploads/2023/09/36.jpg"
  },

   {
    id: 10,
    name: "Alpha-Numeric puzzle",
    price: "₹499",
    summary:"Build inventions, electrical circuits, creativity  ",
    image: "https://toyland.toys/wp-content/uploads/2024/02/alpha-numeric-construction-puzzle-built-29-piece-puzzles-original-imaghprfhuq6gwgw.webp"
  },
    {
    id: 11,
    name: "Education",
    price: "₹399",
    summary:"	Logical thinking, gravity, spatial reasoning",
    
    image: "https://toyland.toys/wp-content/uploads/2024/01/81PryHGXGuL._SL1500_.jpg"
  },
  {
    id: 12,
    name: "Science",
    price: "₹300",
    summary:"Math, drawing, puzzles, spelling",
    image: "https://toyland.toys/wp-content/uploads/2024/01/81roDvY5yWL._SL1500_.jpg"
  },
  {
    id: 13,
    name: "Nature Science",
    price: "₹350",
    summary:"	Sequencing, problem-solving, 3D thinking",
    image: "https://toyland.toys/wp-content/uploads/2023/09/S1-1.jpg"
  },
  {
    id: 14,
    name: "Puzzle",
    price: "₹250",
    summary:"	Circuits, engineering, hands-on physics",
    image: "https://toyland.toys/wp-content/uploads/2024/02/71of09cFvmL._SL1500_-1.jpg"
  },
  {
    id: 15,
    name: "Spelling puzzle  ",
    price: "₹340",
    summary:"	Critical thinking, planning, pattern solving",
    image: "https://toyland.toys/wp-content/uploads/2023/09/23.jpg"
  } ,{
    id: 16,
    name: "Science",
    price: "₹400",
    summary:"	Chemistry, observation, hands-on experiments",
    image: "https://toyland.toys/wp-content/uploads/2024/01/91nV29735tL._SL1500_.jpg"
  },
   {
    id: 17,
    name: "Electronic Science",
    price: "₹200",
    summary:"Math, puzzles, problem-solving with a tablet",
    image: "https://toyland.toys/wp-content/uploads/2023/11/716AxZ3sULL._SL1280_.jpg"
  },
   {
    id: 18,
    name: "Animal Puzzle",
    price: "₹199",
    summary:"	Fun experiments with real science behind them",
    image: "https://toyland.toys/wp-content/uploads/2023/09/6-4.webp"
  },
   {
    id: 19,
    name: "Puzzle",
    price: "₹399",
    summary:"	3D spatial awareness, logic, concentration",
    image: "https://toyland.toys/wp-content/uploads/2023/09/36.jpg"
  },

   {
    id: 20,
    name: "Alpha-Numeric puzzle",
    price: "₹499",
    summary:"Build inventions, electrical circuits, creativity  ",
    image: "https://toyland.toys/wp-content/uploads/2024/02/alpha-numeric-construction-puzzle-built-29-piece-puzzles-original-imaghprfhuq6gwgw.webp"
  },

];

const Products = () => {
   const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="flex items-center justify-between">

      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Top Products for ToyLand</h2>
      <p><b>{totalPages}</b></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((product) => (
          <div key={product.id} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <h3 className="text-sm text-gray-500">{product.summary}</h3>
              
              <p className="text-gray-600 mt-1">{product.price}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Buy Now
              </button>
            </div>
          </div>
        ))}

         

      
      </div>
      <div className="flex justify-center mt-4 items-end">
        {currentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-2 py-1 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
