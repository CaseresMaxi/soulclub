import React from "react";
import "./Product.scss"


export const Product: React.FC<any> = (props): any => {

    return <div className="product-card">
        {/* {props.product.data.desc && <div className="off"> {props.product.data.desc} </div>} */}
        <img alt="" className="product-img" src={props.product.data.src}></img>
        <div className="name-container"><div className="sub-texto">{props.product.data.type !==""?props.product.data.type:"-"}</div><div>{props.product.data.name}</div></div>
        <div className="price-container">
            {props.product.data.regularPrice && <div className="prebius-price">${props.product.data.regularPrice}</div>}
            ${props.product.data.price}
        </div>
        {/* <button onClick={() => { props.addToCart(props.product.data) }} className="add-to-cart">
            <img src={AddToCart} className="add-to-cart-img" ></img>
        </button> */}
       {props.isAdmin &&  <button className="add-to-cart" onClick={()=>{window.location.href=`/souldclub/#/add/${props.product.id}`}}>editar</button>}
        {/* <div className="cuotas"> {props.product.promo}</div> */}
        <button className="add-to-cart"> add </button>
    </div>
}