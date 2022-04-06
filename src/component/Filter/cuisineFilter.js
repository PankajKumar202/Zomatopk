import React, { Component } from "react";
import axios from "axios";
import './filter.css';
const url="https://zomatopk.herokuapp.com/filter";
class Cuisinefilter extends Component{
    filterCuisine=(event)=>{
        let cuisineId=event.target.value;
        let mealId=this.props.mealId;
        let cuisineUrl=""
        if(cuisineId===""){
            cuisineUrl=`${url}/${mealId}`
        }else{
            cuisineUrl=`${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
        .then((res)=>{this.props.restPerCuisine(res.data)})
    }
    render(){
        return(
        <>
            <center> Cuisine Filter</center>
            <div style={{marginLeft:'10%'}}  onChange={this.filterCuisine}>
            <label className="radio">
                        <input type="radio" value="" name="cuisine"/> All
                    </label>
                <label className="radio">
                    <input type="radio" value="1" name="cuisine"/> BreakFast

                </label>
                <label className="radio" >
                    <input type="radio" value="2" name="cuisine"/> Lunch
                </label>
                <label className="radio" >
                    <input type="radio" value="3" name="cuisine"/> Dinner
                </label>
                <label className="radio" >
                    <input type="radio" value="4" name="cuisine"/> Fast Food
                </label>
                <label className="radio" >
                    <input type="radio" value="5" name="cuisine"/> Street Food
                </label>
            </div>
        </>
        )
    }
}
export default Cuisinefilter;