import React, {Component} from 'react'
import Item from './Item'
class ItemsConteiner extends Component {
     constructor(props){
         super(props)
         console.log (props)
         this.state={
             items:[]
         }
        }
        componentDidUpdate(){
            console.log(this.props.items)
            
        
        }

        componentDidMount() {
            console.log(this.props)
            
        }
       
        render(){
            const {items} = this.props
            return (
                <div class="uk-slider-container-offset" uk-slider>
            
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            
                    <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
                    {
                        items.map((item,idx)=>{
                            return <Item
                                    key={idx}
                                    item={item}
                            />
                        })
                    }
                       
                    </ul>
            
                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
            
                </div>
            
                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            
            </div>
            
            )
        }
       
    }


export default ItemsConteiner