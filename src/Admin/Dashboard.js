
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import DashboardNavbar from './DashboardNavbar/DashboardNavbar';
import Home from './Homedashboard/Home';
import ItemsComponent from './Items/ItemsComponent';
import UserComponent from './User/UserComponent';
import AdminComponent from './Admins/AdminComponent';




class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
          
          <Router>
            <DashboardNavbar/>
            <Switch>
         <Route strict exact path="/admin" render={()=><Home/>} />
         <Route strict exact path="/admin/items" render={()=><ItemsComponent/>} />
         <Route strict exact path="/admin/user" render={()=><UserComponent/>} />
         <Route strict exact path="/admin/component" render={()=><AdminComponent/>} />
         </Switch>
         </Router>
          
    );
  }
}


export default withRouter(Dashboard);
