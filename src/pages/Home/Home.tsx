import React from "react";
import { Header } from '../../components/header/Header';
import { Product } from '../../components/product/Product';
import { Carouser } from '../../components/Carouser/Carouser';
import { useEffect, useState } from 'react';
import { FloatCart } from '../../components/FloatCart/FloatCart';
import 'firebase/firestore';
import db from "../../firebase"
// import { collection, doc, setDoc , Firestore, onSnapshot, snapshotEqual, deleteDoc } from 'firebase/firestore';
import { collection, onSnapshot,  } from 'firebase/firestore';


export const Home: React.FC<any> = (): any => {
    const imgs = ["https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg", "https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg", "https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg"]

    const [productsApi, setProductsApi] = useState([{id:"",data:{}}])
    // const [baners, setBaners] = useState({});
    // const ej  = async () =>{ await addDoc(collection(db,"productos"),{})}
    // const ej  = async () =>{ await setDoc(doc(db,"productos"),{})}
    useEffect(() => {
      /* eslint-disable */
    onSnapshot(collection(db, "productos"), (snapshot) =>  setProductsApi(snapshot.docs.map(doc => {return {data: doc.data(),id: doc.id}})) );
    // onSnapshot(collection(db, "baners"), (snapshot) =>  setBaners(snapshot.docs.map(doc => doc.data())) );
  }, [])
    
  const [cart, setCart] = useState(null)
  return (
    <div className='app'>
      <Header />
      <div ><Carouser   imgs={imgs} /></div>
      <div className="most-seleing">Mas vendidos</div>
      <div className="products-list">
        {productsApi.map((product) =>
      <Product addToCart={setCart} product={product}></Product>
        )} 
        {cart && <FloatCart product={cart} />}

      </div>


    </div>
  );
}