import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductCardList.css'
import {useSelector} from "react-redux";


function ProductCardList({productList=[],title,category='all'}) {
    const cartProducts = useSelector((state)=>state.cartItems.cartItems);
    return (
        <div className='product-card-list p17' >
            <h2 className='product-card-list__title'>{title}</h2>
            <div className='product-card-list__items'>
                {
                    category==='all'
                        ?
                        productList.map(item => {
                            return (
                                <div className={'product-card-list__item'} key={item.id} >
                                    <ProductCard  id={item.id}
                                                  title={item.title}
                                                  image={item.image}
                                                  category={item.category}
                                                  price={item.price}
                                    />
                                </div>)})
                        :
                        productList.filter(product=>product.category===category).map(item => {
                            return (
                                <div className={'product-card-list__item'} key={item.id}>
                                    <ProductCard id={item.id}
                                                 title={item.title}
                                                 image={item.image}
                                                 category={item.category}
                                                 price={item.price}
                                                 added={cartProducts.some((product)=>product.id===item.id)}
                                    />
                                </div>
                            )})}
                <div className='filling-empty-space-childs'></div>
                <div className='filling-empty-space-childs'></div>
                <div className='filling-empty-space-childs'></div>

            </div>
        </div>
    )
}

export default ProductCardList

