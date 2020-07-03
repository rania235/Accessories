import React, {Component} from 'react';
import './ProductComponent.scss';
import Acc10 from '../../Images/acc10.jpg';
import Acc5 from '../../Images/acc5.jpg';
import Acc9 from '../../Images/acc9.jpg';
import Acc7 from '../../Images/acc7.jpg';
import Acc2 from '../../Images/acc7.jpg';
import Acc3 from '../../Images/acc7.jpg';
import Popup from "reactjs-popup";





class ProductComponent extends React.Component {
render(){
  return(
<div className="ProductComponent">
<div class="container33">
    <ul class="gallery">
        <li class="gallery__item">
            <figure>
                <div class="gallery__image">
                    <img src={Acc10} alt="image" title="image" style={{height:"100%" , width:"100%"}}/>
                    <div class="gallery__btns">
                        <a href={Acc10} data-fancybox="gallery" data-caption="Caption for single image 1">view Picture</a>
                        <a href="#!">buy now</a>
                    </div>
                    <Popup trigger={<button className="View"> View Details</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                    <p>Price:20$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 
                         1500s, when an unknown printer took a galley of type and scrambled it
                          to make a type specimen book.</p>
                  </div>
                </Popup>
                </div>
                
            </figure>
        </li>
        <li class="gallery__item">
            <figure>
                <div class="gallery__image">
                    <img src={Acc9} alt="image" title="image"/>
                    <div class="gallery__btns">
                        <a href={Acc9} data-fancybox="gallery" data-caption="Caption for single image 2" style={{height:"100%" , width:"100%"}}>view Picture</a>
                        <a href="#!">buy now</a>
                    </div>
                    
                </div>
                <Popup trigger={<button className="View"> View Details</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                    <p>Price:20$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 
                         1500s, when an unknown printer took a galley of type and scrambled it
                          to make a type specimen book.</p>
                  </div>
                </Popup>
            </figure>
        </li>
        <li class="gallery__item">
            <figure>
                <div class="gallery__image">
                    <img src={Acc7} alt="image" title="image" style={{height:"100%" , width:"100%"}}/>
                    <div class="gallery__btns">
                        <a href={Acc7} data-fancybox="gallery" data-caption="Caption for single image 3">view gallery</a>
                        <a href="#!">buy now</a>
                    </div>
                </div> 
                <Popup trigger={<button className="View"> View Details</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                    <p>Price:20$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 
                         1500s, when an unknown printer took a galley of type and scrambled it
                          to make a type specimen book.</p>
                  </div>
                </Popup>
            </figure>
        </li>
       </ul>
       </div>
</div>
  );
}
}


export default ProductComponent;