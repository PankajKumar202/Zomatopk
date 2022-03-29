
import React from 'react';
import { Link } from 'react-router-dom';
// import "../Home.css";
import './Listing.css';

const ListingDisplay = (props) => {
    console.log(">>>", props)
    //  let mealType=({listData})=>{
    // if(listData){
    //     if(listData){
    //         return listData.map((item)=>{
    //             return(
    //                 console.log("Inside mealType>>>>",item.mealTypes.mealtype_name)

    //                 )
    //         })
    //     }
    // }
    //  }

    const renderData = ({ listData}) => {
        console.log("Inside mealType>>>>",listData)
        // let badge=()=>{
        //     if(listData){
        //         return listData
        //     }
        // }
        console.log("Inside>>>>",listData)
        let mealType=()=>{
          
            if(listData.length>0){
                return listData.map((item)=>{
                    return(
                        <span className='badge bg-primary'  key={item.restaurant_id}>
                                {item.mealTypes.mealtype_name}
                        </span>
                    )
                })
            }
        }
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
                                <div className='col-md-7'>
                                    <div className='hotel_name'>
                                        <Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className='city_name'>{item.address}</div>
                                        <div className='city_name'>Ratings : {item.rating_text}</div>
                                        <div className='city_name'>Rs.{item.cost}</div>
                                        <div className='badgeDiv'>
                                            {mealType()}
                                            {/* <span className='badge bg-primary'>
                                               
                                                
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;
                                            <span className='badge ' style={{backgroundColor:"brown"}}>
                                               
                                                
                                                {item.mealTypes[1].mealtype_name}
                                            </span> */}
                                           
                                            <span className='badge bg-danger'>
                                                {item.cuisines[0].cuisine_name}
                                            </span>
                                            <span className='badge bg-success'>
                                                {item.cuisines[1].cuisine_name}
                                            </span>
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