import React, { Component } from "react";
import MenuDisplay from "./menuDisplay";
import "./details.css";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import Header from "../Header";
const url = "https://zomatopk.herokuapp.com/restaurent";
const menuUrl = "https://zomatopk.herokuapp.com/Menu";
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: "",
            menuList: "",
            userItem: "",
            mealId: sessionStorage.getItem('mealid')
        }

    }
    addToCart = (data) => {
        console.log(">>>>", data)
        this.setState({ userItem: data });
    }
    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }
  
    render() {

    //    console.log("Inside render restdetails",this.state.details.restaurant_name)
        let imagesCarousal = () => {
            if (this.state.details.image_gallery) {
                return (
                    this.state.details.image_gallery.map((index) => {
                        return (
                            <div class="carousel-item  imageClass" key={index.restaurant_id}>
                                <img src={index} class="d-block w-100" alt="..." />
                            </div>


                        )
                    }))
            }
        }
        let { details } = this.state;
        return (
            <>
            <Header/>
                <div className="main">
                    <div className="tileImage">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active imageClass" >
                                <img src={details.restaurant_thumb} class="d-block w-100" alt="..." />
                            </div>

                                {imagesCarousal()}
                               
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>
                    <div className="tileContent">
                        <h1 >{details.restaurant_name}</h1>
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
                                <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger" style={{ marginTop: "1%" }}>
                                    Back
                                </Link>&nbsp;
                                <Link className="btn btn-primary" style={{ marginTop: "1%" }} onClick={this.proceed}>
                                    Proceed
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
                <MenuDisplay menuData={this.state.menuList}
                    finalOrder={(data) => { this.addToCart(data) }} />
            </>

        )
    }
    async componentDidMount() {
        console.log("inside Componentdidmount>>>", this.props.location.search)
        let restid = this.props.location.search.split('=')[1];

        let response = await axios.get(`${url}/${restid}`);
        let mealData = await axios.get(`${menuUrl}/${restid}`);
        console.log("Inside comp did mont response >>>", response.data[0])
        console.log("Inside comp did mont response >>>", mealData.data)
        this.setState({ details: response.data[0], menuList: mealData.data })
    }

}
// componentDidMount(){
//     console.log("Inside ComponentDidMount>>>>>>")
//     fetch(locurl,{method:'GET'})
//     .then((res)=>res.json())
//     .then((data)=>{
//       console.log(data)
//       this.setState({location:data})
//     })
//     }
//   }
export default Details;