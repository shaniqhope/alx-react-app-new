import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        margin: '20px',
        padding: '10px',
        fontSize: '16px',
        width: '300px',
      }}
    />
  );
};

export default SearchBar;
