import React, { useState } from "react";
import './Header.scss'
import InstagramLogo from "../../assets/instagram-logo.png"
import Cart from "../../assets/cart.png"
import Filer from "../../assets/filter.png"
import logo from "../../assets/soul-club-logo-1.png"

export const Header: React.FC<any> = (props): any => {
    // const [fitlersOpen, setFitlersOpen] = useState(false)
 
    return <div>
        <div className="header-container">
            <div className="logo"><img className="soul-club-logo" src={logo}></img>
                <a href="https://www.instagram.com/soul.club_/"><img className="inst-logo" src={InstagramLogo}></img></a>
                
            </div>
            {/* <img onClick={() => { setFitlersOpen(!fitlersOpen) }} className="filter-logo" src={Filer}></img> */}
           <div onClick={()=>props.setOpenCart(props.cart.length>0)} ><img className="cart-logo" src={Cart}></img>{props.cart?.length>0 && <div className="cart-alert">{props.cart?.length}</div>}</div>
        </div>
        {/* {fitlersOpen &&
            <div className="filters">
               
                {/* <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Productos</button></li>
                        <li><button className="dropdown-item" type="button">Conjuntos</button></li>
                        <li><button className="dropdown-item" type="button">Vestidos</button></li>
                    </ul>
                </div> 
            </div>
        } */}
    </div>

}