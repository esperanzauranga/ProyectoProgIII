import React from 'react'
class Addcard extends React.Component{
render(){
return(
 <div className='Addcard'><button onClick={()=>this.props.showNewUserForm()}>Agregar</button></div>   
)
}
}

export default Addcard
