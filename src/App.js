import './App.css';
import ProductCardList from "./components/ProductCardList/ProductCardList";
import products from "./mock";
import categoryCards from './mock2'
import CategoryCardList from "./components/CategoryCardList/CategoryCardList";
import ProductPage from "./components/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import banner from './mock3';
import Banner from "./components/Banner/Banner";
import Footer from './components/Footer/Footer';
import contacts from "./contacts";
import WomenProducts from "./components/WomenProducts/WomenProducts";
import MenProducts from "./components/MenProducts/MenProducts";
import KidsProducts from "./components/KidsProducts/KidsProducts";
import ProductInBasket from "./components/ProductInBasket/ProductInBasket";
import FormRegister from "./components/FormRegister/FormRegister";
import FormLogin from "./components/FormLogin/FormLogin";
import React, {useEffect, useState} from "react";
import Basket from "./components/Basket/Basket";
import ProductCard from "./components/ProductCard/ProductCard";
import MainPage from "./MainPage";
import {Routes, Route, Outlet} from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";


function App() {
    const [basketProducts, setBasketProducts] = useState([]);
    const onAddToBasket = (obj)=> {
        setBasketProducts([...basketProducts,obj])
    }
    // const [basketProducts, setBasketProducts] = useState([]);
    // const onAddtoBasket = (obj)=> {
    //     setBasketProducts(obj)
    //         }
  return (
      <Routes>
          <Route path={'/'} element={<LayOut/>}>
              <Route index element={<IndexPage/>}/>
              <Route path={'catalog'} element={<ProductCardList productList={products}/>}/>
              <Route path={'men'} element={<MenProducts productList={products}/>}/>
              <Route path={'women'} element={<WomenProducts productList={products}/>}/>
              <Route path={'kids'} element={<KidsProducts productList={products}/>}/>
              <Route path={'basket'} element={<Basket productList={basketProducts}/>}/>
          </Route>

      </Routes>
    //
  );
}
function LayOut() {
    return (
        <div className="App">
            <Header/>
            <main className='content'>
                <Outlet/>
            </main>
            <Footer contacts={contacts}/>
        </div>
    )
}
export default App;
// <div className={'f'}>*/}
    {/*      <CategoryCardList categoryCardList={categoryCards}/>*/}
    {/*  </div>*/}