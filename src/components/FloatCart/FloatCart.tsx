import React, { useState } from "react";
import "./FloatCart.scss"
import WhatsappLogo from "../../assets/whatsapp-logo.png"
import WhatsappLogoGrey from "../../assets/whatsapp-logo-grey.png"

export const FloatCart: React.FC<any> = (props): any => {
    const [talle, setTalle] = useState("")
    const [Wmenssaje, setWmenssaje] = useState("")
    // const [totalPrice, setTotalPrice] = useState(0);
    let sendText = []
    const reducer = (pValue:string,cValue:string)=> pValue.concat(" ",cValue)
    const createMenssaje = (product: any) => {
        sendText = product.map((p: any) => { return `Articulo:%20${p.name}%0DPrecio:%20$${p.price}` });
        window.open(`https://wa.me/+5491158277219?text=${sendText.reduce(reducer)}`, '_blank');
        props.closeCart()
    }
    let totalPrice = 0;
    return (
        <div className="floating-cart-container">
            {props.product.map((prod: any) => {
                totalPrice = totalPrice + (parseInt(prod.price))
                return (<div className="row">
                    <div>
                        <div className="name-container-cart">
                            <img className="floating-cart-img" src={prod.src}></img>
                            {`${prod.name} $${prod.price}`}

                        </div>
                    </div>
                </div>)
            })}
            <div className="separator-container-cart">
                <div className="separator-filters-cart"></div>
                <div className="total-container"><div className="total">{`Total: $${totalPrice}`}  </div> <button onClick={() => createMenssaje(props.product)} className="whatsapp-button">Hace tu pedido<img className="whatsapp-logo" src={WhatsappLogo}></img></button></div>

            </div>

            {/* 
            <div className="name-container">
                {props.product.name}
            </div>
            {props.product.talles.map((t:string)=><button onClick={()=>{setTalle(t)}} className={talle===t?"talle-btn-selected":"talle-btn"}>{t}</button>)}
            <div className="price-container">{props.product.price}</div>
            <button className="whatsapp-button" onClick={()=>createMenssaje(props.product,talle)}><img  className="whatsapp-logo" src={talle !== ""? WhatsappLogo:WhatsappLogoGrey}></img></button> */}
        </div>

    )
}