import React, { Component } from 'react';
import './LoginAdmin.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


 class LoginAdmin extends Component {
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

  login = (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/admin/login";
    const body = {
      email:this.state.email,
      password:this.state.password
    }
    axios.post(url,body)
            .then ((response) => {
              localStorage.setItem('Admin-token', response.data.access_token)
              this.props.history.push(`/admin/home`);
            });
}




render(){
  return(
    <div className="LoginAdmin">
    <div className="login-box">
  <h2>Login</h2>
  <form className="LoginAdmin-form" onSubmit={this.onRegister}>
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
     <button className="Login-Admin" type="submit" onClick = {(e)=>this.login(e)}>Login</button> 
    </a>
  </form>
</div>


    </div>
  )
}
}

export default withRouter(LoginAdmin)