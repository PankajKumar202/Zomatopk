import React, { Component } from "react";
import axios from "axios";
import './filter.css';
import { Link } from "react-router-dom";
const url = "https://zomatopk.herokuapp.com/filter";
class Cuisinefilter extends Component {
    filterCuisine = (event) => {
        let cuisineId = event.target.value;
        let mealId = this.props.mealId;
        let cuisineUrl = ""
        if (cuisineId === "") {
            cuisineUrl = `${url}/${mealId}`
        } else {
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
            .then((res) => { this.props.restPerCuisine(res.data) })
    }
    render() {
        return (
            <>
                <center> Cuisine Filter</center>
                <div style={{ marginLeft: '10%' }} onChange={this.filterCuisine}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine" /> All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine" /> BreakFast

                    </label>
                    <label className="radio" >
                        <input type="radio" value="2" name="cuisine" /> Lunch
                    </label>
                    <label className="radio" >
                        <input type="radio" value="3" name="cuisine" /> Dinner
                    </label>
                    <label className="radio" >
                        <input type="radio" value="4" name="cuisine" /> Fast Food
                    </label>
                    <label className="radio" >
                        <input type="radio" value="5" name="cuisine" /> Street Food
                    </label>
                   
                </div>
                {/* <div class="dropdown" onChange={this.filterCuisine}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Cuisine Filter
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link class="dropdown-item" href="#">All</Link></li>
                        <li><Link class="dropdown-item" href="#">BreakFast</Link></li>
                        <li><Link class="dropdown-item" href="#">Lunch</Link></li>
                        <li><Link class="dropdown-item" href="#">Dinner</Link></li>
                        <li><Link class="dropdown-item" href="#">Fast Food</Link></li>
                        <li><Link class="dropdown-item" href="#">Street Food</Link></li>
                    </ul>
                </div> */}
              
            </>
        )
    }
}
export default Cuisinefilter;