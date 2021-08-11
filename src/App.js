import React from 'react';
import './App.css';
import Burgerio from './Burgerio';
import { BrowserRouter } from 'react-router-dom';
import './MountAnimations.css';

function App() {
    return (
    <div className="App">
      <BrowserRouter>
        <Burgerio />
      </BrowserRouter>
    </div>
  );
}

export default App;
