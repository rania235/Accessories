import React, {Component} from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import OfferPageComponent from './Componenets/OfferPage/OfferPageComponent';
import Footer from './Componenets/Footer/FooterComponent'; 
import OrderPageComponent from './Componenets/Order/OrderPageComponent'; 
import ContactUsComponent from './Componenets/Contact/ContactUsComponent';
import {Route, Switch, withRouter} from "react-router-dom";
//import Dashboard from './Admin/Dashboard';
import AboutUs from './Componenets/AboutUs/AboutUsComponent';
import NavBarComponent from './Componenets/Navbar/NavBarComponent';
//import Login from './Pages/Login';

class App extends Component{
  constructor(props){
    super(props)
  }
  render() {
 
    return (
      <>
              <NavBarComponent />
              <Switch>
              <Route exact path="/" strict exact render={(props)=><HomePage/>} />
             <Route path="/offer" strict exact render={(props)=><OfferPageComponent/>}/>
             <Route path="/order" strict exact render={(props)=><OrderPageComponent/>}/>
             <Route path="/about" strict exact render={(props)=><AboutUs/>}/>
             <Route path="/contact" strict exact render={(props)=><ContactUsComponent/>} />
              </Switch>
              <Footer />
      </>
    );
    }
}
  export default withRouter(App);
