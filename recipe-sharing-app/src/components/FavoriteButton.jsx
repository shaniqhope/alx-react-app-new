import React from 'react';
import { useRecipeStore } from '../recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{
        backgroundColor: isFavorite ? 'gold' : 'lightgray',
        border: 'none',
        padding: '5px 10px',
        marginLeft: '10px',
        cursor: 'pointer',
      }}
    >
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
