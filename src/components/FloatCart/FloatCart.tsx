import React, { useState } from "react";
import "./FloatCart.scss"
import WhatsappLogo from "../../assets/whatsapp-logo.png"
import WhatsappLogoGrey from "../../assets/whatsapp-logo-grey.png"

export const FloatCart: React.FC<any> = (props): any => {
    const [talle, setTalle] = useState("")
    const [Wmenssaje, setWmenssaje] = useState("")
    const createMenssaje = (product:any,talle:any) => {
        console.log(product, talle)
        window.open(`https://wa.me/+5491158277219?text=Articulo:%20${product.name}%0DPrecio:%20${product.price}%0DTalle:%20${talle}`, '_blank');
    }
    return (
        <div className="floating-cart-container">
            <div>
                <img className="floating-cart-img" src={props.product.src}></img>
            </div>
            <div className="name-container">
                {props.product.name}
            </div>
            {props.product.talles.map((t:string)=><button onClick={()=>{setTalle(t)}} className={talle===t?"talle-btn-selected":"talle-btn"}>{t}</button>)}
            <div className="price-container">{props.product.price}</div>
            <button className="whatsapp-button" onClick={()=>createMenssaje(props.product,talle)}><img  className="whatsapp-logo" src={talle !== ""? WhatsappLogo:WhatsappLogoGrey}></img></button>
        </div>
        
    )
}