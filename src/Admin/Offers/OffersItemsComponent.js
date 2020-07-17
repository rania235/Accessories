// import React, { Component } from 'react';
// import './OffersItemsComponent.scss';
// import Popup from "reactjs-popup";
// import index from '../AdminImages/image.jpg';


// export default class OffersItemsComponent extends Component {
//   constructor(){
//     super(props)
//     this.state = {
//       Offers:[],
//       name:'',
//     description:'',
//     image:'',
//     price:'',
//     data:[]
//     }
//   }

//   changePrice = e => {
//     e.preventDefault();
//     this.setState({price:e.target.value})
//   }

//   changeStartDate=e => {
//     e.preventDefault();
//     this.setState({start_date:e.target.value})
//   }
//   changeEndDate=e=>{
//     e.preventDefault();
//     this.setState({end_date:e.target.value})
//   }
//   changedescription=e=>{
//     e.preventDefault();
//     this.setState({description:e.target.value})
//   }
//   changefile = e=>{
//     e.preventDefault();
//     this.setState({file:e.target.files[0].name})
//   }

//   addProducts=(e)=>{
//     e.preventDefault();
//     let token=localStorage.getItem('Admin-token');
//      const url = "http://127.0.0.1:8000/api/products";
//     const body = {
//       name:this.state.brand,
//       price:this.state.price,
//       description:this.state.text,
//       image:this.state.file,
//       start_date:this.state.start_date,
//       end_date:this.state.end_date
      
//     }
  
//     axios.post(url,body,
//       {headers:{
//         'Authorization': 'Bearer ' + token
//       }}).then((response)=>{
//             }).catch(err=>console.log("err",err))
//             this.test() 
//     }

//     test=()=>{
//       let token=localStorage.getItem('Admin-token');
//       axios.get(`http://127.0.0.1:8000/api/products/`, {
//        headers: {
//            'Content-Type': 'application/json',
//            'Accept': 'application/json',
//             'Authorization': 'Bearer ' + token
    
//        }
//     })
//        .then(res => {
//            this.setState({ data:res.data.products });
//        })
//        .catch(err => {
//            console.log(err);
//        }); 
    
//     }
// render(){
//   return(
    
//     <>
//     <Popup trigger={<button className="dash-board-button"> Add Offers</button>}
//         modal
//         closeOnDocumentClick
//         >
//         <div className="addProducts">
//         <form className="addProducts--Form">
//         <label >Price:</label>
//         <input  type="text" name="" onChange={e=>this.changePrice(e)}/>
//         <label >Name of Brand:</label>
//         <input  type="text" name="" />
//         <label for="birthday">Start_Date:</label>
//         <input type="date" id="Start_Date" name="Start_Date" onChange={e=>this.changeStartDate(e)} /> 
//         <label for="birthday">End_Date:</label>
//         <input type="date" id="End_Date" name="End_Date" onChange={e=>this.changeEndDate(e)}/> 
//         <label >description:</label>
//         <textarea type="text" name=""  onChange={e=>this.changedescription(e)}/>
//         <label >Image:</label>
//         <input  type="file" onChange={e=>this.changefile(e)}/>
//         <div >
//         <button  onClick={(e)=>this.addProducts(e)}>Save</button>
//         <button >Cancel</button>
//         </div>
//         </form>
//         </div>
//         </Popup>


//         <div className="offer-component">
//        <div className="card-Home-component">
//       <img src={index} alt="Denim Jeans"className="image" style={{width:"100%" }}/>
//       <h1>Tailored Jeans</h1>
//       <p className="price">$19.99</p>
//       <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
    
//     </div>
    
    
    
    
    
//         </div>
         
//         </>
    
//   )
// }
// }
    


          
         
