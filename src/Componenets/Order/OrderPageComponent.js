import React, {Component} from 'react';
import './OrderPageComponent.scss';
//import Acc6 from '../../Images/acc6.jpg';
//import { AiTwotoneDelete } from "react-icons/ai";
import axios from 'axios';


class OrderPageComponent extends Component {
constructor(props){
  super(props)
   this.state={
    orderProduct:[]
   }
}
test=()=>{
  axios.get(`http://127.0.0.1:8000/api/orders/${localStorage.getItem('id')}`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
})
  .then(res => {
    console.log("resss",res.data.order)
    if(res.status==200){
      this.setState({orderProduct:res.data.order})
    }
  })
  .catch(err => {

      console.log("this is an error",err);
  });
}
componentDidMount(){
  console.log("order",localStorage.getItem('id'));
 this.test();
}
// ${this.props.match.params.id}

  render(){
   
    return( 
      
  <div className="OrderPageComponent">
    <div className="OrderPageDiv">
{this.state.orderProduct.map((data,index)=>{
  console.log(data)
  return(
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

)})}
</div>
<div>
    <button className="button-send-order">Send This Order</button>
  </div>

     </div>
  


    )
  }
}


export default OrderPageComponent;