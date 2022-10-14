import React, { Fragment } from "react";
import "./Home.css"
import AllProducts from "../../components/allProducts/AllProducts";


import LandingBox from "../../components/landing_box/LandingBox";
import blueMen from "../../photo/men_2.jpg"
import yellow from "../../photo/landingBox_2.jpg"
import redLanding from "../../photo/men_1.jpg"
import greenLanding from "../../photo/landingBox_4.jpg"

const Home = ()=>{

    return(
        <Fragment>
            <div className="home-container">
                
                        <LandingBox img_1={blueMen} img_2={yellow}/>
                       
                        <LandingBox img_1={redLanding} img_2 = {greenLanding}/>
             
            </div>
        </Fragment>
    )
}
export default Home;