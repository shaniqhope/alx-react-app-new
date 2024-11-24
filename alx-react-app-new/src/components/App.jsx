import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';


function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Simple Counter Application</h1>
      <Counter />
    </div>
  );
}

export default App;
