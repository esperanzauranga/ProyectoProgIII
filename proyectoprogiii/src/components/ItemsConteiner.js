import React, {Component} from 'react'
import Item from './Item'
class ItemsConteiner extends Component {
     constructor(){
         super()
        
         this.state={
             items:[]
         }
        }
        componentDidUpdate(){
           if (this.props.items !== this.state.items){
               this.setState({
                   ...this.state,
                   items: this.props.items
               })
           }
            
        
        }

        componentDidMount() {}
       
        render(){
            const {items} = this.state
            
            if (items.length<= 0) {
                return (
                    <p>No hay resultados</p>
                )
            }

        
            return (
                <div className="item-conteiner">
                <div className="uk-slider-container-offset"  uk-slider>
            
                <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            
                    <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                    {
                        items.map((item)=>{
                            return <Item
                                    key={item.id}
                                    item={item}
                                    deleteItem= {this.props.deleteItem}
                            />
                        })
                    }
                       
                    </ul>
            
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
            
                </div>
            
                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            
            </div>
            </div>
            )
        }
       
    }


export default ItemsConteiner