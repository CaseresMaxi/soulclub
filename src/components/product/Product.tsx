import React from "react";
import "./Product.scss"
import AddToCart from "../../assets/addToCart.png"

export const Product: React.FC<any> = (props): any => {
    return <div className="product-card">
        <img className="product-img" src={props.product.src}></img>
        <div> {props.product.name}</div>
        <div> {props.product.price}</div>
        <button onClick={() => { props.addToCart(props.product) }} className="add-to-cart">
            <img src={AddToCart} className="add-to-cart-img" ></img>
        </button>
        {/* <div className="cuotas"> {props.product.promo}</div> */}
    </div>
}