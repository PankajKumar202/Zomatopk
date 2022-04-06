import React, { Component } from "react";
import "./placeOrder.css";
import axios from "axios";
// import { withRouter } from "react-router-dom";
import BookingDisplay from "./orderDisplay";
import Header from "../Header";
const url = "https://zomatopk.herokuapp.com/orders"

class ViewOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: '',
            

        }
    }
    render() {
    

        // console.log("Inside render vieworder", this.props.location)
        console.log("Inside render vieworder state", this.state.email)

        
        // console.log("Inside Component did mount viw order", this.state.orders)
        if (sessionStorage.getItem('loginStatus') === 'loggedOut') {
            return (
                <>
                    <Header />
                    <center><h2>Login First To Checkout View Orders</h2></center>
                </>
            )
        }
        else {
            return (
                <>
                    <Header />
                    <BookingDisplay orderData={this.state.orders} />

                </>
            )
        }
    }
    componentDidMount() {

        if (this.props.location) {
            let queryParam = this.props.location.search;
            if (queryParam) {
                let data = {
                    "status": queryParam.split('&')[0].split('=')[1],
                    "date": queryParam.split('&')[2].split('=')[1],
                    "bank_name": queryParam.split('&')[3].split('=')[1]
                }
                let id = queryParam.split('&')[1].split('=')[1].split('_')[1];

                console.log("Inside fetch", id)

                fetch(`${url}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    // .then((res )=> {    console.log("Inside res status",res.status);     return res.json() })
                    //   .then((data) => console.log(data))
                    // .then((res)=>res.json())
                    // .then((data)=>{
                    //     this.setState({fullOrder:data})
                    // })


                })
                   

            }

        }  
        if(sessionStorage.getItem('uName') !==null){
            let email = sessionStorage.getItem('uEmail');
            
            axios.get(`${url}?email=${email}`).then((res) => {
                console.log(res.data)
                this.setState({ orders: res.data })
            })
        }else{
            let email = sessionStorage.getItem('userInfo').split(',')[2];
            
            axios.get(`${url}?email=${email}`).then((res) => {
                console.log(res.data)
                this.setState({ orders: res.data })
            })
        }


    
            
        
       

    }
}
export default ViewOrder;