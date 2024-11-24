import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Add recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites // Avoid duplicates
        : [...state.favorites, recipeId],
    })),

  // Remove recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) &&
          Math.random() > 0.5 // Mock logic to create variety
      );
      return { recommendations: recommended };
    }),
}));

export { useRecipeStore };

