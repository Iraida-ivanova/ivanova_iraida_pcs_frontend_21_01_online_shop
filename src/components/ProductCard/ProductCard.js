import React, {useState} from 'react';
import './ProductCard.css';

function ProductCard ({id=0, title='', price='', image='', onBasket}) {
    const [isAdded, setIsAdded] = useState(false);
    const onClickBasket = () => {
        onBasket({id, title,price,image});
        setIsAdded(!isAdded)
    }
    return (
        <div className={'product-card'}>
            <div className='product-card_image'>
                <img src={image} alt={'product card'}/>
            </div>
            <h2 className={'product-card_title'}>
                {title}
            </h2>
            <div className={'product-card_container'}>
                <div className={'product-card_price'}>
                    {price}
                </div>
                <button onClick={onClickBasket} className={'product-card_basket'}>
                    {
                        isAdded?<i className='material-icons checked' >check_box</i>:<i className='material-icons' >shopping_cart</i>
                    }

                </button>
            </div>

        </div>
    )

}
export default ProductCard