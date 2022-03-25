import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import "./Listing.css"
const restUrl="https://zomatopk.herokuapp.com/restaurent?mealtype_id=&state_id=";
class Listing extends Component{
    constructor(props){
        super(props);
        this.state={
            restaurentList:""
        };
    }
    render(){
        return(
            <>
                <div className='row'>
                    <div id="mainListing">
                            <div className='filter-Container'>
                            <center>
                            <h3>Filter</h3>
                            </center>
                            </div>
                            
                            
                            
                        
                        <ListingDisplay listData={this.state.restaurentList}/>
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