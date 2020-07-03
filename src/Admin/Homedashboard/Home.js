import React, { Component } from 'react';
import './Home.scss';
import Popup from "reactjs-popup";
import index from '../AdminImages/index.jpg';

//import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';

export default class Home extends Component {

  state = {
    Products:[]
};

render(){
  return(
    <>
    <div className="Home">
    
    <div class="cardsWrapper">
        <article class="card">
          <figure class="card-figure">
            
            <img class="card-image" src={index} alt="Image description" style={{ height:"150px"}}/>
    </figure>
    <div class="card-block">
        <h2>Nature</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis gravida lorem. Nulla porta, elit eget facilisis ullamcorper, ipsum nisi suscipit arcu, quis ultricies felis massa non arcu.</p>
     </div>
     </article>
     </div>



     <div class="cardsWrapper">
        <article class="card">
          <figure class="card-figure">
            <img class="card-image" src={index} alt="Image description" style={{ height:"150px"}}/>
    </figure>
    <div class="card-block">
        <h2>Nature</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis gravida lorem. Nulla porta, elit eget facilisis ullamcorper, ipsum nisi suscipit arcu, quis ultricies felis massa non arcu.</p>
     </div>
     </article>
     </div>



     <div class="cardsWrapper">
        <article class="card">
          <figure class="card-figure">
            <img class="card-image" src={index} alt="Image description" style={{ height:"150px"}}/>
    </figure>
    <div class="card-block">
        <h2>Nature</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis gravida lorem. Nulla porta, elit eget facilisis ullamcorper, ipsum nisi suscipit arcu, quis ultricies felis massa non arcu.</p>
     </div>
     </article>
     </div>



     <div class="cardsWrapper">
        <article class="card">
          <figure class="card-figure">
            <img class="card-image" src={index} alt="Image description" style={{ height:"150px"}}/>
    </figure>
    <div class="card-block">
        <h2>Nature</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis gravida lorem. Nulla porta, elit eget facilisis ullamcorper, ipsum nisi suscipit arcu, quis ultricies felis massa non arcu.</p>
     </div>
     </article>
     </div>
     <Popup trigger={<button className="button-products"> Add Products</button>}
             modal
           closeOnDocumentClick
          >
   <div>
          <form className="Form-Productz" >
            <label >Price</label>
              <input  type="text" name="" />
              <label >Name of Brand</label>
                <input  type="text" name="" />
                  <label >Text</label>
                   <textarea  type="text" name="" />
              <label>Image</label>
                 <input type="file" />
               <div >
              <button >Save</button>
               <button >Cancel</button>
              </div>
            </form>
    </div>
</Popup>

 </div>
 </>
 
  )
}

}