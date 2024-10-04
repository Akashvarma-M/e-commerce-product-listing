import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulating API call to fetch products
    const fetchProducts = async () => {
      // In a real application, you'd fetch this data from an API
      const dummyProducts = [
        { id: 1, name: "Laptop", price: 999.99, image: "/images/laptop.jpg" },
        { id: 2, name: "Smartphone", price: 499.99, image: "/images/smartphone.jpg" },
        { id: 3, name: "Headphones", price: 99.99, image: "/images/headphone.jpg" },
        { id: 4, name: "Tablet", price: 299.99, image: "/images/tablet.jpg" },
        { id: 5, name: "Smartwatch", price: 199.99, image: "/images/smartwatch.png" },
        { id: 6, name: "PC CPU", price: 599.99, image: "/images/PC CPU.jpg" },
        { id: 7, name: "Camera", price: 599.99, image: "/images/camera.jpg" }
      ];
      setProducts(dummyProducts);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">E-Commerce Product Listing</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;