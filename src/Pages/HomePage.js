import React, {Component} from 'react';
import './HomePage.scss';
import SliderComponent from '../Componenets/Slider/SliderComponent';
import ProductComponent from '../Componenets/product/ProductComponent';
import axios from 'axios';

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
  componentDidMount() {
    //const { id } = this.props.match.params;
    axios.get(`http://127.0.0.1:8000/api/products/`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => {
          console.log(res.data)
            this.setState({ data:res.data.products });
        })
        .catch(err => {
            console.log(err);
        });;
}
  
  render(){
    return(
      <div className="HomePage">
         <h1  className="HomePagetitle">Welcome To Boutique Camelia</h1>
      <div className="ProductComponent">
    <div className="container33">
      <ul className="gallery">
      {this.state.data.map((product,index)=>{
        return(
           <li key={index}className="gallery__item">
          <ProductComponent  value={product} />
          </li>
        )
      })}
      </ul>
      </div>
      <SliderComponent/> 
      </div>
      </div>
    );
  }
}

export default HomePage;


