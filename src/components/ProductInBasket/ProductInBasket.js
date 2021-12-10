import './ProductInBasket.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function ProductInBasket ({product}) {
    const [count, setCount] = useState(1);

    const onPlus = () => {
        setCount(count + 1);
    }
    const onMinus = () => {
        setCount(count-1)
    }

    // useEffect(()=>{setPr(console.log(count* Number(pr)) )}, [count])
    return (
        <div className='product-in-basket' >
            <div className='product-in-basket__container'>
                <div className='product-in-basket__left'>
                    <div className='product-in-basket__image'>
                        <Link to={`/catalog/${product.id}`}>
                            <img src={product.image} alt={'product image'}/>
                        </Link>
                    </div>
                    <div className='product-in-basket__title'>
                        <Link className='linkTo product-in-basket__link' to={`/catalog/${product.id}`}>{product.title}</Link>
                    </div>
                </div>
                <div className='product-in-basket__right'>
                    <div className='product-in-basket__wrapper'>
                        <button onClick={onMinus} className='product-in-basket__remove' disabled={count<=0?true:false} >
                            <i className="material-icons">remove</i>
                        </button>
                        <div className='product-in-basket__iterator'>
                            {count}
                        </div>
                        <button onClick={onPlus} className='product-in-basket__add'>
                            <i className="material-icons">add</i>
                        </button>
                        </div>
                    <div className='product-in-basket__price'>
                    {product.price}
                    </div>
                    <button className='product-in-basket__delete-button'>
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </div>

        </div>
    )

}

export default ProductInBasket