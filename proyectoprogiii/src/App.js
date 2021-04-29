import React from 'react';
import ItemsConteiner from './components/ItemsConteiner'
import Modal from './components/Modal'
import "./app.css"
import Addcard from './components/Addcard'
import Filtros from './components/Filtros';
import NewCardForm from "./components/NewCardForm"

class App extends React.Component {
  constructor (){
    super() 
    this.state= {
      showaddcard:false, items:[], filterItems:[], hasFilters:false
    }
    this.showNewUserForm = this.showNewUserForm.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.fetchCall = this.fetchCall.bind(this)
    this.filter = this.filter.bind(this)
    this.clearFilter = this.clearFilter.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.addUsersToList = this.addUsersToList.bind(this)
  }
  

  componentDidMount(){
    this.fetchCall('https://randomuser.me/api/?results=15')
}
componentDidUpdate(){

}
fetchCall(url){
    fetch(url)
    .then (resultado=>{
        return resultado.json()
    
    })
    .then(usuarios=>{
        this.configUserFetch(usuarios.results)
        this.setState({
          ...this.state, 
          items:usuarios.results})
    })
    .catch (error=>{console.log(error)})
    
}
// para que muestre mejor l fecha
configUserFetch (usuarios) {
usuarios.map ((usuario,idx) => {
  usuario.id = idx
  usuario.registered.date= usuario.registered.date.split('T')[0]
})

}

  addNewUser (newUser){
    let userConfig= {
     name:{
       first:newUser.nombre,
       last:newUser.apellido
     } ,
     email: newUser.email,
     registered: {
       date: newUser.fechadenacimiento
     },
     phone: newUser.telefono,
     picture: {
      large: '/perfil-01.jpg'
     },
     location: {
       street: {
         name: '',
         number: 123
       },
       city: newUser.ciudad,
       country: newUser.pais,
       state: '',
       postcode: newUser.cp
     }
    }
    let temp = this.state.items
    temp.push(userConfig)
    this.setState({
      ...this.state, 
      items:temp
    })
    this.setState({
      ...this.state,
      showaddcard:false
    })
  }
  showNewUserForm (){
    console.log('funciona')
    this.setState({
      ...this.state,
      showaddcard:true
    })
  }
  
 
    
  filter(filters) {
    let tempValues=[]
   filters.map(filterIt=>{

    if(filterIt.nombre){

     tempValues.push(  this.state.items.filter(item =>{
       
        if(item.name.first.toUpperCase().includes(filterIt.nombre.toUpperCase())) {
          
          return item
        }
      }))
     
    }
    if(filterIt.apellido){

      tempValues.push(  this.state.items.filter(item =>{
        
         if(item.name.last.toUpperCase()===filterIt.apellido.toUpperCase()) {
           
           return item
         }
       }))
      
     }
     if(filterIt.edad){

      tempValues.push(  this.state.items.filter(item =>{
        
         if(item.dob.age.toString()===filterIt.edad.toString()) {
           
           return item
         }
       }))
      
     }
  
   })
    this.setState({
      ...this.state,
      filterItems:tempValues[0],
      hasFilters: true
    })
   
    /*
    if(filters.apellido !=""){
      this.state.filterItems.push( this.state.items.filter(item =>{
         if(item.name.last == filters.apellido) return item
       }))
     }
    */
  }
  clearFilter() {
    this.setState({
      ...this.state,
      hasFilters:false,
      filterItems:[]
    })
    
  }
  deleteItem (itemId) {
  // let tempItems= this.state.items.filter(item=>{
  //  if (item.id!==itemId) return item
  //})
    this.setState({
      ...this.state,
      items: this.state.items.filter(item=>{
        if (item.id!==itemId) return item
      }),
      filterItems: this.state.filterItems.filter(item=>{
        if (item.id!==itemId) return item
      })
    })
  }
  addUsersToList(amount=5){
    this.fetchCall ('https://randomuser.me/api/?results='+ amount)
  }
 render (){ 
   const {showaddcard,items,hasFilters,filterItems}=this.state
   return (
    <React.Fragment>
      <header className = 'header'>
        <h1>HEADER</h1>
      </header>

      <div className = "App">
        <Filtros filter={this.filter} clearFilter={this.clearFilter}/>
       {hasFilters ? < ItemsConteiner items={filterItems}  deleteItem={this.deleteItem} /> : < ItemsConteiner items={items} deleteItem={this.deleteItem} />}
       {showaddcard ? <NewCardForm addNewUser={this.addNewUser}/> : null}
        <Addcard showNewUserForm={this.showNewUserForm} addUsersToList={this.addUsersToList}/>
    
      </div>

      <footer>
        <p>Desarrolladores: Esperanza Uranga, Francesca Porro Toyos y Segundo Ustariz</p>
      </footer>

    </React.Fragment>
  );
 }
}

export default App;
