import React, { Component } from 'react'

class Modal extends Component{
    constructor ({item}) {
        super ()
        this.state={
            item,
            mostrarDetalle:true
        }
    }

   cerrarDetalle () {
    this.setState ({
        mostrarDetelle:false
    })
   }

    

    render() {
        const {item,mostrarDetalle} = this.state

        return (
            <li>
                <div className='modal-background'>
         
                    <div className='modal'>
                        <button onClick={()=>this.cerrarDetalle()} >X</button>
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
}

export default Modal;