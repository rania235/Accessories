import React, {Component} from 'react';
import './OrderPageComponent.scss';
import axios from 'axios';


class OrderPageComponent extends Component {
constructor(props){
  super(props)
   this.state={
    orderProduct:[]
   }
}
test=()=>{
  axios.get(`http://127.0.0.1:8000/api/cart/${localStorage.getItem('id')}`, {
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


deleteOrder = (orderId) => {
  axios.delete(`http://127.0.0.1:8000/api/cart/${orderId}`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
})
  .then(res => {
    console.log("resss",res.data.order)
    if(res.status==200){
      this.setState({orderProduct: this.state.orderProduct.filter(order => order.id !== orderId)})
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



sendOrders=(e)=>{
  // const form_data = new FormData();
    //  form_data.append('Address', this.state.address);
    //  form_data.append('Phonenumber', this.state.phoneNumber); 
    //form_data.append('image', this.state.Image);
    //form_data.append('price', this.state.price);
       //form_data.append('name', this.state.name);
        //form_data.append('email', this.state.email);
      axios.post(`http://127.0.0.1:8000/api/cart/`, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem('token')}`
      },
    // body:form_data
})
     
  }

  render(){
   
    return( 
      
  <div className="OrderPageComponent">
    <div className="OrderPageDiv">
{this.state.orderProduct.map((data,index)=>{ 
 // console.log(data)
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
  
  <button onClick={(event)=> {
    event.preventDefault();
    this.deleteOrder(data.id)
  }}>Delete</button>
  
  
</div>

)})}
</div>
<div>

    <button className="button-send-order"  onClick={(e)=>this.sendOrders(e)}> Send this order</button>
          
  
   </div>
     </div>
  


    )
  }
}


export default OrderPageComponent;