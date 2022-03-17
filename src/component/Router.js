import React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

import Listing from './component/Listing/Listing';
import Home from "./Home/Home";
const Router=()=>{
    return(
        <BrowserRouter>
        <div>
            <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route  path="/listing/:mealId" component={Listing}></Route>

            <Footer/>
        </div>
        </BrowserRouter>
    )
}
export default Router;