import React, { Component } from 'react';
import './OffersItemsComponent.scss';
import Popup from "reactjs-popup";
import index from '../AdminImages/image.jpg';


export default class OffersItemsComponent extends Component {
render(){
  return(
    
    <>
    <Popup trigger={<button className="dash-board-button"> Add Offers</button>}
        modal
        closeOnDocumentClick
        >
        <div className="addProducts">
        <form className="addProducts--Form">
        <label >Price:</label>
        <input  type="text" name="" />
        <label >Name of Brand:</label>
        <input  type="text" name="" />
        <label for="birthday">Start_Date:</label>
        <input type="date" id="Start_Date" name="Start_Date"/> 
        <label for="birthday">End_Date:</label>
        <input type="date" id="End_Date" name="End_Date"/> 
        <label >description:</label>
        <textarea type="text" name="" />
        <label >Image:</label>
        <input  type="file" />
        <div >
        <button >Save</button>
        <button >Cancel</button>
        </div>
        </form>
        </div>
        </Popup>
        <div className="offer-component">
       <div className="card-Home-component">
      <img src={index} alt="Denim Jeans"className="image" style={{width:"100%" }}/>
      <h1>Tailored Jeans</h1>
      <p className="price">$19.99</p>
      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
    
    </div>
    
    
    
    <div className="card-Home-component">
      <img src={index} alt="Denim Jeans"className="image"  style={{width:"100%"}}/>
      <h1>Tailored Jeans</h1>
      <p className="price">$19.99</p>
      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
     
    </div>
    
    
    <div className="card-Home-component">
      <img src={index} alt="Denim Jeans" className="image"  style={{width:"100%"}}/>
      <h1>Tailored Jeans</h1>
      <p className="price">$19.99</p>
      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
    </div>
    <div className="card-Home-component">
      <img src={index} alt="Denim Jeans" className="image"  style={{width:"100%" }}/>
      <h1>Tailored Jeans</h1>
      <p className="price">$19.99</p>
      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
      
    </div>
    
    
    <div className="card-Home-component">
      <img src={index} alt="Denim Jeans" className="image"  style={{width:"100%" }}/>
      <h1>Tailored Jeans</h1>
      <p className="price">$19.99</p>
      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
      
    </div>
    
    <div className="card-Home-component">
      <img src={index} alt="Denim Jeans" className="image"  style={{width:"100%" }}/>
      <h1>Tailored Jeans</h1>
      <p className="price">$19.99</p>
      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
    
    </div>
    
    
    
        </div>
         
        </>
    
  )
}
}
    


          
         
