import './ProductInBasket.css';
import {useEffect, useState} from "react";

function ProductInBasket ({product}) {
    const [count, setCount] = useState(0);

    const onPlus = () => {
        setCount(count + 1);
    }
    const onMinus = () => {
        setCount(count-1)
    }
    // useEffect(()=>{setPr(console.log(count* Number(pr)) )}, [count])
    return (
        <div className='product-in-basket' >
            <div className='product-in-basket_container'>
                <div className='product-in-basket_left'>
                    <div className='product-in-basket_image'>
                        <img src={product.image} alt={'product image'}/>
                    </div>
                    <div className='product-in-basket_title'>
                        {product.title}
                    </div>
                </div>
                <div className='product-in-basket_right'>
                    <div className='product-in-basket_wrapper'>
                        <button onClick={onMinus} className='product-in-basket_remove' >
                            <i className="material-icons">remove</i>
                        </button>
                        <div className='product-in-basket_iterator'>
                            {count}
                        </div>
                        <button onClick={onPlus} className='product-in-basket_add'>
                            <i className="material-icons">add</i>
                        </button>
                        </div>
                    <div className='product-in-basket_price'>
                    {product.price}
                    </div>
                    <button className='product-in-basket_delete-button'>
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </div>

        </div>
    )

}

export default ProductInBasket