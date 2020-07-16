import React, {Component} from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import OfferPageComponent from './Componenets/OfferPage/OfferPageComponent';
import Footer from './Componenets/Footer/FooterComponent'; 
import OrderPageComponent from './Componenets/Order/OrderPageComponent';
import ContactUsComponent from './Componenets/Contact/ContactUsComponent';
import {Route, Switch, withRouter} from "react-router-dom";
import AboutUs from './Componenets/AboutUs/AboutUsComponent';
import NavBarComponent from './Componenets/Navbar/NavBarComponent';
import ViewProduct from './Pages/ViewProduct/ViewProduct';
import axios from 'axios';
import Login from './Pages/Login';


import AdminLogin from './Admin/Login/LoginAdmin'
import Home from './Admin/Homedashboard/Home';
import OffersItemsComponent from './Admin/Offers/OffersItemsComponent';
import UserComponent from './Admin/User/UserComponent';
import AdminComponent from './Admin/Admins/AdminComponent';
//import DashboardNavbar from './Admin/DashboardNavbar/DashboardNavbar'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      id:-1,
      order:[]
    }
  }
  componentDidMount() {
    //const { id } = this.props.match.params;
    axios.get(`http://127.0.0.1:8000/api/products/`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => {
            this.setState({ data:res.data.products });
        })
        .catch(err => {
            console.log(err);
        });;
}
  SendID=(id)=>{
      this.props.history.push(`/view-product/${id}`);
  }
  OrederID=(id)=>{console.log("hello orderid")
  let a=this.state.order;
  a.push(id);
   let body={
    user_id:localStorage.getItem('id'),
    delivered:false,
    total:100,
    id_orders:7
  } 
  axios.post('http://127.0.0.1:8000/api/orders/',body,{
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token')
    }
  }).then((res)=>{
    console.log("ress",res)
  }).catch((error)=>{
    console.log(error);
  });
 
  }

  addOrderTest=(id)=>{
      let b=this.state.order;
      b.push(id);
      this.setState({order:b})
  }

  render() {
 
    return (
      <React.Fragment>
        <NavBarComponent />
        <Switch>
          <Route exact path="/" strict exact render={() => <HomePage data={this.state.data} SendID={this.SendID} />} />
          <Route path="/offer" strict exact render={(props)=><OfferPageComponent data={this.state.data} addOrderTest={this.addOrderTest}/>}/>
          <Route path="/login"  render={() => <Login/>} />
          <Route path="/order" strict exact render={(props)=><OrderPageComponent order={this.state.order} />}/>
          <Route path="/about" strict exact render={(props)=><AboutUs/>}/>
          <Route path="/contact" strict exact render={(props)=><ContactUsComponent/>} />
          <Route path="/view-product/:id" strict exact render={props => <ViewProduct {...props} OrederID={this.OrederID}/> } />
         
        </Switch>
        <Footer /> 
      </React.Fragment> 
    );
    }
}
  export default withRouter(App);
