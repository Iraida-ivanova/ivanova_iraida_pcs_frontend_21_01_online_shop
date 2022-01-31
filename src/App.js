import ProductCardList from "./components/ProductCardList/ProductCardList";
import products from "./mock";
import categoryCards from './mock2'
import ProductPage from "./components/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import contacts from "./contacts";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import FormLogin from "./components/FormLogin/FormLogin";
import React from "react";
import Cart from "./components/Cart/Cart";
import {Routes, Route, Outlet} from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import Orders from "./components/Orders/Orders";
import EmptyPage from "./components/EmptyPage/EmptyPage";



function App() {

  return (
      <Routes>
          <Route path={'/'} element={<Layout/>}>
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
              <Route path={'empty'} element={<EmptyPage/>}/>
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
function Layout() {
    return (
        <div className="App">
            <Header/>

            <main className={'content'}>
                <Outlet/>
            </main>

            <Footer contacts={contacts}/>
        </div>
    )
}

export default App
