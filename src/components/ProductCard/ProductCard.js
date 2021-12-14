import React, {useState} from 'react';
import './ProductCard.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../app/reducers/cartSlice";
import {setIsAdded} from "../../app/reducers/cartSlice"
import classNames from "classnames";


function ProductCard ({id, price, title, image, category,added}){
    const [isAdded, setIsAdded] = useState(added)
    const dispatch = useDispatch();

    const onClickCart = () => {
        dispatch(addToCart({...{id, price, title, image, category}}));
         setIsAdded(!isAdded)
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
                <button onClick={onClickCart} className={'product-card__basket'}>
                    {
                        isAdded?<i className='material-icons checked' >check_box</i>:<i className='material-icons' >shopping_cart</i>
                    }

                </button>
            </div>

        </div>
    )

}
export default ProductCard