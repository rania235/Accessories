import React, {Component} from 'react';
import './OfferPageComponent.scss';
import Acc10 from '../../Images/acc10.jpg';
import Acc5 from '../../Images/acc5.jpg';
import Acc9 from '../../Images/acc9.jpg';
import Acc7 from '../../Images/acc7.jpg';
import Acc2 from '../../Images/acc7.jpg';
import Acc3 from '../../Images/acc7.jpg';
import Popup from "reactjs-popup";
//import { Link } from 'react-router-dom';

class OfferPageComponent extends Component {
  render(){
    return( 
         
      
<div className="OfferPageComponent">

{/* <div class="pen-info">
        <h1 class="pen-info__title">Meet the Team</h1>
        <p class="pen-info__p">Hover to see the effect.</p>
    </div> */}

    <div class="demo">

        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc10} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>          

        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc7} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>       
        
        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc9} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>         

        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc7} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>          

        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc2} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>           

        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc3} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>  

        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc10} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>          

        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc9} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>  
        
        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc7} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>          
       

        
    </div>

























































































































      
{/* <div class="container-product">
      
  <img src={Acc3} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                    <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc5} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc9} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc7} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc10} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc2} alt="Snow" style={{width:"100%"}}/>
 <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div> */}
</div>
       
    )
  }
}

export default OfferPageComponent;