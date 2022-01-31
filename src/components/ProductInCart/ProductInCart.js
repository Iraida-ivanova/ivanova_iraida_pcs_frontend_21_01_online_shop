import './ProductInCart.css';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import {removeItemFromCart} from "../../app/reducers/cartSlice";
import {increment, decrement,getTotalPrice} from "../../app/reducers/cartSlice";


function ProductInCart ({product}){
    const dispatch = useDispatch();

    const onPlus =()=>{
        dispatch(increment(product))
        dispatch(getTotalPrice(product))
    }
    const onMinus =()=>{
        dispatch(decrement(product))
        dispatch(getTotalPrice(product))
    }
    return (
        <div className='product-in-cart' >
            <div className='product-in-cart__container'>
                <div className='product-in-cart__left'>
                    <div className='product-in-cart__image'>
                        <Link to={`/catalog/${product.id}`}>
                            <img src={product.image} alt={'product'}/>
                        </Link>
                    </div>
                    <div className='product-in-cart__title'>
                        <Link className='linkTo product-in-cart__link' to={`/catalog/${product.id}`}>{product.title}</Link>
                    </div>
                </div>
                <div className='product-in-cart__right'>
                    <div className='product-in-cart__right-row'>
                        <div className='product-in-cart__wrapper'>
                            <button onClick={onMinus} className='product-in-cart__remove' disabled={product.quantity <= 0} >
                                <i className="material-icons">remove</i>
                            </button>
                            <div className='product-in-cart__counter'>
                                {product.quantity}
                            </div>
                            <button onClick={onPlus} className='product-in-cart__add'>
                                <i className="material-icons">add</i>
                            </button>
                        </div>
                        <div className='product-in-cart__price'>
                            {product.totalPrice} руб.
                        </div>
                        <button className='product-in-cart__delete-button' onClick={()=>dispatch(removeItemFromCart(product.id))}>
                            <i className="material-icons">delete</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductInCart