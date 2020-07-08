import React, {Component} from 'react';
import './ContactUsComponent.scss';
//import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';




class ContactUsComponent extends Component {
  

  render(){
    return(
      <div className="ContactUsComponent">
      <div className="container">
  
  <div className="contact-method">
    <i className="contact"className="fas fa-envelope"></i>
    <span className="contact-form-text">example@domain.com</span>
  </div>
  
  <div className="contact-method">
    <i className="fas fa-mobile-alt"></i>
    <span className="contact-form-text">+34 646 628 357</span>
  </div>
  
  <div className="contact-method">
    <i className="fas fa-map-marker-alt"></i>
    <span className="contact-form-text">Barcelona Spain</span>
  </div>
</div>
<div className="contact">
   <label for="fname" className="contact-form-text">First Name</label>
    <input type="text" id="fname" name="firstname"className="firsname-input"/>

    <label for="fname" className="contact-form-text">Last Name</label>
    <input type="text" id="fname" name="firstname"className="firsname-input"/>

    <label for="fname" className="contact-form-text"> Your Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px", color:"black"}} className="textarea"></textarea>
    <button  className="butn">Send</button>
</div>
</div>


  
    
 
    );
  }
}

export default ContactUsComponent;


