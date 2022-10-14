import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmarkDome, faUser } from "@fortawesome/free-solid-svg-icons"
import React, { Fragment } from "react";

import { Link } from "react-router-dom";


const HomeLink = ()=>{

    return(
        <Fragment>
            <div className="home-link">
                <Link to="/account">
                    <span><FontAwesomeIcon icon={faUser}/></span>
                    <span className="link-text">Product</span>
                </Link>
            </div>
        </Fragment>
    )
}

export default HomeLink;