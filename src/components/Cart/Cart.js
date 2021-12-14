import './Cart.css'
import ProductInCart from "../ProductInCart/ProductInCart";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getResult} from "../../app/reducers/cartSlice";
import React, {useState} from "react";



function Cart() {
    const productList = useSelector((state)=>state.cartItems.cartItems);
    const dispatch = useDispatch();
    const getResultSum =()=>{dispatch(getResult())};
    getResultSum();
    const ResultSum = useSelector((state)=>state.cartItems.totalSum);

    return(
            <div className='cart'>
                <h1 className='cart__title'>Корзина</h1>
                {
                    productList.length>0
                        ?
                        <div>
                            <ul className='cart__list'>
                                {productList.map(item=>{

                                    return <li className='cart__item' key={item.id}>
                                        <ProductInCart product={item}/>
                                        <div className='cart__separator'></div>
                                    </li>

                                })}
                            </ul>
                            <div className={'cart__result'}>
                                <div className={'cart__total-sum'}>Итого: {ResultSum} руб. </div>
                            </div>
                            <div className={'cart__button-container'}>
                                <Link to={'/cart/orders'} className='link'>
                                    <button className='button button-green'>
                                        Оформить заказ
                                    </button>
                                </Link>

                            </div>
                        </div>

                        : <div className='cart__empty'>
                            <img src='/img/empty-cart.png' alt={'Cart'}/>
                            <h2>Корзина пустая</h2>
                            <p>Добавьте товары в корзину</p>
                            <Link  to={'/'} className='link'>
                                <button className='button button-green'>
                                    На главную
                                </button>
                            </Link>
                        </div>
                }


            </div>

    )
}
export default Cart