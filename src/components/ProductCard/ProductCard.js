import React from 'react';
import './ProductCard.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../app/reducers/cartSlice";


function ProductCard ({id, price, title, image, category}){

    const isAdded = useSelector((state)=>state.cartItems.cartItems.some(item => item.id === id));
    const dispatch = useDispatch();

    const onClickCart = () => {
        if (!isAdded) {
            dispatch(addToCart({...{id, price, title, image, category}}));
        }
    }
    return (
        <div className={'product-card'}>
            <div className='product-card__image'>
                <Link to={`/catalog/${id}`}> <img src={image} alt={'product card'}/></Link>
            </div>
            <Link className={'linkTo'} to={`/catalog/${id}`}>
                <h2 className={'product-card__title'}>{title}</h2>
            </Link>
            <div className={'product-card__container'}>
                <div className={'product-card__price'}>
                    {price}
                </div>
                <button onClick={onClickCart}>
                    {
                        isAdded?<Link to = {'/cart'}><i className='material-icons checked' >check_box</i></Link>:<i className='material-icons' >shopping_cart</i>
                    }

                </button>
            </div>

        </div>
    )
}
export default ProductCard