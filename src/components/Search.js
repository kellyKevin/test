// src/components/Search.js

import React, { useState, useEffect } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsLoading(true);
      onSearch(query.trim());
      setIsLoading(false);
    }
  };

  // Debounce function to limit how often the search is triggered
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim()) {
        setIsLoading(true);
        onSearch(query.trim());
        setIsLoading(false);
      }
    }, 300); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch(''); // Clear the search results when input is cleared
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4">
      <input
        type="text"
        placeholder="Search for plants or animals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      <button
        type="button"
        onClick={handleClear}
        className="ml-2 p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
      >
        Clear
      </button>
    </form>
  );
};

export default Search;
