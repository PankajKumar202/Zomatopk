import React, { Component } from "react";
import axios from "axios";
import './filter.css';
const url="https://zomatopk.herokuapp.com/filter";
class Sortfilter extends Component{
    filtersort=(event)=>{
        console.log("Inside filtersort>>>",this.props.mealId)
        let mealId=this.props.mealId;
        let sort=event.target.value;
 
        let sortUrl=""
        if(sort===""){
            sortUrl=`${url}/${mealId}`
        }else{
            sortUrl=`${url}/${mealId}?sort=${sort}`
        }
        axios.get(sortUrl)
        .then((res)=>{this.props.restPerSort(res.data)})
    }
    render(){
        return(
        <>
            <center> Sort filter</center>
            <div style={{marginLeft:'10%'}}  onChange={this.filtersort}>
            
                <label className="radio">
                    <input type="radio" value="" name="cuisine"/> Low to High

                </label>
                <label className="radio" >
                    <input type="radio" value="-1" name="cuisine"/> High to Low
                    </label>
               
            </div>
        </>
        )
    }
}
export default Sortfilter;