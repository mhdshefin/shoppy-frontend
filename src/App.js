import './App.css';
import Navbar from './Componets/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/shopCatergory';
import Products from './pages/Product';
import Cart from './pages/cart';
import Loginsignup from './pages/Loginsignup';
import Footer from './Componets/footer/footer';
import men_banner from './Componets/assets/banner_mens.png'
import women_banner from './Componets/assets/banner_women.png'
import kids_banner from './Componets/assets/banner_kids.png'
import PlaceOrder from './Componets/Placeorder/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/products/:productId' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
          <Route path='/placeorder' element={<PlaceOrder/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
