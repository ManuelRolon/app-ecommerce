import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <NavBar  />
        <ItemListContainer color = 'blue' greeting = 'HOLA'/>
        <Contador stock ='12' inicial ='1' />
      </header>
    </div>
  );
}

export default App;
  