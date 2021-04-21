import React from 'react';
import Item from './components/Item'
import Modal from './components/Modal'
import "./app.css"
import Addcard from './components/Addcard'
import Filtros from './components/Filtros';
import NewCardForm from "./components/NewCardForm"

function App() {
  return (
    <React.Fragment>
      <header className = 'header'>
        <h1>HEADER</h1>
      </header>

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

      <footer>
        <p>Desarrolladores: Esperanza Uranga, Francesca Porro Toyos y Segundo Ustariz</p>
      </footer>

    </React.Fragment>
  );
}

export default App;
