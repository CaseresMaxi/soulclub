import React from "react";
import "./Product.scss"

export const Product:React.FC<any> = ({src}):any =>{
    return <div className="product-card">
        <img className="product-img" src={src}></img>
        <div> NOMBRE</div>
        <div> 100$</div>
        <div className="cuotas"> 3 y 6 cuotas sin interes con mercado pago</div>
    </div>
}