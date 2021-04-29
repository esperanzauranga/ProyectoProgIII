import React from 'react'
class Addcard extends React.Component{
constructor (){
    super()
    this.state={
        amount:0
    }
    this.handleChange = this.handleChange.bind(this);
    this.requestUsers = this.requestUsers.bind(this);
}

requestUsers (){
    if (this.state.amount>0){
        this.props.addUsersToList(this.state.amount)
        this.setState({
            ...this.state,
            amount: 0
        })

    }


}
    
handleChange (e){
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })

}

render(){
    const {amount}=this.state
return(
 <div className='Addcard'>
     <button onClick={()=>this.props.showNewUserForm()}>Agregar contacto</button>
     <input name="amount" value={amount} onChange={this.handleChange}/>
     <button onClick={()=>this.requestUsers()}>Pedir más</button>
     </div>   
)
}
}

export default Addcard
