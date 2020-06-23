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
       <div class={`container ${this.state.containerClass}`} id="container">
  <div class="form-container sign-up-container">
    <form action="#">
      <h1>Create Account</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#" class="forgot-password">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Welcome To Boutique Camelia!</h1>
        <button class="ghost" id="signIn" onClick={this.switchLeft}>Sign In</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Welcome Back To Boutique Camelia</h1>
        <button class="ghost" id="signUp" onClick={this.switchRight}>Sign Up</button>
      </div>
    </div>
  </div>
</div>
</div> 


  );
}

}

export default Login;
