import React from 'react';
import Item from './components/Item'
import Modal from './components/Modal'
import "./app.css"
import Addcard from './components/Addcard'
function App() {
  return (
    <div className = "App">
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
