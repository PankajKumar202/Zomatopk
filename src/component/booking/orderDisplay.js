
import React from "react";
const BookingDisplay = (props) => {
    console.log("Inside BookinDisplay",props)
    const renderTable = ({ orderData }) => {
        console.log("orderdata",orderData)
        if (orderData) {
            return orderData.map((item) => {
                return (
                    <tr key={item._id}>
                        <td>{item.id}</td>
                        <td>{item.Rest_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.cost}</td>
                        <td>{item.address}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                       
                     
                    </tr>
                )
            })
        }
    }
    return (
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>RestName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>

                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>

            </table>
        </div>
    )
}
export default BookingDisplay;