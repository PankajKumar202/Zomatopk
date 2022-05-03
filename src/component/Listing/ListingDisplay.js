
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Listing.css';

const ListingDisplay = (props) => {

    console.log(">>>", props)
  
    const renderData = ({ listData }) => {
       
        console.log("Inside>>>>", listData)

        // let mealType = () =>{

        //     if(listData.length > 0){
        //         return listData.map((item)=>{
        //         // console.log("Inside Listdata index>>>",index)  
        //          console.log("Inside Listdata",item)
        //                 return(
        //                     <span className="badge bg-info" key={item.restaurant_id}>
        //                         {item.mealTypes.mealtype_name}
        //                     </span>
        //                 )



        //         })
        //     }
        // }
        // let mealType=()=>{
        //   return 
        // if(listData.length>0){
        //     return listData.map((item)=>{
        //         return(
        //             <span className='badge bg-primary'  key={item.restaurant_id}>
        //                     {item.mealTypes.mealtype_name}
        //             </span>
        //         )
        //     })
        // }
        // }
        // console.log("MEaltype>>>",mealType())

        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (

                        <div className="item" key={item.restaurant_id}>

                            <div className="row">
                                <div className="col-md-5">
                                    <img src={item.restaurant_thumb} className="Image"
                                        alt={item.restaurant_name} />

                                </div>
                                <div className='col-md-7' id='listbox'>
                                    <div className='hotel_name'>
                                        <Link to={`/details?restId=${item.restaurant_id}`} className='rest_name'>{item.restaurant_name}</Link>
                                        <div id='cityDiv'>
                                        <div className='city_name'>{item.address}</div>
                                        <div className='city_name'>Ratings : {item.rating_text}</div>
                                        <div className='city_name'>Rs.{item.cost}</div>
                                        </div>
                                        <div className='badgeDiv'>
                                           
                                            {
                                                item.mealTypes.map((badgeitem,index)=>{
                                                    return(
                                                        <Fragment key={index}>
                                                            <span className='badge bg-success' style={{marginLeft:"4%"}}>{badgeitem.mealtype_name}</span>
                                                        </Fragment>
                                                    )
                                                })
                                            }&nbsp;
                                            {
                                                item.cuisines.map((badgecuisine,index)=>{
                                                    return(
                                                        <Fragment key={index}>
                                                            &nbsp;<span className='badge bg-danger'>{badgecuisine.cuisine_name}</span>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            } else {
                return (
                    <h2>No Data for filter</h2>
                )
            }

        }
        else {
            return (
                <>
                    <img className="Loading" src='/images/Loader.gif' alt="Loader..." />
                    <h1 className="Loading">Loading.....</h1>
                </>)

        }
    }
    return (
        <div id="content">
            {renderData(props)}
        </div>
    )
}
export default ListingDisplay