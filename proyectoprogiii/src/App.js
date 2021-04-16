import React from 'react';
import Item from './components/Item'
import Modal from './components/Modal'
import "./app.css"
import Addcard from './components/Addcard'
import Filtros from './components/Filtros';
function App() {
  return (
    <div className = "App">
      <Filtros/>
      <Modal/>
      < Item />
      < Item />
      < Item />
      < Item />
      < Item />
      < Item />
      < Item />
      <Addcard/>
      
    </div>
  );
}

export default App;
