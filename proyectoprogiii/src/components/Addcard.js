import React from 'react'
class Addcard extends React.Component{
render(){
return(
 <div className='Addcard'>
     <button onClick={()=>this.props.showNewUserForm()}>Agregar contacto</button>
     <button onClick={()=>this.props.addUsersToList()}>Pedir más</button>
     </div>   
)
}
}

export default Addcard
