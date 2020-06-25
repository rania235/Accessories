import React, {Component} from 'react';
import './OfferPageComponent.scss';

//import { Link } from 'react-router-dom';

class OfferPageComponent extends Component {
  render(){
    return(   
<div className="OfferPageComponent">
    <div class="container-fluid">
      <div class="row" id="about">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="angelnecklace">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="info">
          <h1 className="Offers">Boutique Camelia<h1></h1>
            Make Offer 60% on those product
          </h1>
        </div>
      </div>
      
    
      <div class="row pad" id="products">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 className="Products">Products</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <img src="https://cdn.shopify.com/s/files/1/1427/9894/products/2285793128769200431_IMG_9934.JPG?v=1571439322" alt="butterfly necklace" class="img"/>
          <h3 className="Brands-product">Butterfly Necklace</h3>
          <p className="Brands-product">25/06/2020 To 25/06/2020 </p>
          <h4 className="Brands-product">$25.99</h4>
          <button className="buy-button">Buy</button>

        </div>


        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <img src="https://data.whicdn.com/images/333652277/original.jpg" alt="butterfly necklace" class="img"/>
          <h3 className="Brands-product">Love Necklace Set</h3>
          <p className="Brands-product">25/06/2020 To 25/06/2020 </p>
          <h4 className="Brands-product">$45.99</h4>
          <button className="buy-button">Buy</button>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <img src="https://fashionista.com/.image/t_share/MTYyOTc0NjA3MTczODg3ODQx/shop-locket-necklaces.jpg" alt="butterfly necklace" class="img"/>
          <h3 className="Brands-product">Heart Necklace</h3>
          <p className="Brands-product">25/06/2020 To 25/06/2020 </p>
          <h4 className="Brands-product">$35.99</h4>
          <button className="buy-button">Buy</button>
        </div>
      </div>
      
      <div class="row pad">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="button">
         
        </div>
      </div>

      
    
      </div>
      
</div>
    )
  }
}

export default OfferPageComponent;