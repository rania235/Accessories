import React, {Component} from 'react';
import './HomePageProductsComponent.scss';
//import { Card, Icon, Image, Button, Grid, Container, Segment, Header } from 'semantic-ui-react';
import Acc10 from '../../Images/acc10.jpg';
import Acc5 from '../../Images/acc5.jpg';
import Acc9 from '../../Images/acc9.jpg';
import Acc7 from '../../Images/acc7.jpg';


class HomePageProductsComponent extends Component {

render(){
  return(
    <div className="ProductComponent-title">
      <ul className="gallery" role="list">
    <li className="gallery-card">
      <img src={Acc10} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
      <button className="product-text">Buy</button>
        <div className="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount1">&hearts;</button>
          <span id="lovecount1" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>
    <li className="gallery-card">
      <img src={Acc5} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
      <button className="product-text">Buy</button>
        <div className="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount2">&hearts;</button>
          <span id="lovecount2" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>
    <li className="gallery-card">
      <img src={Acc9} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
      <button className="product-text">Buy</button>
        <div class="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount3">&hearts;</button>
          <span id="lovecount3" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>
    <li className="gallery-card">
      <img src={Acc7} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
      <button className="product-text">Buy</button>
        <div className="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount4">&hearts;</button>
          <span id="lovecount4" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>
    <li className="gallery-card">
      <img src={Acc5} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
       <button className="product-text">Buy</button>
        <div className="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount5">&hearts;</button>
          <span id="lovecount5" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>
    <li className="gallery-card">
      <img src={Acc9} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
      <button className="product-text">Buy</button>
        <div className="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount6">&hearts;</button>
          <span id="lovecount6" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>

    <li className="gallery-card">
      <img src={Acc10} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
      <button className="product-text">Buy</button>
        <div className="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount6">&hearts;</button>
          <span id="lovecount6" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>
    <li className="gallery-card">
      <img src={Acc10} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
      <button className="product-text">Buy</button>
        <div className="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount6">&hearts;</button>
          <span id="lovecount6" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>

    <li className="gallery-card">
      <img src={Acc10} alt="" style={{width:"100%", height:"100%"}}/>
      <div className="gallery-card__content">
      <button className="product-text">Buy</button>
        <div className="gallery-card__actions">
          <button role="button" className="gallery-card__btn-love" aria-labelledby="lovecount6">&hearts;</button>
          <span id="lovecount6" className="gallery-card__love-count">50$</span>
          <button role="button" className="gallery-card__btn-share">comment</button>
        </div>
      </div>
    </li>
 </ul>
 </div>
 
    
  )
}
}
export default HomePageProductsComponent;



