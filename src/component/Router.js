import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Home/search";
import QuickSearch from "./Home/Quicksearch";
const Router=()=>{
    return(
        <BrowserRouter>
        <div>
            <Header/>
            <Search/>
            <QuickSearch/>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}
export default Router;