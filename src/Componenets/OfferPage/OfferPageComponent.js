import React, {Component} from 'react';
import './OfferPageComponent.scss';
import {withRouter} from "react-router-dom";
import Order from '../Order/OrderPageComponent';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';



class OfferPageComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
          description:'',
          name:'',
          price:0,
          data:[],
          start_date:'',
          end_date:'',
          image:'',
          offer:[],
          offerID:''
        }
      }

componentDidMount(){
let a= this.props.data.filter(value => value.start_date != 'NULL');
this.setState({offer:a})
}

addOrder=(value)=>{
this.props.addOrderTest(value);
this.props.history.push("/order");
}
test=(value)=>{
  this.props.OrederID(value);
  this.props.history.push("/order");
}

  render(){
    return( 
<div className="OfferPageComponent">
   
          {this.state.offer.map(value=>(value.start_date==null?"":
            
        <div class="demo">

<div class="demo__div people">
<div class="people__div people__div--img">

<img src={`http://localhost:8000/assets/img/${value.image}`} alt="" class="people__img"/>

</div>
<div class="people__div people__div--info">
  <h2 class="people__name">{value.price}</h2>
  <p class="people__desc">{value.description}</p>
  <p class="people__desc">{value.start_date}_{value.end_date}</p>
  <button className="card-button-add" onClick={()=>this.test(value)}>Add To Order</button>

</div>
<div class="people__div people__div--name">
  <h2 class="people-name">{value.name}</h2>
</div>
</div>
</div>
            )
         )}
</div>
       
    )
  }
}

export default withRouter(OfferPageComponent);