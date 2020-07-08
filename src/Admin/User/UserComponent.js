import React, {Component} from 'react';
import './UserComponent.scss';
import index from '../AdminImages/index.jpg'



class UserComponent extends Component {
  render(){
    return(
<div className="UserComponent">
<section className="container-usercomponent">
  <h2 className="title-user">order from the user</h2>
  <table role="table" className="table">
    <thead role="rowgroup">
      <tr role="row">
        <th role="columnheader">First name</th>
        <th role="columnheader">Last name</th>
        <th role="columnheader">Name of order</th>
        <th role="columnheader">Email</th>
        <th role="columnheader">Phonenumber</th>
        <th role="columnheader">Location</th>
    </tr>
    </thead>
    <tbody role="rowgroup">
      <tr role="row">
        <td role="cell" data-title="First name">John</td>
        <td role="cell" data-title="Last name">Smith</td>
        <td role="cell" data-title="Job title">Product owner</td>
        <td role="cell" data-title="Email">john.smith@codepen.io</td>
        <td role="cell" data-title="Username">81666333</td>
        <td role="cell" data-title="Location">Spain</td>
      </tr>
      <tr role="row">
        <td role="cell" data-title="First name">George</td>
        <td role="cell" data-title="Last name">Lucas</td>
        <td role="cell" data-title="Job title">Scrum master</td>
        <td role="cell" data-title="Email">george.lucas@codepen.io</td>
        <td role="cell" data-title="Username">81666333</td>
        <td role="cell" data-title="Location">Switzerland</td>
      </tr>
      <tr role="row">
        <td role="cell" data-title="First name">Peter</td>
        <td role="cell" data-title="Last name">Rabit</td>
        <td role="cell" data-title="Job title">Software engineer</td>
        <td role="cell" data-title="Email">peter.rabit@codepen.io</td>
        <td role="cell" data-title="Username">81666333</td>
        <td role="cell" data-title="Location">Ireland</td>
    </tr>
      <tr role="row">
        <td role="cell" data-title="First name">Elizabeth</td>
        <td role="cell" data-title="Last name">Taylor</td>
        <td role="cell" data-title="Job title">UX Designer</td>
        <td role="cell" data-title="Email">elizabeth.taylor@codepen.io</td>
        <td role="cell" data-title="Username">81666333</td>
        <td role="cell" data-title="Location">London</td>
     </tr>
      <tr role="row">
        <td role="cell" data-title="First name">Catherine</td>
        <td role="cell" data-title="Last name">Jones</td>
        <td role="cell" data-title="Job title">QA tester</td>
        <td role="cell" data-title="Email">catherine.jones@codepen.io</td>
        <td role="cell" data-title="Username">81666333</td>
        <td role="cell" data-title="Location">USA</td>
       </tr>
    </tbody>
  </table>
</section>

</div>
    );
  }
}

 export default UserComponent;