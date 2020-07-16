
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import DashboardNavbar from './DashboardNavbar/DashboardNavbar';
import Home from './Homedashboard/Home';
import OffersItemsComponent from './Offers/OffersItemsComponent';
import UserComponent from './User/UserComponent';
import AdminComponent from './Admins/AdminComponent';
import  AdminLogin from './Login/LoginAdmin';



class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
    }
  }


//   addProducts=(id)=>{
//     let b=this.state.product;
//     b.push(id);
//     this.setState({product:b})
// }  

  render() {
    return (
          
         <div>

            <DashboardNavbar/>
            <Route strict exact path="/admin/login"  render={(props)=>< AdminLogin/>}/>
            
            <Route path="/admin/home" strict exact render={(props)=><Home data={this.state.data}/>}/>

            <Route strict  path="/admin/items" render={()=><OffersItemsComponent/>} />

            <Route strict  path="/admin/user" render={()=><UserComponent/>} />

            <Route strict  path="/admin/component" render={()=><AdminComponent/>} />
         </div>          
    );
  }
}


export default withRouter(Dashboard);
