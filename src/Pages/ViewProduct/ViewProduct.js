import React, { Component } from 'react';
import './ViewProduct.scss';
import image from '../../Images/acc1.jpg';
import axios from 'axios';



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
      console.log(res.data.product);
        this.setState({ 
          data:res.data.product,
        },()=>{
          console.log("I am here");
        });
       
        
    })
    .catch(err => {
        console.log(err);
    });


}
// formView=()=>{console.log("hey")
//   let a= this.props.data.filter(value =>
//     value.id ==this.props.id )
//     console.log("filter",a)
  
//   /*   <div className="container-ViewProduct">
//     <img src={this.state.image} alt="Notebook"/>
//     <div className="content-ViewProduct">
//       <h1 className="ViewProduct-text">{value.name}</h1>
//       <p className="ViewProduct-text">{value.description}</p>
//     </div>
//   </div> */
  
// }
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
  render(){
return(
  <div className="View-Component">
  <figure>
    <div class="gallery__image">
        <img className="image-view" src={`http://localhost:8000/assets/img/${this.state.data.image}`} alt="image" title="image" />
    </div>    
  </figure>

  <p className="description-view"> {this.state.data.description}</p>
  <div className="ViewProduct">
    
 
<div className="comments-button">

<button 
              id="like" 
              onClick={()=>this.handleClickLike()} 
              className={this.state.like?'active':'not-active'}>
              <i className="far fa-thumbs-up"></i>  
              {this.state.like ? 26 : 25}
            </button>
          
            <input type="text" value={this.state.commentText} onChange={(e)=>this.changeCommentText(e)} placeholder="comments"></input>
           <button className="btn btn-primary" className="comments" onClick={this.handleComment}>Comment</button>


</div>
  </div>
  </ div>
)
  }
  
}

export default ViewProduct;