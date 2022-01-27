import React from "react";
import "./Product.scss"
import AddToCart from "../../assets/addToCart.png"


export const Product: React.FC<any> = (props): any => {

    return <div className="product-card">
        <div className="off"> -20% </div>
        <img className="product-img" src={props.product.data.src}></img>
        <div className="name-container"><div className="sub-texto">sub texto saraza</div><div>{props.product.data.name}</div></div>
        <div className="price-container"> <div className="prebius-price">$12312</div>${props.product.data.price}</div>
        {/* <button onClick={() => { props.addToCart(props.product.data) }} className="add-to-cart">
            <img src={AddToCart} className="add-to-cart-img" ></img>
        </button> */}
        {/* <button onClick={()=>{window.location.href=`/add/${props.product.id}`}}>editar</button> */}
        {/* <div className="cuotas"> {props.product.promo}</div> */}
    </div>
}