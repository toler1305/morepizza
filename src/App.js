import './App.css';
import React, { useState, useEffect } from 'react';
import ButtonsField from './components/ButtonsField.js';

function App() {
  const [pizzas, setPizza] = useState(0);
  


  const more = () => {
    setPizza(pizzas+1)
  }

  return (
    <div className="App">
     
      <ButtonsField onMore={more}/>
      <h1>i like {pizzas} pizzas</h1>
    </div>
  );
}

export default App;
