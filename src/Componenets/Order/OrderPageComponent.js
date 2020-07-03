import React, {Component} from 'react';
import './OrderPageComponent.scss';
import Acc6 from '../../Images/acc6.jpg';
import { AiTwotoneDelete } from "react-icons/ai";


class OrderPageComponent extends Component {


 
  render(){
    return( 
   <div className="OrderPageComponent">

<div id="app">
  <h1 className="OrderPageComponent-h1">ORDER</h1>
  <ul class="product-box">
    <li v-for="item in items">
      <input type="checkbox" v-onclick="selected(item)"/>
      <img src={Acc6} alt="" />
      <h4>name</h4>
      <p>price</p>
    </li>
  </ul>
  <button>Delete</button>
</div>


<div id="app">
  <h1 className="OrderPageComponent-h1">ORDER</h1>
  <ul class="product-box">
    <li v-for="item in items">
      <input type="checkbox" v-onclick="selected(item)"/>
      <img src={Acc6} alt="" />
      <h4>name</h4>
      <p>price</p>
    </li>
  </ul>
  <button>Delete</button>
</div>


<div id="app">
  <h1 className="OrderPageComponent-h1">ORDER</h1>
  <ul class="product-box">
    <li v-for="item in items">
      <input type="checkbox" v-onclick="selected(item)"/>
      <img src={Acc6} alt="" />
      <h4>name</h4>
      <p>price</p>
    </li>
  </ul>
  <button>Delete</button>
</div>


     </div>
  





    )
  }
}


export default OrderPageComponent;