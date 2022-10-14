import React, { Fragment } from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav =()=>{
    const carts = useSelector((state)=> state.cartSlice);
    const favorites = useSelector((state)=> state.favoritesSlice);
    return(
        <Fragment>
            <nav>
                <ul>
                   <li>
                            <span className="link-text">Basket</span>
                            <span className="num-icon">
                                <FontAwesomeIcon icon={faCartShopping}/>
                                <span className="fav-cart">{carts.length}</span>
                            </span>
                        </li>
                    
                </ul>
            </nav>
        </Fragment>
    )
}
export default Nav;