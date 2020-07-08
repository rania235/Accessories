
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import DashboardNavbar from './DashboardNavbar/DashboardNavbar';
import Home from './Homedashboard/Home';
import OffersItemsComponent from './Offers/OffersItemsComponent';
import UserComponent from './User/UserComponent';
import AdminComponent from './Admins/AdminComponent';
import Login from './Login/LoginAdmin';



class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
          
         <div style={{display:"grid",gridTemplateColumns:"1fr 4fr"}}>
<Login/>
 {/* <DashboardNavbar/>
            <Switch>
         <Route strict exact path="/admin/home" render={()=><Home/>} />
         <Route strict  path="/admin/items" render={()=><OffersItemsComponent/>} />
         <Route strict  path="/admin/user" render={()=><UserComponent/>} />
         <Route strict  path="/admin/component" render={()=><AdminComponent/>} />
         </Switch> 
 */}
         </div>          
    );
  }
}


export default withRouter(Dashboard);
