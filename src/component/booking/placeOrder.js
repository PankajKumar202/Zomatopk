import React, { Component } from "react";
import Header from "../Header";
import "./placeOrder.css";
const url = "https://zomatopk.herokuapp.com/menuItem";
const postData = "https://zomatopk.herokuapp.com/placeorder"
class PlaceOrder extends Component {
    constructor(props) {
        console.log("Inside place Constructer >>>>", props)
        super(props)
        let userData = sessionStorage.getItem('userInfo')
        let oAuthData = sessionStorage.getItem('oAuthname')
        let oAuthEmail = sessionStorage.getItem('uEmail')
        this.state = {
            id: Math.floor(Math.random() * 100000),
            Rest_name: this.props.match.params.restName,
            name: userData ? userData.split(',')[1] : '' || oAuthData,
            email: userData ? userData.split(',')[2] : '' || oAuthEmail,
            cost: 0,
            phone: userData ? userData.split(',')[3] : '',
            address: 'Hno 341',
            menuItem: ''
        }



    }
    addItem = (data) => {
        if (data) {
            // let data=sessionStorage.getItem('menu')
            // let dataarr=[]
            // data.split(',').map((item)=>{
            //     dataarr.push(parseInt(item))
            //     return 'ok'
            // })
            // console.log("Inside dataarr",dataarr)

        }





    }

    renderMenu = (data) => {

        // console.log("dataMenuItem>>>>", data)
        if (data) {
            return data.map((item) => {
                return (
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name} />
                        <h5>{item.menu_name}</h5>
                        <span>Rs.{item.menu_price}</span>
                        <button className="btn btn-success" style={{ marginLeft: '31%' }}  >
                            <i class="fa-solid fa-plus"></i>
                        </button>&nbsp;
                        <span>{item.menuItem}</span>
                        <button className="btn btn-danger" style={{ marginTop: '-29.5%', marginLeft: '80%' }}>
                            <i class="fa-solid fa-minus"></i>
                        </button>



                        {/* <div className="col-md-8">
                        {/* onClick={() => { this.addItem(item.menu_id) }} */}
                        {/* onClick={() => { this.removeItem(item.menu_id) }} */}

                        {/* </button> */}

                        {/* </div> */}
                    </div>
                )
            })
        }
    }
    handelChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    checkOut = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(postData, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            // .then(this.props.history.push('/viewBooking'));
            .then(console.log("Order Taken"))
    }
    render() {

        if (sessionStorage.getItem('loginStatus') === 'loggedOut') {
            return (
                <>
                    <Header />
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </>
            )
        }
        console.log("Inside place ORder>>>>", this.state)
        return (
            <>
                <Header />
                <div className="container">
                    <hr />
                    <div class="card">
                        <div class="card-header" style={{ backgroundColor: "green", color: "white" }}>
                            Your Orders From Restaurent <b>{this.props.match.params.restName}</b>
                        </div>
                        <div class="card-body">
                            <form action="https://zomatopkdummypayment.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost} />
                                <input type="hidden" name="id" value={this.state.id} />
                                <input type="hidden" name="Rest_name" value={this.state.Rest_name} />
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="fname">Name</label>
                                        <input id="fname" name="name" className="form-control" value={this.state.name} onChange={this.handelChange}></input>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="email">Email</label>
                                        <input id="email" name="email" className="form-control" value={this.state.email} onChange={this.handelChange}></input>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="phone">Phone</label>
                                        <input id="phone" name="phone" className="form-control" value={this.state.phone} onChange={this.handelChange}></input>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="address">Address</label>
                                        <input id="address" name="address" className="form-control" value={this.state.address} onChange={this.handelChange}></input>
                                    </div>

                                    {this.renderMenu(this.state.menuItem)}
                                </div>

                                <div className="row">
                                    <div className="col-md-12" >
                                        <center><h2>Total Price is Rs.{this.state.cost}</h2></center>
                                    </div>
                                </div>
                                
                                <center><button className="btn btn-success" onClick={this.checkOut} type="submit">Submit</button></center>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
    componentDidMount() {

        let menuItem = sessionStorage.getItem('menu')
        let orderId = []
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok';
        })
        console.log("Inside compon order", orderId)
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderId)
        })
            .then((res) => res.json())
            .then((data) => {
                let totalPrice = 0;
                let menuID=sessionStorage.getItem('menu').split(',');
                console.log(data)
                console.log("menuID>>",menuID)
                data.map((item) => {
                    console.log("item>>>",item.menu_id)

                        console.log("Inside menu price place>>",item.menu_price)
                        totalPrice +=parseFloat(item.menu_price);
                        return 'ok';
                    
                    // }else{
                    // totalPrice += parseFloat(item.menu_price)
                    // return 'ok';
                    // }
                    




                })
                this.setState({ cost: totalPrice, menuItem: data })
            })
    }

}
export default PlaceOrder;