import React from 'react';
import Item from './components/Item'
import Modal from './components/Modal'
import "./app.css"
import Addcard from './components/Addcard'
import Filtros from './components/Filtros';
import NewCardForm from "./components/NewCardForm"
function App() {
  return (
    <div className = "App">
      <Filtros/>
      < Item />
      < Item />
      < Item />
      < Item />
      < Item />
      < Item />
      < Item />
      <Addcard/>
      <NewCardForm/>
    </div>
  );
}

export default App;
