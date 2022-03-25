import React,{Component, Fragment} from "react";
class MenuDisplay extends Component{
 orderId=[]
 addItem=(id)=>{
     this.orderId.push(id)
     this.props.finalOrder(this.orderId)
 }
 removeItem=(id)=>{
     if(this.orderId.indexOf(id)>-1){
         this.orderId.splice(this.orderId.indexOf(id),1);
     }
     this.props.finalOrder(this.orderId)
 }
 renderCart=(orders)=>{
     if(orders){
         return orders.map((item,index)=>{
             return(
                 <b key={index}>{item} </b>
             )
         })
     }
 }
 renderMenu=({menuData})=>{
   
if(menuData){
    return menuData.map((item)=>{
        return(
            
        <div key={item.menu_id}>
            <div className="row" style={{marginTop:'1%'}}>
            <div className="col-md-7">
               <b>{item.menu_id}. </b>&nbsp;
                <img src={item.menu_image} alt={item.menu_name} style={{width:80,height:80}}></img>
                &nbsp; {item.menu_name}-Rs.{item.menu_price}
            </div>
            <div className="col-md-4">
                <button className="btn btn-success" onClick={()=>{this.addItem(item.menu_id)}}>
                <i class="fa-solid fa-plus"></i>
                </button>&nbsp;
                <button className="btn btn-danger"  onClick={()=>{this.removeItem(item.menu_id)}}>
                <i class="fa-solid fa-minus"></i>
                   
                </button>
            </div>
            </div>
        </div>
        
        )
    })
}
 }
    render(){
        console.log(this.props)
        return(
            <Fragment>
            <div className="col-md-12" >
              <h1>Item Added</h1>
              Item Number {this.renderCart(this.orderId)}&nbsp;Added
              </div>
              <div className="col-md-12" >
                { this.renderMenu(this.props)}
              </div>
              
            </Fragment>
        
          
        )
    }
}
export default MenuDisplay;