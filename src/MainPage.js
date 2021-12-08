import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import contacts from "./contacts";
import React, {useState} from "react";
import  items from './mock';
import Banner from "./components/Banner/Banner";
import ProductCardList from "./components/ProductCardList/ProductCardList";
import Basket from "./components/Basket/Basket";
import ProductCard from "./components/ProductCard/ProductCard";
import bannerImg from './mock3';

function MainPage() {
    const [basketProducts, setBasketProducts] = useState([]);
    const onAddToBasket = (obj)=> {
        setBasketProducts([...basketProducts,obj])
            }
    return (
        <div className='main-page'>
            <Header/>
            <Banner banner={bannerImg}/>
            <div className={'product-card-list p17'} >
                {
                   items.map(item => {
                            return (
                                <div className={'product-card-list_item'} key={item.id}>
                                    <ProductCard id={item.id}
                                                 title={item.title}
                                                 price={item.price}
                                                 image={item.image}
                                                 onBasket={(obj)=>onAddToBasket(obj)}

                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
            <Basket productList={basketProducts}/>
            <Footer contacts={contacts}/>
        </div>
    );
}

export default MainPage;
