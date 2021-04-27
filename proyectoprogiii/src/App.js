import React from 'react';
import ItemsConteiner from './components/ItemsConteiner'
import Modal from './components/Modal'
import "./app.css"
import Addcard from './components/Addcard'
import Filtros from './components/Filtros';
import NewCardForm from "./components/NewCardForm"

class App extends React.Component {
 render (){ return (
    <React.Fragment>
      <header className = 'header'>
        <h1>HEADER</h1>
      </header>

      <div className = "App">
        <Filtros/>
        < ItemsConteiner />
       
        <Addcard/>
    
      </div>

      <footer>
        <p>Desarrolladores: Esperanza Uranga, Francesca Porro Toyos y Segundo Ustariz</p>
      </footer>

    </React.Fragment>
  );
 }
}

export default App;
