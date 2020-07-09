import React, {Component} from 'react';
import './SliderComponent.scss';
import Acc9 from '../../Images/acc9.jpg';
import Popup from "reactjs-popup";
import axios from 'axios';


class SliderComponent extends React.Component {
  constructor(props){
     super(props)
     this.state={
      like: true,
      position: {x: 0, y: 0},
      name:'',
      description:'',
      comments:''

     }
  }

 

componentDidMount() {
  axios.get(`http://127.0.0.1:8000/api/userLike/`, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  })
      .then(res => {
        console.log(res.data)
          this.setState({ data:res.data.userlike });
      })
      .catch(err => {
          console.log(err);
      });
      axios.get(`http://127.0.0.1:8000/api/usercomment`, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  })
      .then(res => {
        console.log(res.data)
          this.setState({ data:res.data.UserComment });
      })
      .catch(err => {
          console.log(err);
      });

      axios.get(`http://127.0.0.1:8000/api/products/`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => {
          console.log(res.data)
            this.setState({ data:res.data.products });
        })
        .catch(err => {
            console.log(err);
        });
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
// handleClickDislike(){
//   const like = ((this.state.dislike) == this.state.like  ? false : '');
//   this.setState({
//     dislike: !this.state.dislike,
//     like
//   });
// }; 
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
  const [moveX, moveY] = [(this.state.position.x / ""), (this.state.position.y / "")];
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
            {this.state.like ? "" : ""}
          </button>
          {/* <button 
            id="dislike" 
            onClick={()=>this.handleClickDislike()} 
            className={this.state.dislike?'active':'not-active'}>
            <i className="far fa-thumbs-down"></i>  
            {this.state.dislike ? '' : ''}
          </button> */}
        </div>
      </Content>
      <div className="imgs">
        <img 
          ref={this.ocean} 
          className="ocean"
          // src={this.}
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
  <p>hello world</p>

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
