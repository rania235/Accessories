import React, {Component} from 'react';
import './ContactUsComponent.scss';




class ContactUsComponent extends Component {
  

  render(){
    return(
      <div className="ContactUsComponent">
      <div className="container">
  
  <div className="contact-method">
    <i className="fas fa-envelope"></i>
    <span>example@domain.com</span>
  </div>
  
  <div className="contact-method">
    <i className="fas fa-mobile-alt"></i>
    <span>+34 646 628 357</span>
  </div>
  
  <div className="contact-method">
    <i className="fas fa-map-marker-alt"></i>
    <span>Barcelona Spain</span>
  </div>
</div>
<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">City</label>
    <select id="country" name="country">
      <option value="australia">Beirut</option>
      <option value="canada">Aakar</option>
      <option value="usa">Saida</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit" className="buttonSubmit"/>
  </form>
</div>

</div>


  
    
 
    );
  }
}

export default ContactUsComponent;


