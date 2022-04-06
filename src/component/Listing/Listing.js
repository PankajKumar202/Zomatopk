import React,{Component} from 'react';
import axios from 'axios';
import Header from '../Header';
import ListingDisplay from './ListingDisplay';
import "./Listing.css";

import Cuisinefilter from '../Filter/cuisineFilter';
import Costfilter from '../Filter/costFilter';
import Sortfilter from '../Filter/sortFilter';

const restUrl="https://zomatopk.herokuapp.com/restaurent?mealtype_id=&state_id=";
class Listing extends Component{
    constructor(props){
        super(props);
        this.state={
            restaurentList:""
        };
    }
    setDataPerFilter=(data)=>{
        this.setState({restaurentList:data})
    }
    render(){
        console.log("Inside render listing js",this.state.restaurentList.mealTypes)
        
        return(
            <>   
                <Header/>
                <div className='row'>
                    <div id="mainListing">
                    
                            <div className='filter-Container'>
                            <center>
                            <h3>Filter</h3>
                            </center>
                            <Cuisinefilter mealId={this.props.match.params.mealId} restPerCuisine={(data)=>{this.setDataPerFilter(data)}}/>
                            <Costfilter mealId={this.props.match.params.mealId} restPerCost={(data)=>{this.setDataPerFilter(data)}}/>
                            <Sortfilter mealId={this.props.match.params.mealId} restPerSort={(data)=>{this.setDataPerFilter(data)}}/>
                            </div>
                            
                            
                            
                        
                        <ListingDisplay listData={this.state.restaurentList} />
                    </div>
                </div>
            </>
        )
    }
    //compdid
    componentDidMount(){
        let mealid= this.props.match.params.mealId;
        sessionStorage.setItem('mealid',mealid);
        axios.get(`${restUrl}${mealid}`)

        .then((res)=>{
            console.log(">>>",res.data)
            this.setState({restaurentList:res.data})})
    }
}
export default Listing;