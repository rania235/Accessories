import React, {Component} from 'react';
import './App.css';
import NavBarComponent from './Componenets/NavBarComponent'
import HomePage from './Pages/HomePage';
import OfferPageComponent from './Componenets/OfferPageComponent';
import FooterComponent from './Componenets/FooterComponent'; 
import OrderPageComponent from './Componenets/OrderPageComponent'; 
import ContactUsComponent from './Componenets/ContactUsComponent';
import { Route, Switch, withRouter} from "react-router-dom";
import Dashboard from './Admin/Dashboard';

function App(props) {
 
    return (
      <>
        {props.location.pathname.match(/admin/) ? (
          <Dashboard />
        )
          : (
            <React.Fragment>
              <NavBarComponent />
              <Switch>
              <Route exact path="/" component={HomePage} />
             <Route path="/offer" component={OfferPageComponent}/>
             <Route path="/order" component={OrderPageComponent}/>
             <Route path="/contact" component={ContactUsComponent} />
              </Switch>
              <FooterComponent />
            </React.Fragment>
          )}
      </>
    );
  
}
  export default withRouter(App);
