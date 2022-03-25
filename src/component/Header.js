import React,{Fragment} from "react";
import "./Home.css";
// import "./Listing/Listing.css"
import { Link } from "react-router-dom";
// Darkmode
function changeMode(props) {
    var myBody = document.body;
    myBody.classList.toggle("myDark");
    var cont=document.getElementsByClassName("container-fluid")[0];
    cont.classList.toggle("myCont");
    var Quick=document.getElementsByClassName("Quick-Heading")[0];
    Quick.classList.toggle("quickT");
    var Quick1=document.getElementsByClassName("Quick-Subheading")[0];
    Quick1.classList.toggle("quickS");
    var logo=document.getElementsByClassName("logo")[0];
    logo.classList.toggle("myLogo");
    var heading=document.getElementsByClassName("heading")[0];
    heading.classList.toggle("myHeading");

}
const Header=()=>{
    return(
    <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Zomato</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to={"#"}>Login</Link>
                    <Link className="nav-link active" to={"#"}>Signup</Link>
                   
                    <img src="https://i.ibb.co/r5pqFg8/night.png" id="dark"  onClick={changeMode} alt="night" border="0" width="20%" height="auto"/>

                </div>
            </div>
        </div>


    </nav>
    </Fragment>
    )
}

export default Header;