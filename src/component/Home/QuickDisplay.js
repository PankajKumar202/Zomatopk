import React from "react";
import { Link } from "react-router-dom";
const QuickDisplay = (props) => {
    console.log("inside Quickdisplay>>>",props)
    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item)=> {
                return (
                    <Link to="/">
                        <div className="Main-tile">

                            <div className="Tile-Container">
                                <div className="Tile-Component">
                                    <img src={item.meal_image} alt="" />
                                </div>
                                <div className="Tile-Component2">
                                    {item.mealtype}
                                </div>
                                <div className="Component-Subheading">
                                    {item.content}
                                </div>
                            </div>

                        </div>
                    </Link>
                )
            })
         }
    }
     


return (
    <>
        {listMeal(props)}
    </>
)
}
export default QuickDisplay;