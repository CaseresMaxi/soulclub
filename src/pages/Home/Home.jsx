import React from "react";
import { Header } from '../../components/header/Header';
import { Product } from '../../components/product/Product';
import { Carouser } from '../../components/Carouser/Carouser';
import { useEffect, useState } from 'react';
import { FloatCart } from '../../components/FloatCart/FloatCart';
import 'firebase/firestore';
import db from "../../firebase"
// import { collection, doc, setDoc , Firestore, onSnapshot, snapshotEqual, deleteDoc } from 'firebase/firestore';
import { collection, onSnapshot, } from 'firebase/firestore';
import arrow from "../../assets/Arrow-down.svg"
import "./Home.scss"
import { Filter } from "../../components/Filtter/Filter";
import { useParams } from "react-router-dom";


export const Home = () => {
  const imgs = ["https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg", "https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg", "https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg"]

  const [productsApi, setProductsApi] = useState([{ id: "", data: {} }])
  const [minMaxPrice, setMinMaxPrice] = useState({ min: "", max: "" });
  // const [baners, setBaners] = useState({});
  // const ej  = async () =>{ await addDoc(collection(db,"productos"),{})}
  // const ej  = async () =>{ await setDoc(doc(db,"productos"),{})}
  useEffect(() => {
    /* eslint-disable */
    onSnapshot(collection(db, "productos"), (snapshot) => setProductsApi(snapshot.docs.map(doc => { return { data: doc.data(), id: doc.id } })));
    // onSnapshot(collection(db, "baners"), (snapshot) =>  setBaners(snapshot.docs.map(doc => doc.data())) );
  }, [])
  const [type, setType] = useState("all");
  const [cart, setCart] = useState(null)
  const {pass} = useParams()
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    
      setIsAdmin(pass==="camilasantander")
    
  }, []);
  
  return (
    <div className='app'>
      <Header />
      {/* <div ><Carouser   imgs={imgs} /></div> */}
      {/* <div className="most-seleing">Mas vendidos</div> */}
      <Filter setType={setType} minMaxPrice={minMaxPrice} setMinMaxPrice={setMinMaxPrice} />
      <div className="separator-filters"><button className="more-filters-buttons"><img className="arrow-down" src={arrow}></img></button></div>
      <div className="products-list">
        {productsApi.map((product) =>

          (product.data.price >= minMaxPrice.min || minMaxPrice.min === "") && 
          (product.data.price <= minMaxPrice.max || minMaxPrice.max === "") && 
          (type === "all" || product.data.type === type) ? 
          <Product addToCart={setCart} product={product} isAdmin={isAdmin}>
          </Product> : null
        )}
        {cart && <FloatCart product={cart} />}

      </div>



    </div>
  );
}