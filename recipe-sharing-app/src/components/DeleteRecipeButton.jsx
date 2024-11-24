import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Navigate to the home page (or recipe list) after deletion
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '10px' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

