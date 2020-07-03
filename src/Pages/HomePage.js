import React, {Component} from 'react';
import './HomePage.scss';
import SliderComponent from '../Componenets/Slider/SliderComponent';
import ProductComponent from '../Componenets/product/ProductComponent';



class HomePage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="HomePage">
      <h1  className="HomePagetitle">Welcome To Boutique Camelia</h1>
      <ProductComponent />
      <SliderComponent/> 
     


      </div>
    );
  }
}

export default HomePage;


