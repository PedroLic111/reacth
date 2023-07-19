///import logo from './logo.svg';
///import './App.css';
import React from 'react';
import Componente from './components/P1componente';
import Contador from './components/P2estado';
import Contador2 from './components/P3dobleestado';

function App() {
  return (
    <div className="App">
      <Componente />
      <hr />
      <Contador />
      <hr/>
      <Contador2/>y
    </div>
  );
}

export default App;
