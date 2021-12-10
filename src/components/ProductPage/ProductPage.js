import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import './ProductPage.css'

function ProductPage({products}) {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{setProduct({...products.find( item=>item.id===Number(productId))})},[])

    return (

        <div className='product-page p17'>
            <h1 className='product-page__title'>
                {product.title}
            </h1>
            <div className='product-page__container'>
                <div className='product-page__image'>
                    <img src={product.image} alt={'product image'}/>
                </div>
                <div className='product-page__description'>
                    <div className='product-page__price'>
                        {product.price}
                    </div>
                    <h2>Описание товара</h2>
                    <div className='product-page__text'>
                        Широкое худи из футера с капюшоном на подкладке и кулиске. Карман-муфта спереди. Рельефная трикотажная резинка снизу на рукавах и по нижнему краю.
                    </div>
                </div>

            </div>



        </div>
    )
}
export default ProductPage