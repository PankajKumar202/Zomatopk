import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import ListingDisplay from './ListingDisplay';
import "./Listing.css";

import Cuisinefilter from '../Filter/cuisineFilter';
import Costfilter from '../Filter/costFilter';
import Sortfilter from '../Filter/sortFilter';
import Footer from '../Footer';
const restUrl = "https://zomatopk.herokuapp.com/restaurent?mealtype_id=&state_id=";
class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurentList: ""
        };
    }
    setDataPerFilter = (data) => {
        this.setState({ restaurentList: data })
    }
    listingDark=(data)=>{
      if(data){
          return data.map((item,index)=>{
            
                let restName1=document.getElementsByClassName('rest_name')[index];
                restName1.classList.toggle('myRestName');
               return(
                    <>
                    </>
               )
               
        
          })
      
      }
 


    }
    render() {
        console.log("Inside render listing js", this.state.restaurentList.mealTypes)

        return (
            <>
                <Header otherDark={()=>{this.listingDark(this.state.restaurentList)}} />
                <div className='row'>
                    <div id="mainListing">

                        <div className='filter-Container'>
                            <center>
                                <h3>Filter</h3>
                            </center>
                            <Cuisinefilter mealId={this.props.match.params.mealId} restPerCuisine={(data) => { this.setDataPerFilter(data) }} />
                            <Costfilter mealId={this.props.match.params.mealId} restPerCost={(data) => { this.setDataPerFilter(data) }} />
                            <Sortfilter mealId={this.props.match.params.mealId} restPerSort={(data) => { this.setDataPerFilter(data) }} />
                        </div>
                        <div className='modalContainer'>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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




                        <ListingDisplay listData={this.state.restaurentList} />
                    </div>
                </div>
             
            </>
        )
    }
    //compdid
    componentDidMount() {
        let mealid = this.props.match.params.mealId;
        sessionStorage.setItem('mealid', mealid);
        axios.get(`${restUrl}${mealid}`)

            .then((res) => {
                console.log(">>>", res.data)
                this.setState({ restaurentList: res.data })
            })
    }
}
export default Listing;