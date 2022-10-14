import React, { Fragment} from "react";
import "./ProductBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducers/cartSlice";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"



const ProductBox = ({item})=>{
    
    const dispatch = useDispatch();

    return(
        <Fragment>
                <div className="box">
                    <div className="head-box">
                      
                        
                    </div>
                    <div className="img-box">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="text-box">
                        <p>{item.title}</p>
                        <p>code: {item.rating.count}</p>
                        <p>category: {item.category}</p>
                        <p>rating: {item.rating.rate}</p>
                        <p>price: {item.price} $</p>
                    </div>
                    <div className="add-cart">
                        <FontAwesomeIcon icon={faCirclePlus} title="add to cart"
                        onClick={()=>dispatch(addCart(item))}/>
                    </div>
                </div>
        </Fragment>
    )
}
export default ProductBox;