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
import ProductInCart from "./components/ProductInCart/ProductInCart";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import FormLogin from "./components/FormLogin/FormLogin";
import React, {useEffect, useState} from "react";
import Cart from "./components/Cart/Cart";
import ProductCard from "./components/ProductCard/ProductCard";
import {Routes, Route, Outlet} from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import items from "./mock";
import Orders from "./components/Orders/Orders";



function App() {
    const [items, setItems] = useState([])
    const [cartProducts, setCartProducts] = useState([]);
    // const onAddToCart = (obj)=> {
    //     setCartProducts(prev=>[...prev,obj])
    // }


  return (
      <Routes>
          <Route path={'/'} element={<LayOut/>}>

              <Route index element={<IndexPage categoryCards={categoryCards} products={products} />}/>
              <Route path={'men'} element={<ProductCardList productList={products} title={'Мужчины'}  category={'men'} />}/>
              <Route path={'women'} element={<ProductCardList productList={products} title={'Женщины'}  category={'women'}/>}/>
              <Route path={'kids'} element={<ProductCardList productList={products} title={'Дети'}  category={'kids'}/>}/>
              <Route path={'catalog'} element={<ProductsLayout/>}>
                  <Route index element={<ProductCardList productList={products} title={'Каталог'}  category={'all'}/>}/>
                  <Route path={':productId'} element={<ProductPage products={products}/>}/>
              </Route>
              <Route path={'cart'} element={<CartLayout/>}>
                  <Route index element={<Cart/>}/>
                  <Route path={'orders'} element={<Orders/>}/>
              </Route>
              <Route path={'sign_in'} element={<FormLogin/>}/>
              <Route path={'sign_up'} element={<RegistrationForm/>}/>
          </Route>

      </Routes>

  )
}

function CartLayout() {
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
