import React, { Component } from 'react'

function Modal ({item, cerrarDetalle}) {
    


        return (
           
                <div className='modal-background'>
         
                    <div className='modal' class="uk-card-body" >
                        <button onClick={cerrarDetalle} >X</button>
                        <p>Calle y numero: {item.location.street.name}  {item.location.street.number}</p>
                        <p>Ciudad/Estado: {item.location.city}, {item.location.state}</p>
                        <p>Pais: {item.location.country}</p>
                        <p>Codigo postal: {item.location.postcode}</p>
                        <p>Fecha de registro: {item.registered.date}</p>
                        <p>Telefono: {item.phone}</p>
                         <p>Edad: {item.dob.age}</p>

                    </div>
                    

                </div>
           
        )
    
}

export default Modal;