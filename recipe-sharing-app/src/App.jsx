import React from 'react';
import { useTestStore } from './testStore';

const App = () => {
  const count = useTestStore((state) => state.count);
  const increment = useTestStore((state) => state.increment);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Test Zustand Store</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;

