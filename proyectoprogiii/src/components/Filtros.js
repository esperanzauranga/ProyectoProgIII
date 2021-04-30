import React from 'react'
class Filtros extends React.Component {
constructor (){
    super ()
    this.state={ 
        nombre:"",
        apellido:"",
        edad:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
}

handleChange (e){
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })

}

handleSubmit(){
    let filtersToApply = []
    if(this.state.nombre.trim()!=="") filtersToApply.push({nombre:this.state.nombre})
    if(this.state.apellido.trim()!=="") filtersToApply.push({apellido:this.state.apellido})
    if(this.state.edad.trim()!=="") filtersToApply.push({edad:this.state.edad})

    if(filtersToApply.length>0){
        this.props.filter(filtersToApply)
    }

}
handleClear (){
    this.setState({
        nombre:"",
        apellido:"",
        edad:""
    
    })
    this.props.clearFilter()
}

render (){
    const {nombre,apellido,edad} = this.state
     return (
    <div className='filterContainer'>
        <p>Filtrar por</p>
        <input type='text' placeholder='nombre' name="nombre" onChange={this.handleChange} value={nombre} />
        <input type='text' placeholder='apellido' name="apellido" onChange={this.handleChange} value={apellido} />
        <input type='number' placeholder='edad' name="edad" onChange={this.handleChange} value={edad} />
        <button onClick={()=>this.handleSubmit()}>Filtrar</button>
        <button onClick={()=>this.handleClear()}>Quitar filtros</button>
    </div>
    )
}
}
export default Filtros 