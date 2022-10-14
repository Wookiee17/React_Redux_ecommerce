import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchProducts} from "../../redux/action/fetchProducts";
import ProductBox from "../product_box/ProductBox";
import "./AllProducts.css"

const AllProducts = ()=>{
    const dispatch = useDispatch();
    const theProducts = useSelector((state)=> state.allProducts);

    useEffect(()=>{
            dispatch(fetchProducts());
    },[dispatch])

    return(
        <Fragment>
            {theProducts.products.length ? (
                <div className="boxes">
                    {theProducts.products.map((item)=>
                        <ProductBox key={item.id} item={item}/>
                    )}
                </div>
            )
            : (<p>loading...</p>)
            }
        </Fragment>
    )
}
export default AllProducts;