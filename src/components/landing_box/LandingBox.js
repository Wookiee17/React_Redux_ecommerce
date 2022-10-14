import React, { Fragment } from "react"
import "./LandingBox.css"

const LandingBox =({img_1, img_2})=>{
    return(
        <Fragment>
            <div className="landing">
                <div className="landing-box">
                    <img src={img_1} alt="..."/>
                </div>
                <div className="landing-box">
                    <img src={img_2} alt="..."/>
                    
                </div>
            </div>
        </Fragment>
    )
}
export default LandingBox;