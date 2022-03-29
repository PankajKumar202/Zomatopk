import React,{Component} from "react";
import "../Home.css";
import { withRouter } from "react-router-dom";
const locurl="https://zomatopk.herokuapp.com/location";
const resurl="https://zomatopk.herokuapp.com/restaurent?state_id=";
// required js 
function closeDiv(){
  document.getElementById("coupon").style.visibility="hidden";
}
// function test(){
//   document.getElementById("coupon").style.visibility="visible";
// }

// const myTimeout=setTimeout(greeting,1000);
// function greeting(){
  
//   document.getElementById("coupon").style.visibility="visible";
// }

function copyClip(){
  var code=document.getElementById("Copy");
  code.select();
  code.setSelectionRange(0,20);
  document.execCommand("copy");
  document.getElementById("btn").style.backgroundColor="green";
  document.getElementById("btn").innerHTML="Copied";
  document.getElementById("Output").innerHTML=`'TRYNEW Copied And Save Everytime in your order Yay!'`;
  document.getElementById("Output").style.color="green";


  
}


class Search extends Component{
  constructor(props){
    super(props)
    console.log("inside Constructer>>>>>")
    this.state={
      location:"",
      resData:""
    }
  }
  renderCity=(data)=>{
 
      if(data){
        return data.map((item)=>{
          return(
            <option value={item.state_id} key={item.state_id}>{item.state}</option>
          )
        })
      }
      
    
  }
  renderRes=(data)=>{
   
      if(data){
        return data.map((item)=>{
          return(
            <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
          )
        })
      }
      
    
  }
  handleCity=(event)=>{
    console.log("inside handle1",event)
    let stateId=event.target.value;
    console.log("insidehandlecity>>>",stateId)
    fetch(`${resurl}${stateId}`,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({resData:data})
    })
  }
  handleRest = (event) => {
    console.log("inside handleRest >>>",this.props)
    let restId = event.target.value;
    this.props.history.push(`/details?restId=${restId}`)
}
render(){
  console.log("inside render>>>>>>>>",this.state.location)
  return(
    <>
      {/* <h2>Search Page</h2> */}
      {/* <!-- carousal --> */}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                 < img  src="https://i.ibb.co/Njn0vFR/hot-pot-2426889-1920.jpg" className="d-block w-100 homeImage" alt="..."/>
            </div>
            <div className="carousel-item">
                <img   src="https://i.ibb.co/BKZtjR6/food-3297633-1920.jpg" className="d-block w-100 homeImage" alt="..."/>
            </div>
            <div className="carousel-item ">
                <img   src="https://i.ibb.co/my4rZ38/food-909476-1920.jpg" className="d-block w-100 homeImage" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        {/* <!-- logo and dynamic --> */}
        <div id="logo" className="logo">

            <span>P.K</span>
           
        </div>
        
            <div className="heading">
                Find the best restaurants, cafés, and bars
            </div>
        
        
        <div className="dropdown">
        <select id="city" onChange={this.handleCity}>
             <option>----SELECT CITY----</option>
             {this.renderCity(this.state.location)}
        </select>
        <select className="restaurant" id="hotels" onChange={this.handleRest}>
            <option>----SELECT RESTAURANT'S----</option>
            {this.renderRes(this.state.resData)}
            {/* {this.handleRest(this.state.resData)} */}

        </select>
    </div>



    <div id="coupon">
        <div className="coupon">
            <button onClick={closeDiv}  >&times;</button>
            <img src="https://i.ibb.co/VTTrsKR/BANNER10-22-1605879814.jpg" alt=""/>

            

            <div className=" inside1">
                <input id="Copy" type="text" value="TRYNEW345" readOnly/>
                <button type="button" id="btn" className="btn btn-danger" onClick={copyClip}>Copy</button>
                <p className="fs-6 text-center " id="Output"></p>
            </div>
            
            
        </div>
    </div>

    </div>


    </>
  )
}
componentDidMount(){
  console.log("Inside ComponentDidMount>>>>>>")
  fetch(locurl,{method:'GET'})
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    this.setState({location:data})
  })
  }
}
//to call an api on page load

export default withRouter(Search);