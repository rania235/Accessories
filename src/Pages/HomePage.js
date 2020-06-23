import React, {Component} from 'react';
import './HomePage.scss';
import SliderComponent from '../Componenets/SliderComponent';
import HomePageProductsComponent from '../Componenets/HomePageProductsComponent';
import AboutUsComponent from '../Componenets/AboutUsComponent';


class HomePage extends Component {
  

  render(){
    return(
      <div className="HomePage">
      <h1  className="HomePagetitle">Welcome To Boutique Camelia</h1>
      
<HomePageProductsComponent/>
<SliderComponent/>
<AboutUsComponent/>
      </div>
    );
  }
}

export default HomePage;


