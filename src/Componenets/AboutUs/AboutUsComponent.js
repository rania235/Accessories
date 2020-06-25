import React, {Component} from 'react';
import './AboutUsComponent.scss';



class AboutUsComponent extends Component {
render(){
  return(
<div className="AboutUsComponent">
  <section class="about" id="about">
     <div class="container">
          <div class="heading text-center">
                    <h2 className="AboutUs">About
                        <span className="AboutUs">Us</span></h2>
                    <p className="AboutUsComponent-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      <hr></hr>
                      
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="about" class="img-fluid" width="100%"/>
                    </div>
                    <div class="col-lg-6">
                        <h3 className="AboutUsComponent-h2">Lorem ipsum dolor sit amet, consectetur </h3>
                        <p className="AboutUsComponent-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <h4 className="AboutUsComponent-h2">
                                    <i class="far fa-star"></i>Awesome Design</h4>
                            </div>
                            <div class="col-md-6">
                                <h4 className="AboutUsComponent-h2">
                                    <i class="far fa-star" ></i>
                                    Creative Design</h4>
                            </div>
                            <div class="col-md-6">
                                <h4 className="AboutUsComponent-h2">
                                    <i class="far fa-star"></i>Better Client Service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4 className="AboutUsComponent-h2">
                                    <i class="far fa-star"></i>
                                    Digital Marketing & Branding</h4>
                            </div>
                            <div class="col-md-6">
                                <h4 className="AboutUsComponent-h2">
                                    <i class="far fa-star"></i>Creative Design</h4>
                            </div>
                            <div class="col-md-6">
                                <h4 className="AboutUsComponent-h2">
                                    <i class="far fa-star"></i>
                                    Speed And Flexibility</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  

</div>
  )
}
}

export default AboutUsComponent;