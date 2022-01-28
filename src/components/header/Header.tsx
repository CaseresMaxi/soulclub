import React, { useState } from "react";
import './Header.scss'
import InstagramLogo from "../../assets/instagram-logo.png"
import Cart from "../../assets/cart.png"
import Filer from "../../assets/filter.png"

export const Header: React.FC<any> = (): any => {
    const [fitlersOpen, setFitlersOpen] = useState(false)
 
    return <div>
        <div className="header-container">
            <div className="logo">SOULD CLUB
                {/* <a href="https://www.instagram.com/soul.club_/"><img className="inst-logo" src={InstagramLogo}></img></a> */}
            </div>
            <img onClick={() => { setFitlersOpen(!fitlersOpen) }} className="filter-logo" src={Filer}></img>
            <img className="cart-logo" src={Cart}></img>
        </div>
        {fitlersOpen &&
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
                </div> */}
            </div>
        }
    </div>

}