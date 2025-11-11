// src/App.jsx
import React from 'react';
import PhaserGame from './components/PhaserGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Phaser + React + Vite</h1>
        <PhaserGame />
      </header>
    </div>
  );
}

export default App;