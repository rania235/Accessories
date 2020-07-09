import React, {Component} from 'react';
import './OfferPageComponent.scss';
import Acc10 from '../../Images/acc10.jpg';

class OfferPageComponent extends Component {
    constructor(props){
        super(props)
        this.state={
          description:'',
          name:'',
          price:0,
          data:[],
          start_date:'',
          end_date:'',
          image:''
        }
      }
  render(){
    return( 
         
      
<div className="OfferPageComponent">
    <div class="demo">

        <div class="demo__div people">
            <div class="people__div people__div--img">
                <img src={Acc10} alt="" class="people__img"/>
            </div>
            <div class="people__div people__div--info">
                <h2 class="people__name">20$</h2>
                <p class="people__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="card-button-add">Add To +</button>
            </div>
            <div class="people__div people__div--name">
                <h2 class="people-name">A Necklace</h2>
            </div>
        </div>          

        
    </div>

























































































































      
{/* <div class="container-product">
      
  <img src={Acc3} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                    <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc5} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc9} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc7} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc10} alt="Snow" style={{width:"100%"}}/>
  <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div>

<div class="container-product">
  <img src={Acc2} alt="Snow" style={{width:"100%"}}/>
 <Popup trigger={<button className="btn"> View Picture</button>}
                     modal
                     closeOnDocumentClick
                      >
                 <div className="descrption">
                 <p className="descrption1">Price:20$</p>
                    <p>NewPrice:10$</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 
                       1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book.</p>
                       <button className="btn1">Buy This product</button>
                  </div>
                </Popup>
</div> */}
</div>
       
    )
  }
}

export default OfferPageComponent;