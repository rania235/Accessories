import React, { Component } from 'react';
import './LoginAdmin.scss';


export default class LoginAdmin extends Component {
  constructor(props){
    super(props)
     this.state={
       email:"",
       password:""
     }
  }

  changeEmail = e => {
    e.preventDefault();
    this.setState({email:e.target.value})
  }

  changePassword = e => {
    e.preventDefault();
    this.setState({password:e.target.value})
  }
render(){
  return(
    <div className="LoginAdmin">
    <div className="login-box">
  <h2>Login</h2>
  <form className="LoginAdmin-form">
    <div className="user-box">
      <input type="text" name="" required="" value={this.state.email} onChange={e=>this.changeEmail(e)}/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" value={this.state.password} onChange={e=>this.changePassword(e)}/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
     <button className="Login-Admin" type="submit" onClick = {this.onRegister}>Login</button> 
    </a>
  </form>
</div>


    </div>
  )
}
}