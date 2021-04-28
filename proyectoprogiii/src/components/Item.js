import React, {Component} from 'react'
import Modal from "./Modal"

class Item extends Component{ 
    constructor ({item}) {
        super()
        this.state={
            item,
            mostrarDetelle: false,
        }
        this.cerrarDetalle = this.cerrarDetalle.bind(this);
    };

    

    abrirDetalle () {
        this.setState ({
            item:this.state.item,
            mostrarDetelle:true,
        })
    }

    // eliminarTarjeta = (idUsuarioEliminado) => {
    //     let resultado = this.state.item.filter((item)=> {
    //         return item !== idUsuarioEliminado;
    //     })
    //     this.setState ({item: resultado});
    // }


    borrarItem(event){
        let idTarjetaEliminada= event.id.value
        console.log(idTarjetaEliminada);
        //  let resultados = this.state.item.filter((items)=> {
        //      return (idUsuarioEliminado!==item.login.uuid)
        //     })

        // this.setState({item:resultados})
    }

    cerrarDetalle () {
        this.setState ({
            item:this.state.item,
            mostrarDetelle:false
        })
    }
 

    render() {
        const {item,mostrarDetelle} = this.state
    
     return (
            <li>
                {mostrarDetelle? <Modal cerrarDetalle={this.cerrarDetalle} item={item}/>:null }
                <div class="uk-card uk-card-default">
                    <button className="btnEliminar" onClick={()=>this.borrarItem()} >X</button>
               
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