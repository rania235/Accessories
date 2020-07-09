import React, {Component} from 'react';
import './Login.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      email:"",
      password:"",
      containerClass:""
    }
  }
changeUserName = e => {
  e.preventDefault();
  this.setState({username:e.target.value})
}
changeEmail = e => {
  e.preventDefault();
  this.setState({email:e.target.value})
}
changePassword = e => {
  e.preventDefault();
  this.setState({password:e.target.value})
}
onChangeEmailLogIn = e => {
  e.preventDefault();
  this.setState({email:e.target.value})
}
onChangePasswordLogIn = e => {
  e.preventDefault();
  this.setState({password:e.target.value})
}

onRegister = (e)=>{
e.preventDefault();
console.log('here')
axios.post('http://127.0.0.1:8000/api/user/register',  {
  name:this.state.username,
  email:this.state.email,
  password:this.state.password
},{
  headers:{'Content-Type': 'application/json',}
}).then((res)=>{
  localStorage.setItem('token', res.data.access_token)
  localStorage.setItem('id', res.data.id)
  this.props.history.push(`/`);
  }).catch(err=>console.log(err))
}



onLogin = (e)=>{
  console.log("here")
  e.preventDefault();
  axios.post('http://127.0.0.1:8000/api/user/login', {
    email:this.state.email,
    password:this.state.password
  }).then((res)=>{
    if(!localStorage.getItem('token')&&!localStorage.getItem('id')){
    localStorage.setItem('token', res.data.access_token);
    localStorage.setItem('id', res.data.id);
    this.props.history.push(`/`);
    }
  })
  }


  switchRight = () =>{
      this.setState({
        containerClass:"right-panel-active"
      })
  }

  switchLeft = () =>{
    this.setState({
      containerClass:""
    })
}
render(){
  return(
    <div className="Login-component">
		<div className="Login--body">
       <div className={`container-style container ${this.state.containerClass}`} id="container-style">
  <div class="form-container sign-up-container">
    <form onSubmit = {this.onRegister}>
      <h1 className="Create-Account">Create Account</h1>
      <div className="social-container">
        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" value={this.state.username} onChange={e=>this.changeUserName(e)} placeholder="Name" className="input" />
      <input type="email" value={this.state.email} onChange={e=>this.changeEmail(e)} placeholder="Email" className="input"/>
      <input type="password" value={this.state.password} onChange={e=>this.changePassword(e)} placeholder="Password" className="input" />
      <button type="submit" className="ghost-login">Sign Up</button>
    </form>
  </div>
  <div className="form-container sign-in-container">
    <form onSubmit = {this.onLogin}>
      <h1 className="Create-Account">Sign in</h1>
      <div className="social-container">
        <a href="#" class="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your account</span>
      <input type="email" value= {this.state.email} onChange={e=>this.onChangeEmailLogIn(e)} placeholder="Email"  className="input"/>
      <input type="password" value = {this.state.password} onChange={e=>this.onChangePasswordLogIn(e)} placeholder="Password"className="input" />
      <a href="#" className="forgot-password">Forgot your password?</a>
      <button type="submit" className="ghost-login">Sign In</button>
    </form>
  </div>
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1 className="Create-Account">Welcome To Boutique Camelia!</h1>
        <button className="ghost-login" id="signIn" onClick={this.switchLeft}>Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1 className="Create-Account">Welcome Back To Boutique Camelia</h1>
        <button className="ghost-login" id="signUp" onClick={this.switchRight}>Sign Up</button>
      </div>
    </div>
  </div>
</div>
</div> 
</div>


  );
}

}

export default withRouter(Login);
