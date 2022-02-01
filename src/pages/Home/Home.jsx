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
import img1 from "../../assets/c1.jpg"
import img2 from "../../assets/c2.jpg"
import img3 from "../../assets/c3.jpg"


export const Home = () => {
  const imgs = [img1,img2,img3]

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
  const [cart, setCart] = useState([])
  const {pass} = useParams()
  const [isAdmin, setIsAdmin] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  useEffect(() => {
      console.log(pass,"pass")
      setIsAdmin(pass==="camilasantander")
    
  }, []);
  
  return (
    <div className='app'>
      <Header setOpenCart={setOpenCart} cart={cart}/>
      <div className="carousel-container" ></div>
      <div ><Carouser imgs={imgs} /></div>
      {/* <div className="most-seleing">Mas vendidos</div> */}
      <Filter setType={setType} minMaxPrice={minMaxPrice} setMinMaxPrice={setMinMaxPrice} />
      <div className="separator-filters">
        {/* <button className="more-filters-buttons"><img className="arrow-down" src={arrow}></img></button> */}
        </div>
      <div className="products-list">
        {productsApi.map((product) =>

          (product.data.price >= minMaxPrice.min || minMaxPrice.min === "") && 
          (product.data.price <= minMaxPrice.max || minMaxPrice.max === "") && 
          (type === "all" || product.data.type === type) ? 
          <Product cart={cart} addToCart={setCart} product={product} isAdmin={isAdmin}>
          </Product> : null
        )}
        {cart.length>0 && openCart && <FloatCart closeCart={()=>{setOpenCart(false)}} product={cart} />}
  

      </div>



    </div>
  );
}