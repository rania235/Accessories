import React, {Component} from 'react';
import './OfferPageComponent.scss';
//import Acc10 from '../../Images/acc10.jpg';
//import axios from 'axios';


class OfferPageComponent extends Component {
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

addOrderTest=()=>{
  this.props.addOrder(this.state.data);
  this.props.history.push("/order");

}

  render(){
    return( 
<div className="OfferPageComponent">
   
          {this.state.offer.map(value=>{
            return(
        <div class="demo">

<div class="demo__div people">
<div class="people__div people__div--img">

<img src={`http://localhost:8000/assets/img/${value.image}`} alt="" class="people__img"/>

</div>
<div class="people__div people__div--info">
  <h2 class="people__name">{value.price}</h2>
  <p class="people__desc">{value.description}</p>
  <button className="card-button-add" onClick={()=>this.addOrderTest()}>Add To Order</button>

</div>
<div class="people__div people__div--name">
  <h2 class="people-name">{value.name}</h2>
</div>
</div>
</div>
            )
          })}
</div>
       
    )
  }
}

export default OfferPageComponent;