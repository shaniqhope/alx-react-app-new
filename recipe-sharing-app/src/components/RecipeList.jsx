import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found. Try a different search!</p>
      )}
    </div>
  );
};

export default RecipeList;




