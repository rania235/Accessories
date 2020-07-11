import React, {Component} from 'react';
import './OrderPageComponent.scss';
import Acc6 from '../../Images/acc6.jpg';
import { AiTwotoneDelete } from "react-icons/ai";
import axios from 'axios';


class OrderPageComponent extends Component {
constructor(props){
  super(props)
   this.state={
     order:[]
   }
}
componentDidMount(){
  axios.get(`http://127.0.0.1:8000/api/orders/`)
  .then(res => {
    console.log(res.data.orders);
      this.setState({ userLike:res.data.orders });
  })
  .catch(err => {
      console.log(err);
  });
}
// ${this.props.match.params.id}
  render(){
   
    return( 
      
   <div className="OrderPageComponent">
{this.props.order.map((data,index)=>(
  <div id="app">
  <h1 className="OrderPageComponent-h1">ORDER</h1>
  <ul class="product-box">
    <li v-for="item in items">
    <h4>{data.name}</h4>
      <img src={`http://localhost:8000/assets/img/${data.image}`} alt="" className="image-order" />
      
      <p>{data.price}</p>
    </li>
  </ul>
  <button >Delete</button>
  
</div>
))}





     </div>
  





    )
  }
}


export default OrderPageComponent;