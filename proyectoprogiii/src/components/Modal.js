import React, { Component } from 'react'

function Modal ({item, cerrarDetalle}) {
    


        return (
            <li>
                <div className='modal-background'>
         
                    <div className='modal'>
                        <button onClick={cerrarDetalle} >X</button>
                        <p>calle y numero: {item.location.street.name}  {item.location.street.number}</p>
                        <p>ciudad/estado: {item.location.city}, {item.location.state}</p>
                        <p>pais: {item.location.country}</p>
                        <p>codigo postal: {item.location.postcode}</p>
                        <p>fecha de registro: {item.registered.date}</p>
                        <p>telefono: {item.phone}</p>

                    </div>
                    

                </div>
            </li>
        )
    
}

export default Modal;