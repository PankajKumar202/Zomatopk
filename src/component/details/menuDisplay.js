import React, { Component, Fragment } from "react";
class MenuDisplay extends Component {
    // Mycode for inc. dec.
    constructor() {
        super()
        this.state = {
            quantity: [],
            count:0
           
            // show: true
        }
    }
    // My code ends
    orderId = [];
    addItem = (id) => {

        this.orderId.push(id)
        this.props.finalOrder(this.orderId);
        // let inc=[...this.state.quantity];
        
       var incCount=[...this.state.quantity];
       var countNow=[...this.state.count]
       var count={};
       
       if(incCount[id]){
         
           incCount[id].count=incCount[id].count+1;
       }
       this.setState(
           {
               quantity:incCount[id].count
           }
       )

        

       
       
    // let count=[this.state.count]
    //         this.setState(
                
    //             {
    //                 quantity: inc[id].count + 1
    //             }

    //         )
        


    }

    removeItem = (dec, id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1);

        }

        if (this.state.quantity >= 1) {
            if (dec[id])
                this.setState(
                    {
                        quantity: dec[id] - 1
                    }
                )
        }

        this.props.finalOrder(this.orderId)
    }
    // ToggleClick = () => {
    //     this.setState({ show: !this.state.show });
    // }
    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return (
                    <b key={index}>{item} </b>
                )
            })
        }
    }
    renderMenu = ({ menuData }) => {
        console.log("OrderID", this.orderId)
        console.log("quantity", this.state.quantity)
        console.log("count", this.state.count)
        // console.log("quantity", this.state.count)
        if (menuData) {
            return menuData.map((item) => {
                return (

                    <div key={item.menu_id}>
                        <div className="row" style={{ marginTop: '1%' }}>
                            <div className="col-md-7">
                                <b>{item.menu_id}. </b>&nbsp;
                                <img src={item.menu_image} alt={item.menu_name} style={{ width: 80, height: 80 }}></img><br />
                                &nbsp; <span id="menuName">{item.menu_name}<br />-Rs.{item.menu_price}</span>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success" onClick={() => { this.addItem(item.menu_id) }}>
                                    <i class="fa-solid fa-plus"></i>
                                </button>&nbsp;
                                <input className="quantity" id="quant" type="text" value={this.state.quantity[item.menu_id]} readOnly />
                                <button className="btn btn-danger" onClick={() => { this.removeItem(this.state.quantity, item.menu_id) }}>
                                    <i class="fa-solid fa-minus"></i>

                                </button>
                                {/* <button onClick={this.ToggleClick}>
                                    {this.state.show ? 'Hide number' : 'Show number'}
                                </button> */}
                                {/* {this.state.show ? <h2>{this.state.quantity}</h2> : ''} */}
                            </div>
                        </div>
                    </div>

                )
            })
        }
    }
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <div className="col-md-12" id="renderAdded">
                    <h1>Item Added</h1>
                    Item Number {this.renderCart(this.orderId)}&nbsp;Added
                </div>
                <div className="col-md-12" id="menuAdded">
                    {this.renderMenu(this.props)}
                </div>

            </Fragment>


        )
    }
}
export default MenuDisplay;