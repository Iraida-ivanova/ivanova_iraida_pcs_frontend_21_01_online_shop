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
import ProductInBasket from "./components/ProductInBasket/ProductInBasket";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import FormLogin from "./components/FormLogin/FormLogin";
import React, {useEffect, useState} from "react";
import Basket from "./components/Basket/Basket";
import ProductCard from "./components/ProductCard/ProductCard";
import {Routes, Route, Outlet} from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import items from "./mock";
import Orders from "./components/Orders/Orders";


function App() {

    const [basketProducts, setBasketProducts] = useState([]);
    const onAddToBasket = (obj)=> {
        setBasketProducts(prev=>[...prev,obj])
    }


  return (
      <Routes>
          <Route path={'/'} element={<LayOut/>}>
              <Route index element={<IndexPage categoryCards={categoryCards} products={products} onAddToBasket={onAddToBasket}/>}/>

              <Route path={'men'} element={<ProductCardList productList={products} title={'Мужчины'} addToBasket={onAddToBasket} category={'men'}/>}/>
              <Route path={'women'} element={<ProductCardList productList={products} title={'Женщины'} addToBasket={onAddToBasket} category={'women'}/>}/>
              <Route path={'kids'} element={<ProductCardList productList={products} title={'Дети'} addToBasket={onAddToBasket} category={'kids'}/>}/>
              <Route path={'sign_in'} element={<FormLogin/>}/>
              <Route path={'sign_up'} element={<RegistrationForm/>}/>
              <Route path={'catalog'} element={<ProductsLayout/>}>
                <Route index element={<ProductCardList productList={products} title={'Каталог'} addToBasket={onAddToBasket} category={'all'}/>}/>
                  <Route path={':productId'} element={<ProductPage products={products}/>}/>
              </Route>
              <Route path={'basket'} element={<BasketLayout/>}>
                  <Route index element={<Basket productList={basketProducts}/>}/>
                  <Route path={'orders'} element={<Orders productList={basketProducts}/>}/>
              </Route>
          </Route>

      </Routes>

  )
}

function BasketLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}
function ProductsLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}
function LayOut() {
    return (
        <div className="App">
            <div>
                <Header/>

                <main className='content'>
                    <Outlet/>
                </main>
            </div>

            <Footer contacts={contacts}/>
        </div>
    )
}

export default App
