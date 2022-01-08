import React from "react";
import './Header.scss'
import InstagramLogo from "../../assets/instagram-logo.png"

export const Header: React.FC<any> = (): any => {

    return <div className="header-container">
        <div className="logo">SOULD CLUB
            <a href="https://www.instagram.com/soul.club_/"><img className="inst-logo" src={InstagramLogo}></img></a></div>
        <div className="filter">Filtro</div>
        <div className="cart">Carrito</div>
    </div>

}