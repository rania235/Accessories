import React, {Component} from 'react';
import './HomePage.scss';
import '../Componenets/Product/ProductComponent.scss';  

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state={
      description:'',
      name:'',
      price:0,
      data:[]
    }
  }
  
  render(){
    return(
      <div className="HomePage">{this.state.data.length!=0?"":""}
         <h1  className="HomePagetitle">Welcome To Boutique Camelia</h1>
      <div className="ProductComponent">
    <div className="container33">
      <ul className="gallery">
      {this.props.data.map((product,index)=>{
        console.log('image',product)
        return(
           <li key={index} className="gallery__item">
          <figure>
                <div class="gallery__image">
                    <img style={{width:'200px', height:'250px'}} src={`http://localhost:8000/assets/img/${product.image}`} alt="image" title="image" />
                    <div class="gallery__btns">
                <span >
                  <button onClick={()=>this.props.SendID(product.id)} className="button-view">View Details</button>

</span>
                    </div>
                </div>
                
            </figure>
          </li>
        )
      })}
      </ul>
      </div>
        )
      })}
      </div>
      </div>
    );
  }
}

export default HomePage;


