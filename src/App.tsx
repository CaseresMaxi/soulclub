import './App.scss';
import { Header } from './components/header/Header';
import { Product } from './components/product/Product';
import { Carouser } from './components/Carouser/Carouser';
import { useState } from 'react';
import { FloatCart } from './components/FloatCart/FloatCart';

function App() {
  const imgs = ["https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg", "https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg", "https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg"]
  const products = [
    {
      src: "https://i.pinimg.com/originals/8d/0a/10/8d0a10c18709006b67e48a647dc19571.png",
      name:"pollera linda UWU",
      price:"$1000",
      promo:"3 y 6 cuotas sin interes con mercado pago",
      talles:["s","m","l","xl"]
    },
    {
      src: "https://i.pinimg.com/originals/8d/0a/10/8d0a10c18709006b67e48a647dc19571.png",
      name:"Vestido lindo UnU",
      price:"$1000",
      promo:"3 y 6 cuotas sin interes con mercado pago",
      talles:["s","m","l","xl"]
    },
    {
      src: "https://i.pinimg.com/originals/8d/0a/10/8d0a10c18709006b67e48a647dc19571.png",
      name:"prenda",
      price:"$1000",
      promo:"3 y 6 cuotas sin interes con mercado pago",
      talles:["s","m","l","xl"]
    },
    {
      src: "https://http2.mlstatic.com/D_999086-MLM31229716758_062019-O.jpg",
      name:"prenda",
      price:"$1000",
      promo:"3 y 6 cuotas sin interes con mercado pago",
      talles:["s","m","l","xl"]
    },
    {
      src: "https://pm1.narvii.com/6539/0ccca8824431a5d944f52fb6a69a875d062b4779_hq.jpg",
      name:"prenda",
      price:"$1000",
      promo:"3 y 6 cuotas sin interes con mercado pago",
      talles:["s","m","l","xl"]
    },
    {
      src: "https://cf.shopee.com.mx/file/f0609ca3f93a679ef22abae751b5a01d",
      name:"prenda",
      price:"$1000",
      promo:"3 y 6 cuotas sin interes con mercado pago",
      talles:["s","m","l","xl"]
    },
  ]

  const [cart, setCart] = useState(null)
  return (
    <div className='app'>
      <Header />
      <Carouser imgs={imgs} />
      <div className="most-seleing">Mas vendidos</div>
      <div className="products-list">
        {products.map((product)=>
          <Product addToCart={setCart} product={product}></Product>
        )}
         {cart &&  <FloatCart product={cart}/>}

      </div>


    </div>
  );
}

export default App;
