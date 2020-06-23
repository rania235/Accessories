import React, {Component} from 'react';
import '../Componenets/NavBarComponent.scss';
import { Link } from 'react-router-dom';
import Images from '../Images/Images.jpg';

class NavBarComponent extends Component {
  render(){
    return(
      <div className="NavBarComponent">



<div className="DashboardNavbar">
<div className="main-container">
      <div className="profile">
        <div className="profile-avatar">
          <img src={Images} alt="" className="profile-img"/>
          <div className="profile-name"></div>
          <h1 className="profile-nav">CAMELIA</h1>
        </div>
        <img src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" className="profile-cover"/>
        <div className="profile-menu">
          <Link to="/" className="profile-menu-link">Home</Link>
          <Link to="/offer" className="profile-menu-link">Offers</Link>
          <Link to="/order" className="profile-menu-link">Orders</Link>
          <Link to="/contact" className="profile-menu-link"> Contact Us</Link>
        
        </div>
      </div>
</div>
</div>
</div>
    
    );
  }
}

export default NavBarComponent;
