import React, {Component} from 'react'
import Modal from "./Modal"

class Item extends Component{ 
    constructor ({item}) {
        super()
         this.state={
             item,
             mostrarDetelle: false
            }
    
    }
    abrirDetalle () {
        this.setState ({
            item:this.state.item,
            mostrarDetelle:true
        })
    }


 

    render() {
        const {item,mostrarDetelle} = this.state
    
     return (
            <li>
                {mostrarDetelle? <Modal item={item}/>:null }
                <div class="uk-card uk-card-default">
                    <button className="btnEliminar">X</button>
               
                    <div class="uk-card-media-top">
                        <img src={item.picture.large} alt=""/>
                    </div>
                    <div class="uk-card-body">
                        <p>Apellido: {item.name.last}</p> 
                        <p>Nombre: {item.name.first}</p> 
                        <p>Email: {item.email} </p> 
                        <p>Fecha de nacimiento: {item.registered.date}</p> 
                        <button className='btnDetalle' onClick={()=>this.abrirDetalle()} >Abrir detalle</button>


                    </div>
                </div>
  
            </li>
        );
    }
}

export default Item;