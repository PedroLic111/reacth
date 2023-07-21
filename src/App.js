///import logo from './logo.svg';
///import './App.css';
import React from 'react';
import C01componente from './components/C01componente';
import C02contador from './components/C02contador';
import C03dobleestado from './components/C03dobleestado';
import C04variable from './components/C04variable';
import C05operador from './components/C05operador';
import C06matriz from './components/C06matriz';



function App() {
  return (
    <div>    
      <C01componente/>
      <hr/>
      <C02contador/>
      <hr/>
      <C03dobleestado/>
      <hr/>
      <C04variable/>
      <hr/>
      <C05operador/>
      <hr/>
      <C06matriz/>
    </div>
  );
}

export default App;
