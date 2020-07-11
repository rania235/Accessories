import React, {Component} from 'react';
import './ProductComponent.scss';
import Acc10 from '../../Images/acc10.jpg';
import Acc5 from '../../Images/acc5.jpg';
import Acc9 from '../../Images/acc9.jpg';
import Acc7 from '../../Images/acc7.jpg';
import Acc2 from '../../Images/acc7.jpg';
//import Acc3 from '../../Images/acc7.jpg';
//import Popup from "reactjs-popup";




class ProductComponent extends React.Component {
constructor(props){
    super(props)
}
render(){
  return(
            <>
            <figure>
                <div class="gallery__image">
                    <img style={{width:'200px', height:'250px'}} src={Acc10} alt="image" title="image" />
                    <div class="gallery__btns">
                       {/*  <a href={Acc10} data-fancybox="gallery" data-caption="Caption for single image 1">view Picture</a> */}
                        {/* <a href="/view-product">buy now</a> */}
                    </div>
                    {/* <Popup trigger={<button className="View"> {this.props.value.name}</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                    <p> sdfasd</p>
                    <p>{this.props.value.description}</p>
                  </div>
                </Popup> */}
                </div>
                
            </figure>
            </>

  );
}
}

export default ProductComponent;