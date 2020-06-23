import React, {Component} from 'react';
import './OrderPageComponent.scss';
import Acc6 from '../Images/acc6.jpg';

class OrderPageComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      ProductInput:""
    }
}
  handleDiscard = () => {
    this.props.showDeleteCard();
    this.handleDelete();
    this.setState({
        ProductInput:""
    });
}
  render(){
    return( 
   <div className="OrderPageComponent">
      {/* <figure className="Brand">
  <div className="Brand__hero">
      <img src={Acc6} alt="Pizza" className="Brand__img"/>
  </div>
  <div className="Brand__content">
       <p className="Brand__description">Brand Item.</p>
    <div className="Brand__details">
       <div >$25.99</div>
    </div>
  </div>
  <div className="Brand__price"><button onPress={this.handleDiscard}>Delete</button></div>
</figure>
  



<figure className="Brand">
  <div className="Brand__hero">
      <img src={Acc6} alt="Pizza" className="Brand__img"/>
  </div>
  <div className="Brand__content">
       <p className="Brand__description">Brand Item.</p>
    <div className="Brand__details">
       <div >$25.99</div>
    </div>
  </div>
  <div className="Brand__price"><button>Delete</button></div>
</figure>



<figure className="Brand">
  <div className="Brand__hero">
      <img src={Acc6} alt="Pizza" className="Brand__img"/>
  </div>
  <div className="Brand__content">
       <p className="Brand__description">Brand Item.</p>
    <div className="Brand__details">
       <div >$25.99</div>
    </div>
  </div>
  <div className="Brand__price"><button>Delete</button></div>
</figure>
  <div>
    <button className="Brand-button">Buy These Order</button>
  </div> */}
</div>



    )
  }
}


export default OrderPageComponent;