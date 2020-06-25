import React, {Component} from 'react';
import './NavBarComponent.scss';
import { withRouter, Link } from 'react-router-dom';
import Images from '../../Images/Images.jpg';
import back from'../../Images/back.jpg'

class NavBarComponent extends Component {
  constructor(props){
    super(props)
  }
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
        <img src={back} alt="" className="profile-cover"/>
        <div className="profile-menu">
          <Link to="/" className="profile-menu-link">Home</Link>
          <Link to="/offer" className="profile-menu-link">Offers</Link>
          <Link to="/order" className="profile-menu-link">Orders</Link>
          <Link to="/contact" className="profile-menu-link"> Contact Us</Link>
          <Link to="/about" className="profile-menu-link"> AboutUs</Link>
          <Link to="#"className="profile-menu-link">Log in</Link>
        </div>
      </div>
</div>
</div>
</div>
    
    );
  }
}

export default withRouter(NavBarComponent);
