import './App.scss';
import { Header } from './components/header/Header';
import { Product } from './components/product/Product';
import { Carouser } from './components/Carouser/Carouser';

function App() {
  return (
    <div>
      <Header />
      <Carouser />
      <div className="most-seleing">Mas vendidos</div>
      <div className="products-list">
        <Product src="https://i.pinimg.com/originals/8d/0a/10/8d0a10c18709006b67e48a647dc19571.png" />
        <Product src="https://http2.mlstatic.com/D_999086-MLM31229716758_062019-O.jpg" />
        <Product src="https://pm1.narvii.com/6539/0ccca8824431a5d944f52fb6a69a875d062b4779_hq.jpg" />
        <Product src="https://notilook.com.ar/wp-content/uploads/2018/11/cop-pant-de-lino-verano-2019-ropa-mujer-Piccola.jpg" />
        <Product src="https://cf.shopee.com.mx/file/f0609ca3f93a679ef22abae751b5a01d" />
        <Product src="https://artislogistics.pro/wp-content/uploads/2020/10/Conjuntos-de-ropa-de-oto-o-a-la-moda-para-ni-as-de-2-7-pulgadas.jpg_640x640.jpg" />
        <Product src="https://i.pinimg.com/originals/91/bb/21/91bb21bd5c039bdd602133d43543bce6.jpg" />
  
      </div>


    </div>
  );
}

export default App;
