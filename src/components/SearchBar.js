import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="mb-4 relative">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded-md pl-10"
    />
    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
  </div>
);

export default SearchBar;