import './Basket.css'
import Header from "../Header/Header";
import ProductInBasket from "../ProductInBasket/ProductInBasket";
import {useEffect, useState} from "react";

function Basket({productList=[]}) {

    return(
        <div className='basket  p17'>
            <h1 className='basket__title'>Корзина</h1>
            {/*<Header/>*/}
            <ul className='basket__list'>
                {productList.map(item=>{
                    return <li className='basket__item' key={item.id}>
                        <ProductInBasket product={item}/>
                        <div className='basket__separator'></div>
                    </li>

                })}
            </ul>
            <div>
                <button>
                    Оформить заказ
                </button>
            </div>

        </div>
    )
}
export default Basket