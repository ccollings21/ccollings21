import React from 'react';
import cloud from './cloud.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cloud} className="Cloud" alt="cloud" />
        <p>
          Christina Collings
        </p>
      </header>
    </div>
  );
}

export default App;
