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
import "./Home.scss"


export const Home = () => {
  const imgs = ["https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg", "https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg", "https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg"]

  const [productsApi, setProductsApi] = useState([{ id: "", data: {} }])
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
  return (
    <div className='app'>
      <Header />
      {/* <div ><Carouser   imgs={imgs} /></div> */}
      {/* <div className="most-seleing">Mas vendidos</div> */}
      <div className="filter-container">
        <div className="selec-container">
        <select className="select-type" name="select" onChange={(e) => setType(e.target.value)}>
          <option value="all">seleccionar un tipo</option>
          <option value="Pantalon">Pantalon</option>
          <option value="Vestido">Vestido</option>
          <option value="Accesorio">Accesorio</option>
        </select>
        </div>
        <div className="talles-container">
          <input className="talle-check" type="checkbox" name="s"></input>
          <label  htmlFor="s">s</label>
          <input className="talle-check" type="checkbox" name="s"></input>
          <label htmlFor="m">m</label>
          <input className="talle-check" type="checkbox" name="s"></input>
          <label className="talle-check" htmlFor="l">l</label>
          <input type="checkbox" name="s"></input>
          <label className="talle-check" htmlFor="xl">xl</label>
        </div>
        <div>
        <input className="price-range" type="input" placeholder="precio minimo" name="min-price"></input>
        <input className="price-range" type="input" placeholder="precio minimo" name="min-price"></input>
        </div>
      </div>
      

      <div className="products-list">
        {productsApi.map((product) =>

          type === "all" || product.data.type === type ? <Product addToCart={setCart} product={product} ></Product> : null
        )}
        {cart && <FloatCart product={cart} />}

      </div>


    </div>
  );
}