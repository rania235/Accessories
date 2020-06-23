import React, {Component} from 'react';
import './SliderComponent.scss';
import { Image, Divider, Container } from 'semantic-ui-react'

import Acc6 from '../Images/acc6.jpg';
import Acc3 from '../Images/acc3.jpg';
import Acc4 from '../Images/acc4.jpg';
import Acc7 from '../Images/acc7.jpg';
import Acc8 from '../Images/acc8.jpg';
import Acc9 from '../Images/acc9.jpg';





class SliderComponent extends Component {
  render(){
    return(
      <div className="SliderComponent-top">
      
        <div className="SliderComponent-image">
    <Image src={Acc6} size='tiny' verticalAlign='top' /> <span>Top Aligned</span>
    <Divider />
    <Image src={Acc3} size='tiny' verticalAlign='middle' />{' '}
    <span>Middle Aligned</span>
    <Divider />
    <Image src={Acc7} size='tiny' verticalAlign='bottom' />{' '}
    <span>Bottom Aligned</span>
  </div>

        </div>

  
    )}}
    export default SliderComponent;