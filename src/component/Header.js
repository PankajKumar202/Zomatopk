import React, { Component } from "react";
import "./Home.css";
// import "./Listing/Listing.css"
import { Link, withRouter } from "react-router-dom";
// Darkmode
const url = "https://zomatopkloginauth.herokuapp.com/api/auth/userInfo";
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: "",
            userName: "",
            userImg: ""
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus', 'loggedOut');
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        this.setState({ userData: '' })
        this.props.history.push("/")
    }
    // changeMode = () => {
    //     // var table=document.table;
    //     // table.classList.toggle("myDark");
    //     var myBody = document.body;
    //     myBody.classList.toggle("myDark");
    //     var cont = document.getElementsByClassName("container-fluid")[0];
    //     cont.classList.toggle("myCont");
    //     var Quick = document.getElementsByClassName("Quick-Heading")[0];
    //     Quick.classList.toggle("quickT");
    //     var Quick1 = document.getElementsByClassName("Quick-Subheading")[0];
    //     Quick1.classList.toggle("quickS");
    //     var logo = document.getElementsByClassName("logo")[0];
    //     logo.classList.toggle("myLogo");
    //     var heading = document.getElementsByClassName("heading")[0];
    //     heading.classList.toggle("myHeading");
    //     var item=document.getElementsByClassName("item")[0];
    //     item.classList.toggle("myItem")
        


        
    // }
    condtionalHeader = () => {



        if (this.state.userData.name || sessionStorage.getItem('uName') !== null) {
            if (sessionStorage.getItem('uName') !== null) {

                let oAuthArray = [sessionStorage.getItem('uName').toLowerCase().trim().split(' ')[0]]
                console.log("OAUth",oAuthArray)
                sessionStorage.setItem('oAuthname', oAuthArray);
                let name = sessionStorage.getItem('uName');
                let image = sessionStorage.getItem('uImg');
                sessionStorage.setItem('loginStatus', 'loggedin')
                return (
                    <div className="navbar-nav">
                        <img src={image} alt="git" style={{ height: 67,width: 75 }} />
                        <Link className="nav-link active" to={"/"}><span className="glyphicon glyphicon-user"></span>&nbsp;Hi {name}</Link>
                        <Link className="nav-link active" onClick={this.handleLogout}><span className="glyphicon glyphicon-log-out">Logout</span>
                        </Link>

                        

                    </div>
                )

            } else {
                let data = this.state.userData;
                let outArray = [data._id, data.name.toLowerCase().trim().split(' ')[0], data.email, data.phone, data.role];
                sessionStorage.setItem('userInfo', outArray)
                sessionStorage.setItem('loginStatus', 'loggedin')
                return (
                    <div className="navbar-nav">
                        <Link className="nav-link active" to={"/"}><span className="glyphicon glyphicon-user">Hi {data.name}</span></Link>
                        <Link className="nav-link active" onClick={this.handleLogout}><span className="glyphicon glyphicon-log-out">Logout</span></Link>

                        {/* <img src="https://i.ibb.co/r5pqFg8/night.png" id="dark" onClick={()=>this.changeMode} alt="night" border="0" width="20%" height="auto" /> */}

                    </div>
                )

            }
        }
        else {
            return (


                <div className="navbar-nav">
                    <a href="https://github.com/login/oauth/authorize?client_id=5c1f4461fd560fd177d4" className="nav-link active"> Login With Github</a>
                    <Link className="nav-link active" to={"/login"}>Login</Link>
                    <Link className="nav-link active" to={"/register"}>Signup</Link>

                   

                </div>


            )
        }
    }
    render() {
        return (
         
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">Zomato</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            {this.condtionalHeader()}
                        </div>
                    </div>


                </nav>
           
        )
    }
    componentDidMount() {
        sessionStorage.setItem('loginStatus','');
        console.log("Inside header >>>>", this.props.location.search)
        if (this.props.location.search) {
            if (this.props.location.search.split('=')[0] === '?code') {
                var code = this.props.location.search.split('=')[1];
                if (code) {
                    let requestData = {
                        code: code
                    }
                    fetch('https://oauthgit.herokuapp.com/oauth', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestData)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(">>>Data", data)
                            let userName = data.name;
                            let email = data.login;
                            let Img = data.avatar_url;
                            sessionStorage.setItem('uName', userName)
                            sessionStorage.setItem('uImg', Img)
                            sessionStorage.setItem('uEmail', email)
                            // sessionStorage.setItem('uImg',Img)
                            this.setState('loginStatus', 'loggedin')
                        })
                }
            }
        }
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ userData: data })
            })
    }
}

export default withRouter(Header);
