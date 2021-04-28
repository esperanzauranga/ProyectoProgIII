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
        
        this.setState({items:usuarios.results})
    })
    .catch (error=>{console.log(error)})
    
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

     this.state.filterItems.push(  this.state.items.filter(item =>{
       
        if(item.name.first.toUpperCase()===filterIt.nombre.toUpperCase()) {
          
          return item
        }
      }))
     
    }

   })
    this.setState({
      ...this.state,
      filterItems:this.state.filterItems,
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

 render (){ 
   const {showaddcard,items,hasFilters,filterItems}=this.state
   return (
    <React.Fragment>
      <header className = 'header'>
        <h1>HEADER</h1>
      </header>

      <div className = "App">
        <Filtros filter={this.filter} clearFilter={this.clearFilter}/>
       {hasFilters ? < ItemsConteiner items={filterItems} /> : < ItemsConteiner items={items} />}
       {showaddcard ? <NewCardForm addNewUser={this.addNewUser}/> : null}
        <Addcard showNewUserForm={this.showNewUserForm}/>
    
      </div>

      <footer>
        <p>Desarrolladores: Esperanza Uranga, Francesca Porro Toyos y Segundo Ustariz</p>
      </footer>

    </React.Fragment>
  );
 }
}

export default App;
