import React from 'react';
import Item from './Item'

function Items () {
    return (
     
     <div className="item-conteiner"> 
     <img src="/perfil-01.jpg"/>
     <div className="item-info">
     <p>Apellido:</p> 
     <p>Nombre:</p> 
     <p>Email: </p> 
     <p>Fecha de nacimiento:</p> 
     </div>
    </div>
 
    );
}

export default Items;