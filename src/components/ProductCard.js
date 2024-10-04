import React from 'react';

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-md">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-gray-600">${product.price.toFixed(2)}</p>
    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;