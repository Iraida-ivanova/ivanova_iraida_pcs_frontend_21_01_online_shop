import './Cart.css'
import ProductInCart from "../ProductInCart/ProductInCart";
import {useDispatch, useSelector} from "react-redux";
import {getResult} from "../../app/reducers/cartSlice";
import React, {useState} from "react";



function CartWithProducts() {
    const productList = useSelector((state)=>state.cartItems.cartItems);
    const dispatch = useDispatch();
    const getResultSum =()=>{dispatch(getResult())};
    getResultSum();
    const ResultSum = useSelector((state)=>state.cartItems.totalSum);

    return(
        <div className='cart'>
            {
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
                </div>
            }


        </div>

    )
}
export default CartWithProducts