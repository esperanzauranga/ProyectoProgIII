import React from "react"
class NewCardForm extends React.Component {
constructor (){
    super()
    this.state= {
        nombre:'',
        apellido:'',
        email:'',
        fechadenacimiento:'',
        calle:'',
        ciudad:'',
        pais:'',
        cp:'',
        telefono:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
}
handleChange (e){
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })

}

submitForm (){
this.props.addNewUser (this.state)

}

render(){
     return(
    <div className="modal-background"> 
        <div className="modal">
        <label>Nombre</label>
        <input onChange={this.handleChange} name="nombre"/>
        <label>Apellido</label>
        <input onChange={this.handleChange} name="apellido"/>
        <label>Email</label>
        <input onChange={this.handleChange}  name="email"/>
        <label>Fecha de nacimiento</label>
        <input onChange={this.handleChange} name="fechadenacimiento"/>
        <label>Calle y numero</label>
        <input onChange={this.handleChange} name="calle"/>
        <label>Ciudad y estado</label>
        <input onChange={this.handleChange} name="ciudad"/>
        <label>Pais</label>
        <input onChange={this.handleChange} name="pais"/>
        <label>Codigo postal</label>
        <input onChange={this.handleChange} name="cp"/>
        <label>Telefono</label>
        <input onChange={this.handleChange} name="telefono"/>
        <button onClick={this.submitForm}>Agregar</button>
        </div>
    </div>
) 
}
}
export default NewCardForm