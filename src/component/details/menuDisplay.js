import React, { Component, Fragment } from "react";
class MenuDisplay extends Component {
    // Mycode for inc. dec.
    constructor() {
        super()
        this.state = {
            quantity: 0,
            
           
            // show: true
        }
    }
    // My code ends
    orderId = [];
    // quantity=[]
    addItem = (id) => {

        this.orderId.push(id)
        
        let quantity = {}
        this.orderId.reduce((item, curr) => {
            if (item[curr]) {
                item[curr] = ++item[curr]
            } else {
                item[curr] = 1
            }

            return item
        }, quantity)
        console.log("q",quantity)
        this.props.finalOrder(this.orderId,quantity);
 
      
           
        
  

     
        


    }
  
   


    removeItem = ( id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1);

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

                  
                        <div className="row" style={{ marginTop: '1%' }} key={item.menu_id}>
                            <div className="col-md-7">
                                <b>{item.menu_id}. </b>&nbsp;
                                <img src={item.menu_image} alt={item.menu_name} style={{ width: 80, height: 80 }}></img><br />
                                &nbsp; <span id="menuName">{item.menu_name}<br />-Rs.{item.menu_price}</span>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success" onClick={() => { this.addItem(item.menu_id) }}>
                                    <i class="fa-solid fa-plus"></i>
                                </button>&nbsp;
                               
                                <button className="btn btn-danger" onClick={() => { this.removeItem( item.menu_id) }}>
                                    <i class="fa-solid fa-minus"></i>

                                </button>
                              
                            </div>
                        </div>
                 

                )
            })
        }
    }
    render() {
        console.log(this.props)
        // console.log(orderFilter())
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