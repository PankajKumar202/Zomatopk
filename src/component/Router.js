import React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Details from "./details/restDetails";
import Listing from "./Listing/Listing";
import Home from "./Home/Home";
import ViewOrders from "./booking/viewOrder";
import PlaceOrders from "./booking/viewOrder";
import ViewOrders from "./booking/viewOrder";
const Router=()=>{
    return(
        <BrowserRouter>
        <div>
            <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route  path="/listing/:mealId" component={Listing}></Route>
                <Route  path="/details" component={Details}></Route>
                <Route path="/viewBooking" component={ViewOrders}></Route>
                <Route path="/placeOrder/" component={PlaceOrders}></Route>
             


            <Footer/>
        </div>
        </BrowserRouter>
    )
}
export default Router;