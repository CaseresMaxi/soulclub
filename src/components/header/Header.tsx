import React from "react";
import './Header.scss'
import InstagramLogo from "../../assets/instagram-logo.png"
import Cart from "../../assets/cart.png"
import Filer from "../../assets/filter.png"

export const Header: React.FC<any> = (): any => {

    return <div className="header-container">
        <div className="logo">SOULD CLUB
            <a href="https://www.instagram.com/soul.club_/"><img className="inst-logo" src={InstagramLogo}></img></a></div>
        <img className="filter-logo" src={Filer}></img>
        <img className="cart-logo" src={Cart}></img>
    </div>

}