
import React, { Fragment } from "react";
import "./orderDisplay.css";
const BookingDisplay = (props) => {
    console.log("Inside BookinDisplay", props)
    const renderTable = ({ orderData }) => {
        console.log("orderdata", orderData)
        if (orderData) {
            return orderData.map((item) => {
                return (
                    <Fragment>
                        <tr key={item._id} className="orderTable">
                            <td>{item.id}</td>
                            <td>{item.Rest_name}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.menuItem}</td>
                            <td>{item.email}</td>
                            <td>{item.cost}</td>
                            <td>{item.address}</td>
                            <td>{item.date}</td>
                            <td>{item.status}</td>
                            <td>{item.bank_name} Bank</td>


                        </tr>
                        <div id="orderBox" key={item.id} style={{border:"3px solid black"}}>
                            <span><b>Order ID :</b> {item.id}</span><br />
                            <span><b>Restaurent Name :</b> {item.Rest_name}</span><br />
                            <span><b>User Name :</b> {item.name}</span><br />
                            <span><b>Phone :</b> {item.phone}</span><br />
                            <span><b>MenuItemID :</b> {item.menuItem}</span><br />
                            <span><b>Email :</b> {item.email}</span><br />
                            <span><b>Cost :</b> {item.cost}</span><br />
                            <span><b>Address :</b> {item.address}</span><br />
                            <span><b>Date :</b> {item.date}</span><br />
                            <span><b>Status :</b> {item.status}</span><br />
                            <span><b>Bank Name :</b> {item.bank_name} Bank</span><br />
                            <hr/>

                        </div>
                    </Fragment>


                )
            })
        }
    }
    return (
        <div className="Container">
            <center><h3>Orders</h3></center>
           
        
            <table class="table" >
                <thead className="orderTable">
                    <tr>
                   
                        <th scope="col">OrderId</th>
                        <th scope="col">RestName</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">MenuItemID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Address</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">BankName</th>
                    </tr>
                </thead>
                <tbody style={{border:"2px solid black",placeContent:"center"}}>
                    {renderTable(props)}
                </tbody>

            </table>
        </div>

    )
}
export default BookingDisplay;