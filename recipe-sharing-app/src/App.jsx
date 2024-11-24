import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
        </Routes>
        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
};

export default App;




