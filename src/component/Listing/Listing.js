import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import Header from '../Header';
import './Listing.css';
import Cuisinefilter from '../Filter/cuisineFilter';
import Costfilter from '../Filter/costFilter';
import Sortfilter from '../Filter/sortFilter';
// import CuisineFilter from '../filters/CuisineFilter'
// import CostFilter from '../filters/CostFilter';
// import SortFilter from '../filters/SortFilter'

const url = "https://foodscapee.herokuapp.com/restaurants?mealtype_id="

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantList: ''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({ restaurantList: data })
    }

    render() {
        return (
            <>
                <Header />
                <div className="row" id="ListingComp1">
                <div className='modalContainer'>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{marginLeft:"5%"}}>
                            Filter
                        </button>

                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Filter</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <Cuisinefilter mealId={this.props.match.params.mealId} restPerCuisine={(data) => { this.setDataPerFilter(data) }} />
                                        <Costfilter mealId={this.props.match.params.mealId} restPerCost={(data) => { this.setDataPerFilter(data) }} />
                                        <Sortfilter mealId={this.props.match.params.mealId} restPerSort={(data) => { this.setDataPerFilter(data) }} />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Understood</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mainListing">
                        
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                            &nbsp;
                            <Cuisinefilter mealId={this.props.match.params.mealId}
                                restaurantPerCuisine={(data) => { this.setDataPerFilter(data) }} />

                            <Costfilter mealId={this.props.match.params.mealId}
                                restaurantPerCost={(data) => { this.setDataPerFilter(data) }} />

                            <Sortfilter mealId={this.props.match.params.mealId}
                                restaurantPerSort={(data) => { this.setDataPerFilter(data) }} />
                        </div>
                        <ListingDisplay listData={this.state.restaurantList} />
                    </div>
                    

                </div>
            </>
        )
    }

    componentDidMount() {
        let mealid = this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealid)
        axios.get(`${url}${mealid}`)
            .then((res) => {
                this.setState({ restaurantList: res.data });
            })
    }
}

export default Listing
