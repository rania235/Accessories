import React, {Component} from 'react';
import './OrderPageComponent.scss';
import Acc6 from '../../Images/acc6.jpg';
import { AiTwotoneDelete } from "react-icons/ai";


class OrderPageComponent extends Component {


 
  render(){
    return( 
   <div className="OrderPageComponent">
<div class="pCard_card">
   <div class="pCard_up">
      
   <div class="pCard_add"><AiTwotoneDelete/></div>
   </div>
   <div class="pCard_down">
      <div>
         <p>Price</p>
         <p>30$</p>
      </div>
      <div>
         <p>Views</p>
         <p>21,579</p>
      </div>
      <div>
         <p>Likes</p>
         <p>1,976</p>
      </div>
   </div>
   
</div>




<div class="pCard_card">
   <div class="pCard_up">
      
      <div class="pCard_add"><AiTwotoneDelete/></div>
   </div>
   <div class="pCard_down">
      <div>
         <p>Projects</p>
         <p>126</p>
      </div>
      <div>
         <p>Views</p>
         <p>21,579</p>
      </div>
      <div>
         <p>Likes</p>
         <p>1,976</p>
      </div>
   </div>
   
</div>



<div class="pCard_card">
   <div class="pCard_up">
      
   <div class="pCard_add"><AiTwotoneDelete/></div>
   </div>
   <div class="pCard_down">
      <div>
         <p>Projects</p>
         <p>126</p>
      </div>
      <div>
         <p>Comments</p>
         <p>21,579</p>
      </div>
      <div>
         <p>Likes</p>
         <p>1,976</p>
      </div>
   </div>
   
</div>
<button className="order-button">Buy these order</button>
</div>



    )
  }
}


export default OrderPageComponent;