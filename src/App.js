import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <NavBar  />
        <ItemListContainer color = 'blue' greeting = 'HOLA'/>

      </header>
    </div>
  );
  
}

export default App;
  