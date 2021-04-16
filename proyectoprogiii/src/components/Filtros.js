import React from 'react'
function Filtros (){
return (
    <div className='filterContainer'>
        <p>Filtros</p>
        <input type='text' value='nombre'/>
        <input type='text' value='apellido'/>
        <input type='number' value='edad'/>
    </div>
)
}
export default Filtros 