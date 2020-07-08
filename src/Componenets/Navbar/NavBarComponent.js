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

    <div class="header">
        <div class="cont">
            <div class="navbar">
                <div class="logo">
                    <h1>Camelia</h1>
                </div>
                <div class="menu">
                    <ul className="menu-navbar-user">
                 <li className="li-navbar"><Link to="/" className="profile-menu-link">Home</Link></li>
                   <li className="li-navbar"> <Link to="/offer" className="profile-menu-link">Offers</Link></li>
                   <li className="li-navbar"> <Link to="/order" className="profile-menu-link">Orders</Link></li>
                   <li className="li-navbar"> <Link to="/contact" className="profile-menu-link"> Contact Us</Link></li>
                  <li className="li-navbar"> <Link to="/about" className="profile-menu-link"> AboutUs</Link></li> 
                 <li className="li-navbar"> <Link to="#"className="profile-menu-link">Log in</Link></li>  
                       
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="foto">
       {/*  <img src="https://cdn.hipwallpaper.com/i/63/90/qZAfaO.jpg" alt=""/> */}
        <div class="yazi">
          
           
        </div>
    </div>
  
      </div>
    
    );
  }
}

export default withRouter(NavBarComponent);
