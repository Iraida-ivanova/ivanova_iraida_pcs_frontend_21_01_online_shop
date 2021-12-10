import React, {useState} from 'react';
import './ProductCard.css';
import {Link} from "react-router-dom";

function ProductCard ({id, title='', price='', image='', onBasket}) {
    const [isAdded, setIsAdded] = useState(false);
    const onClickBasket = () => {
        onBasket({id,title,price,image});
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
                <button onClick={onClickBasket} className={'product-card__basket'}>
                    {/*<i className={isAdded?'material-icons ':'material-icons checked'} >check_box</i>*/}
                    {
                        isAdded?<i className='material-icons checked' >check_box</i>:<i className='material-icons' >shopping_cart</i>
                    }

                </button>
            </div>

        </div>
    )

}
export default ProductCard