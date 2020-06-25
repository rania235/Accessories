import React, {Component} from 'react';
import './Login.scss';


class Login extends Component {
  state={
    containerClass:""
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
		<div className="Login--body">
       <div className={`container-style ${this.state.containerClass}`} id="container-style">
  <div class="form-container sign-up-container">
    <form action="#">
      <h1 className="Create-Account">Create Account</h1>
      <div className="social-container">
        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" className="input" />
      <input type="email" placeholder="Email" className="input"/>
      <input type="password" placeholder="Password" className="input" />
      <button className="ghost">Sign Up</button>
    </form>
  </div>
  <div className="form-container sign-in-container">
    <form action="#">
      <h1 className="Create-Account">Sign in</h1>
      <div className="social-container">
        <a href="#" class="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email"  className="input"/>
      <input type="password" placeholder="Password"className="input" />
      <a href="#" className="forgot-password">Forgot your password?</a>
      <button className="ghost">Sign In</button>
    </form>
  </div>
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1 className="Create-Account">Welcome To Boutique Camelia!</h1>
        <button className="ghost" id="signIn" onClick={this.switchLeft}>Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1 className="Create-Account">Welcome Back To Boutique Camelia</h1>
        <button className="ghost" id="signUp" onClick={this.switchRight}>Sign Up</button>
      </div>
    </div>
  </div>
</div>
</div> 


  );
}

}

export default Login;
