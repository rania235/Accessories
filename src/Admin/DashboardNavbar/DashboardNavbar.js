import React, {Component} from 'react';
import './DashboardNavbar.scss';
import { Link, withRouter } from 'react-router-dom';
import Popup from "reactjs-popup";
//import back from '../AdminImages/back.jpg'

class DashboardNavbar extends Component {
  
  render(){
    return(
  
  
      <div className="DashboardNavbar-component">
        <div class="navabar__grub">
		<div class="sidebar__navbar active">
			<span></span>
			<div class="px-3 py-4 position-relative">

				<ul class="sidebar__list--menu mt-5">
					<li> <Link to="/admin/home" className="sidenav--link"><i class="fas fa-folder"></i> homepage</Link></li>
					<li> <Link to="/admin/items" className="sidenav--link"><i class="fas fa-folder"></i> items</Link></li>
					<li> <Link to="/admin/user" className="sidenav--link"><i class="fas fa-folder"></i> User</Link></li>
					<li><Link to="/admin/component" className="sidenav--link"><i class="fas fa-folder"></i> Admin</Link></li>
				</ul>
			</div>
		</div>
		


		
	</div>
   
       
     </div>

 





  
  
  
 
  

         
      /* <Link to="/admin/home" className="sidenav--link"><i class="fas fa-folder"></i> homepage</Link>
      <Link to="/admin/items" className="sidenav--link"><i class="fas fa-folder"></i> Items</Link>
      <Link to="/admin/user" className="sidenav--link"><i class="fas fa-folder"></i> User</Link>
      <Link to="/admin/component" className="sidenav--link"><i class="fas fa-folder"></i> Admin</Link>
    */
      
  
    )
  }
}

export default withRouter(DashboardNavbar);