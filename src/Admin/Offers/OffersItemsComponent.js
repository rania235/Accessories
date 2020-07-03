import React, { Component } from 'react';
import './OffersItemsComponent.scss';
import index from '../AdminImages/index.jpg';

//import Popup from "reactjs-popup";

//import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';

export default class OffersItemsComponent extends Component {
render(){
  return(
    
     <div class="OffersItemsComponent">
       <div class="danger">
  <p><strong>Danger!</strong> Some text...</p>
</div>

<div class="success">
  <p><strong>Success!</strong> Some text...</p>
</div>

<div class="info">
  <p><strong>Info!</strong> Some text...</p>
</div>

<div class="warning">
  <p><strong>Warning!</strong> Some text...</p>
</div>
    </div>
  )
}
}
    


          
         
