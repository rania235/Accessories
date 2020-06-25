import React, {Component} from 'react';
import './DashboardNavbar.scss';
import { Link, withRouter } from 'react-router-dom';
import image from '../AdminImages/index.jpg'

class DashboardNavbar extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="DashboardNavbar1">
        <div id="dashboard">
  
  <div id="sidebar" class="col-4">
      <a href="#" class="logo">DASHBOARD</a>
      
      <div class="user-info">
        <span class="status-online"></span>
        <img src={image} class="rounded-circle"/>
        <h3>Camelia</h3>
        <span class="user-rank">Accessories</span>
      </div>
      
      <ul class="menu">
      
      <Link to="/admin/home" class="active"><i class="fas fa-folder"></i> homepage</Link>
      <Link to="/admin/items" class="active"><i class="fas fa-folder"></i> Items</Link>
      <Link to="/admin/user" class="active"><i class="fas fa-folder"></i> User</Link>
      <Link to="/admin/component" class="active"><i class="fas fa-folder"></i> Admin</Link>
        
      </ul>
  </div>
</div>

</div>
    )
  }
}

export default withRouter(DashboardNavbar);