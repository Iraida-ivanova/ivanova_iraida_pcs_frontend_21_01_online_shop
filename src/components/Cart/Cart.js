import './Cart.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import React from "react";
import CartWithProducts from "./CartWithProducts";

function Cart() {
    const productList = useSelector((state)=>state.cartItems.cartItems);

    return(
            <div className='cart p17'>
                <h1 className='cart__title'>Корзина</h1>
                {
                    productList.length>0
                        ?
                        <div>
                            <CartWithProducts/>
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