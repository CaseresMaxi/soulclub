import React from "react";
import "./Product.scss"
import AddToCart from "../../assets/addToCart.png"

export const Product: React.FC<any> = (props): any => {
    return <div className="product-card">
       
        <img className="product-img" src={props.product.data.src}></img>
        <div> {props.product.data.name}</div>
        <div> {props.product.data.price}</div>
        <button onClick={() => { props.addToCart(props.product.data) }} className="add-to-cart">
            <img src={AddToCart} className="add-to-cart-img" ></img>
        </button>
        <button onClick={()=>{window.location.href=`/add/${props.product.id}`}}>editar</button>
        {/* <div className="cuotas"> {props.product.promo}</div> */}
    </div>
}