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

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      id:-1
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
  render() {
 
    return (
      <React.Fragment>
        <NavBarComponent />
        <Switch>
          <Route exact path="/" strict exact render={() => <HomePage data={this.state.data} SendID={this.SendID}/>} />
          <Route path="/offer" strict exact render={(props)=><OfferPageComponent/>}/>
          <Route path="/login"  render={() => <Login/>} />
          <Route path="/order" strict exact render={(props)=><OrderPageComponent/>}/>
          <Route path="/about" strict exact render={(props)=><AboutUs/>}/>
          <Route path="/contact" strict exact render={(props)=><ContactUsComponent/>} />
          <Route path="/view-product/:id" strict exact render={props => <ViewProduct {...props}/>} />
        </Switch>
        <Footer /> 
      </React.Fragment> 
    );
    }
}
  export default withRouter(App);
