import React, { Component } from 'react';
import './Home.scss';
import Popup from "reactjs-popup";
//import index from '../AdminImages/index.jpg';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


//import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';

 class Home extends Component {
  constructor(props){
    super(props)
  this.state = {
    Products:[],
    name:'',
    description:'',
    image:'',
    price:'',
    data:[]
};
  }
test=()=>{
  let token=localStorage.getItem('Admin-token');
  axios.get(`http://127.0.0.1:8000/api/products/`, {
   headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
        'Authorization': 'Bearer ' + token

   }
})
   .then(res => {
       this.setState({ data:res.data.products });
   })
   .catch(err => {
       console.log(err);
   }); 

}

componentWillMount(){
 this.test()
}


changePrice = e => {
  e.preventDefault();
  this.setState({price:e.target.value})
}

changeBrand = e => {
  e.preventDefault();
  this.setState({brand:e.target.value})
}

changeText = e => {
  e.preventDefault();
  this.setState({text:e.target.value})
}
changefile = e=>{
  e.preventDefault();
  this.setState({file:e.target.files[0]})
}

addProducts=(e, close)=>{
  e.preventDefault();
  let token=localStorage.getItem('Admin-token');
   const url = "http://127.0.0.1:8000/api/products";
   const form_data = new FormData();
   form_data.append('name', this.state.brand);
   form_data.append('price', this.state.price);
   form_data.append('description', this.state.text);
   form_data.append('image', this.state.file);
  

  axios.post(url,form_data,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      }
    })
    .then((response) => {
      console.log("zz",response);
      // close();

      })
    .catch(err=>console.log("err",err))
          
    this.test() 
  }

render(){
  return(
    <>

    <Popup trigger={<button className="dash-board-button"> Add Products </button>} modal>
    {close => (
               <div className="addProducts">
    <form className="addProducts--Form">
    <label >Price</label>
    <input  type="text" name=""  onChange={e=>this.changePrice(e)}/>
    <label >Name of Brand</label>
    <input  type="text" name="" onChange={e=>this.changeBrand(e)} />
    <label >Text</label>
    <textarea type="text" name=""  onChange={e=>this.changeText(e)} />
    <label >Image</label>
    <input  type="file"  onChange={e=>this.changefile(e)}/>
    <div >
    <button className="button-cancel" onClick={() => {
            close();
          }}>Cancel</button>
    <button className="button-cancel" onClick={(e) => {
            this.addProducts(e, close)
            close();
            }}>Save</button>
                        
    </div>
    </form>
    </div>
    )}
  </Popup>



    <div className="Home-component">

  {this.state.data.length==0?"":this.state.data.map(products=>(

   <div className="card-Home-component">
  <img src={`http://localhost:8000/assets/img/${products.image}`} alt="Denim Jeans"className="image" style={{width:"100%" }}/>
  <h1>{products.name}</h1>
  <p className="price">{products.price}</p>
  <p>{products.description}</p> 

</div>

 )
)} 

    </div>
     
    </>
  )
}

}

export default withRouter(Home);