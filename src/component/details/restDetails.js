import React, { Component } from "react";
import MenuDisplay from "./menuDisplay";
import "./details.css";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
const url = "https://zomatopk.herokuapp.com/restaurent";
const menuUrl = "https://zomatopk.herokuapp.com/Menu";
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: "",
            menuList: "",
            userItem: "",
            mealId:sessionStorage.getItem('mealid')
        }
    }
    addToCart=(data)=>{
        console.log(">>>>",data)
        this.setState({userItem:data});
    }
    proceed=()=>{
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }
    render() {
        console.log("Inside render>>>", this.state.details)
        let { details } = this.state;
        return (
            <>
                <div className="main">
                    <div className="tileImage">

                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt="" />
                        </div>
                    </div>
                    <div className="tileContent">
                        <h1>{details.restaurant_name}</h1>
                        <span id="cfeedback">295 Customer Review</span>
                        <h4>Old Price <strike>Rs. 1200</strike></h4>
                        <h4>New Price Rs. {details.cost} </h4>
                        <h3>We Kill Your Hungry Birds</h3>
                        <div>
                            <div className="icons">
                                <img src="/images/sanitised.jpg" />
                            </div>
                        </div>
                        <div>
                            <div className="man">
                                <img src="/images/man.png" />
                            </div>
                            <div className="TabList">
                                <Tabs>
                                    <TabList>
                                        <Tab>Description</Tab>
                                        <Tab>Contact Us</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h2>{details.restaurant_name}</h2>
                                        <b>{details.restaurant_name} </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae 
                                        
                                    </TabPanel>
                                    <TabPanel>
                                        <h4>{details.address}</h4>
                                        <h4>{details.contact_number}</h4>
                                    </TabPanel>
                                </Tabs>
                                <Link to={`/listing/${this.state.mealId}`}className="btn btn-danger" style={{marginTop:"1%"}}>
                                    Back
                                </Link>&nbsp;
                                <Link to="#" className="btn btn-primary" style={{marginTop:"1%"}}>
                                   Proceed
                                </Link>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <MenuDisplay menuData={this.state.menuList} 
                finalOrder={(data)=>{this.addToCart(data)}}/>
            </>

        )
    }
    async componentDidMount() {
        // console.log("inside Componentdidmount>>>", this.props.location.search)
        let restid = this.props.location.search.split('=')[1];

        let response = await axios.get(`${url}/${restid}`);
        let mealData = await axios.get(`${menuUrl}/${restid}`);
        this.setState({ details: response.data[0], menuList: mealData.data })
    }
}
export default Details;