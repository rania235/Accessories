import React, {Component} from 'react';
import './DashboardNavbar.scss';
import { Link, withRouter } from 'react-router-dom';
//import back from '../AdminImages/back.jpg'

class DashboardNavbar extends Component {
  
  render(){
    return(
  
  
      <div className="DashboardNavbar">
         <div class="header1">
       
                
                <div class="menu1">
                    <ul>
                    <li> <Link to="/admin/home" className="home-navbar"> homepage</Link></li>
                    <li> <Link to="/admin/items" className="home-navbar"> Items</Link></li>
                    <li><Link to="/admin/user" className="home-navbar"> User</Link></li>
                    <li><Link to="/admin/component" style={{border: "none"}} className="home-navbar"> Admin</Link></li>
                    </ul>
                </div>
            </div>
        
    
    
  
        {/* <div className="sidenav">
      <Link to="/admin/home" className="sidenav--link"><i class="fas fa-folder"></i> homepage</Link>
      <Link to="/admin/items" className="sidenav--link"><i class="fas fa-folder"></i> Items</Link>
      <Link to="/admin/user" className="sidenav--link"><i class="fas fa-folder"></i> User</Link>
      <Link to="/admin/component" className="sidenav--link"><i class="fas fa-folder"></i> Admin</Link>
      </div> */}
      
  </div>
    )
  }
}

export default withRouter(DashboardNavbar);