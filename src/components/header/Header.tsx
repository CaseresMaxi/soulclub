import React, { useEffect, useState } from "react";
import "./Header.scss";
import searchLogo from "../../assets/search-logo.png";
import cartLogo from "../../assets/cart-icon.png";
import "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

export const Header: React.FC<any> = (): any => {
  const [icon, setIcon] = useState("");
  const [contactInfo, setContactInfo] = useState({ phone: "", igUrl: "" });

  useEffect(() => {
    /* eslint-disable */
    onSnapshot(collection(db, "icons"), (snapshot) =>
      setIcon(snapshot.docs[0].data().src)
    );
    onSnapshot(collection(db, "contact-info"), (snapshot) =>
      setContactInfo({
        phone: snapshot.docs[0].data().phone,
        igUrl: snapshot.docs[0].data().igUrl,
      })
    );
  }, []);
  return (
    <div className="header-wrapper">
      <div className="supra-header">
        <p className="contact-us">Contactanos: {contactInfo.phone}</p>
      </div>
      <div className="header-container">
        <div className="herder-logo-container">
          <img src={icon} className="logo" alt=""></img>
        </div>
        <div className="search-container">
          <input type="text"></input>
          <button>
            <img alt="" src={searchLogo}></img>
          </button>
        </div>
        <div className="cart-container">
          <img className="card-logo" alt="" src={cartLogo}></img>
        </div>
      </div>
    </div>
  );
};
