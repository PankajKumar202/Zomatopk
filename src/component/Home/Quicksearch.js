import React,{Component} from "react";
import QuickDisplay from "./QuickDisplay";
import "../Home.css";
const url="https://zomatopk.herokuapp.com/quickSearch";
class QuickSearch extends Component{
    constructor(){
    super()
    this.state={
        mealType:""
    }
    }
render(){
  return(
    <>
        <div id="QuickSearch">
        <span className="Quick-Heading">
            Quick Search
        </span>
        <span className="Quick-Subheading">
            Discover Restaurant's By Meal's
        </span>
        <QuickDisplay mealData={this.state.mealType}/>
        </div>
      
    </>
  )
}
//api on page load
componentDidMount(){
    fetch(url,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        this.setState({mealType:data})
    })
}
}

export default QuickSearch;