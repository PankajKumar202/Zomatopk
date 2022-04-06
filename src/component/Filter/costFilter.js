import React, { Component } from "react";
import axios from "axios";
import './filter.css';
const url="https://zomatopk.herokuapp.com/filter";
class Costfilter extends Component{
    filterCost=(event)=>{
        
        let mealId=this.props.mealId;
        let cost=(event.target.value).split('-');
        let lcost=cost[0];
        let hcost=cost[1];
        let costUrl=""
        if(cost===""){
            costUrl=`${url}/${mealId}`
        }else{
            costUrl=`${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res)=>{this.props.restPerCost(res.data)})
    }
    render(){
        return(
        <>
            <center> Costfilter</center>
            <div style={{marginLeft:'10%'}}  onChange={this.filterCost}>
            <label className="radio">
                        <input type="radio" value="" name="cuisine"/> All
                    </label>
                <label className="radio">
                    <input type="radio" value="100-300" name="cuisine"/> 100-300

                </label>
                <label className="radio" >
                    <input type="radio" value="301-500" name="cuisine"/> 301-500
                    </label>
                <label className="radio" >
                    <input type="radio" value="501-700" name="cuisine"/> 501-700
                </label>
                <label className="radio" >
                    <input type="radio" value="701-900" name="cuisine"/> 701-900
                </label>
                <label className="radio" >
                    <input type="radio" value="901-1500" name="cuisine"/> 901-1500
                </label>
            </div>
        </>
        )
    }
}
export default Costfilter;