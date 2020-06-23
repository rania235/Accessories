
import React, { Component } from 'react';
import { Route} from "react-router-dom";
import DashboardNavbar from './DashboardNavbar';



class Dashboard extends Component {
  render() {
    return (
      <Route
        path="/admin"
        render={({ match: { url } }) => (
          <>
           <Route path={`${url}/`} component={DashboardNavbar} exact />
          </>
        )}
      />
    );
  }
}


export default Dashboard;
