import React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
// import Header from "./Header";
import Footer from "./Footer";
import Details from "./details/restDetails";
import Listing from "./Listing/Listing";
import Home from "./Home/Home";
import PlaceOrder from "./booking/placeOrder";
import ViewOrder from "./booking/viewOrder";
// import ViewOrders from "./booking/viewOrder";
import Login from "../login/logout/login";
import Register from "../login/logout/register";
const Router=()=>{
    return(
        <BrowserRouter>
        {/* <div> */}
            
                <Route exact path="/" component={Home}></Route>
                <Route  path="/listing/:mealId" component={Listing}></Route>
                <Route  path="/details" component={Details}></Route>
                <Route path="/viewBooking" component={ViewOrder}></Route>
                <Route path="/placeOrder/:restName" component={PlaceOrder}></Route>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>


            
        {/* </div> */}
        <Footer/>
        </BrowserRouter>
    )
}
export default Router;