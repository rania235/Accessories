import React, {Component} from 'react';
import './SliderComponent.scss';
import Acc9 from '../../Images/acc9.jpg';
import Popup from "reactjs-popup";


class SliderComponent extends React.Component {
  state = {
    like: true,
    dislike: false,
    position: {x: 0, y: 0}
  }

  ocean = React.createRef();
 
/*============== Like/Dislike ====================*/
handleClickLike(){
  const dislike = ((this.state.like) == this.state.dislike ? false : '');
  this.setState({
    like: !this.state.like,
    dislike
  });
}
handleClickDislike(){
  const like = ((this.state.dislike) == this.state.like  ? false : '');
  this.setState({
    dislike: !this.state.dislike,
    like
  });
}; 
/*================ Parallax =================*/
onMouseMove(e) {
  this.setState({
    position: {
      x: e.pageX,
      y: e.pageY
    }
  });
  this.Parallax();
}

Parallax() {
  const [moveX, moveY] = [(this.state.position.x / -100), (this.state.position.y / -120)];
  //const [ocean, lemons] = [this.ocean.current, this.lemons.current];
  //ocean.style.transform = `translate3d(${moveX / .5}px, ${moveY}px, 0)`;
  //lemons.style.transform = `translate3d(${moveX / .2}px, ${moveY}px, 0)`;
}

render() {
  return (
    <div className="SliderComponent"> 
    <div className="post" onMouseMove={(e)=>this.onMouseMove(e)}>
    <Content>
        <div>
          <button id="like" 
            onClick={()=>this.handleClickLike()} 
            className={this.state.like?'active':'not-active'}>
            <i className="far fa-thumbs-up"></i>  
            {this.state.like ? 101 : 100}
          </button>
          <button 
            id="dislike" 
            onClick={()=>this.handleClickDislike()} 
            className={this.state.dislike?'active':'not-active'}>
            <i className="far fa-thumbs-down"></i>  
            {this.state.dislike ? 26 : 25}
          </button>
        </div>
      </Content>
      <div className="imgs">
        <img 
          ref={this.ocean} 
          className="ocean"
          src={Acc9}
          alt="see"
          width="100%"
          height="100%"
        />
        
      </div>
  </div>
  </div>
  )
}
}

const Content = ({children}) =>
<div className="content">
<h1>Accessories</h1>
  <p>
  The lemon, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.</p>

<p>The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses.[2] The pulp and rind are also used in cooking and baking. The juice of the lemon is about 5% to 6% citric acid, with a pH of around 2.2, giving it a sour taste. The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods such as lemonade and lemon meringue pie.</p>
  <div className="buttons">
    {children}
    <div className="nav">
    <button className="nav__button left-margin">Buy</button>
   
    <Popup trigger={<button className="nav__button left-margin"> Comments</button>}
          modal
         closeOnDocumentClick
          >
     <div>
        <input className="comments--Form--input" type="text" />
        <button className="send-button">send</button>
      </div>
    </Popup>

    </div>
  </div>
</div>

export default SliderComponent;
