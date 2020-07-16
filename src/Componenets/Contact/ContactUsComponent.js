import React, {Component} from 'react';
import './ContactUsComponent.scss';
//import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';




class ContactUsComponent extends Component {


  changeFirstName = e => {
    e.preventDefault();
    this.setState({userfirstname:e.target.value})
  }

  changeLastName = e => {
    e.preventDefault();
    this.setState({userlastname:e.target.value})
  }

  changeMessage = e=>{
    e.preventDefault();
    this.setState({usermessage:e.target.value})
  }

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
  <form action="https://formspree.io/xbjzdjkp" method="POST" className="contact-form-component">
   <label for="fname" className="contact-form-text">First Name</label>
    <input type="text" id="fname" name="firstname"className="firsname-input" value={this.userfirstname} onChange={e=>this.changeFirstName(e)}/>

    <label for="fname" className="contact-form-text">Last Name</label>
    <input type="text" id="fname" name="firstname"className="firsname-input" value={this.userlastname} onChange={e=>this.changeLastName(e)}/>

    <label for="fname" className="contact-form-text"> Your Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px", color:"black"}} className="textarea" value={this.usermessage} onChange={e=>this.changeMessage(e)}></textarea>
    <button  className="butn" >Send</button>
    </form>
</div>
</div>


  
    
 
    );
  }
}

export default ContactUsComponent;


