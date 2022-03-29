import React, { Component } from "react";
import axios from "axios";
const url="https://zomatopk.herokuapp.com/filter/2?cuisine=3";
class Cuisinefilter extends Component{
    render(){
        return(
        <>
            <center> Cuisine Filter</center>
            <div style={{display:'flex'}}>
                <label className="radio">
                    <input type="radio" value="" name="cuisine"/>All

                </label>
                <label className="radio">
                    <input type="radio" value="" name="cuisine"/>All
                </label>
            </div>
        </>
        )
    }
}
export default Cuisinefilter;