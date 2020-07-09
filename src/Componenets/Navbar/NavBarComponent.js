import React, {Component} from 'react';
import './NavBarComponent.scss';
import { withRouter, Link } from 'react-router-dom';
import Images from '../../Images/Images.jpg';
import back from'../../Images/back.jpg'
import axios from 'axios';
class NavBarComponent extends Component {
  constructor(props){
    super(props)
  }

  onLogout = (e)=>{
    console.log('here')
    const token = localStorage.getItem('token')
    e.preventDefault();
    axios.get('http://127.0.0.1:8000/api/user/logout',{
      headers:{
         'Authorization' : 'Bearer ' + token}
    }).then((res)=>{
      localStorage.removeItem('token')
      localStorage.removeItem('id');
    }).catch(err=>console.log(err))
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
                  {!localStorage.getItem('token') ? (<>
                    <li className="li-navbar"> <Link to="/login"className="profile-menu-link">Log in</Link></li>  

                  </>) : (<>
                    <li className="li-navbar"> <Link to="/" onClick={this.onLogout} className="profile-menu-link">Logout</Link></li>  
                  </>) }
                       
                        
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
