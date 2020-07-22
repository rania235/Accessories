import React, { Component } from 'react';
import './ViewProduct.scss';
//import image from '../../Images/acc1.jpg';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
//import { Redirect } from "react-router-dom";




class ViewProduct extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    like: true,
    comments:'',
    name:'',
    description:'',
    data:[],
    image:'',
    userLike:'',
    price:"",
    commentText :""
  }
}



componentDidMount() {
  console.log("fskfjlfj");
  axios.get(`http://127.0.0.1:8000/api/userLike/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data.userLike);
          this.setState({ userLike:res.data.userlike });
      })
      .catch(err => {
          console.log(err);
      });
      // axios.get(`http://127.0.0.1:8000/api/usercomment/${this.props.match.params.id}`);

  axios.get(`http://127.0.0.1:8000/api/products/${this.props.match.params.id}`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(res => {
        this.setState({ 
          data:res.data.product,
        },()=>{
        });
       
        
    })
    .catch(err => {
        console.log(err);
    });


}

changeCommentText = (e) => {
  e.preventDefault()
  this.setState({
    commentText : e.target.value
  });
}

  handleClickLike(){
    this.setState({
      like: !this.state.like,
    });
  }
  
  handleComment=()=>{
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    console.log(id);
    axios.post(`http://127.0.0.1:8000/api/usercomment`, {
      comment: this.state.commentText,
      user_id: id,
      product_id:this.props.match.params.id
},{headers:{
  'Authorization': 'Bearer ' + token
}}).then((res)=>{
  this.setState({
    commentText:""
  })
})
  }


  handleClickLike=()=>{
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    console.log(id);
    axios.post(`http://127.0.0.1:8000/api/userLike`, {
      like: this.state.like,
      user_id: id,
      product_id:this.props.match.params.id
},{headers:{
  'Authorization': 'Bearer ' + token
}}).then((res)=>{
  this.setState({
    like:""
  })
})
  }
  test=()=>{
    
    this.props.OrederID(this.state.data);
    this.props.history.push("/order");
  }
  render(){
return(
  <div className="View-Component">
  <figure>
    <div class="gallery__image">
        <img className="image-view" src={`http://localhost:8000/assets/img/${this.state.data.image}`} alt="image" title="image" />
    </div>    
  </figure>

  <p className="description-view"> {this.state.data.description}</p>
  <p className="description-view"> ${this.state.data.price}</p>
  <div className="ViewProduct">
    
 
<div className="comments-button">

<button 
              id="like" 
              onClick={()=>this.handleClickLike()} 
              className={this.state.like}>
              <i className="far fa-thumbs-up"></i>  
              {this.state.like ? 26 : 25}
            </button>
          
            <input type="text" value={this.state.commentText} onChange={(e)=>this.changeCommentText(e)} placeholder="comments"></input>
           <button className="btn btn-primary" className="comments" onClick={this.handleComment}>Comment</button>
           <div className="button-buy">
           <button onClick={()=>this.test()} className="button-viw">Buy This Product</button>
           </div>
</div>
  </div>
  </ div>
)
  }
  
}

export default withRouter(ViewProduct);