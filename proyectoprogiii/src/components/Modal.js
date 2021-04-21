import React from 'react'
function Modal ({item}){
    return (
        <div className='modal-background'>
         
            <div className='modal'>
            <button>X</button>
            <p>calle y numero:</p>
            <p>ciudad/estado</p>
            <p>pais: </p>
            <p>codigo postal: </p>
            <p>fecha de registro: </p>
            <p>telefono:</p>
            <button class='delete'>Eliminar</button>

            </div>
            

        </div>
    )
}
export default Modal