import React from "react"
function NewCardForm() {
return(
    <div className="modal-background"> 
        <div className="modal">
        <label>Nombre</label>
        <input name="nombre"/>
        <label>Apellido</label>
        <input name="apellido"/>
        <label>Email</label>
        <input name="email"/>
        <label>Fecha de nacimiento</label>
        <input name="fechadenacimiento"/>
        <label>Calle y numero</label>
        <input name="calle"/>
        <label>Ciudad y estado</label>
        <input name="ciudad"/>
        <label>Pais</label>
        <input name="pais"/>
        <label>Codigo postal</label>
        <input name="cp"/>
        <label>Telefono</label>
        <input name="telefono"/>
        </div>
    </div>
) 
}
export default NewCardForm