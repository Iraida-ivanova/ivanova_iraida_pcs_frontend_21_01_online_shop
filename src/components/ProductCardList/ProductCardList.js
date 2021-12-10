import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductCardList.css'


function ProductCardList({productList=[],title, addToBasket,category='all'}) {

    return (
        <div className=' p17' >
            <h2 className='product-card-list__title'>{title}</h2>
            <div className='product-card-list'>
                {
                    category==='all'
                        ?
                        productList.map(product => {
                            return (
                                <div className={'product-card-list_item'} key={product.id} >
                                    <ProductCard id={product.id}
                                                 title={product.title}
                                                 price={product.price}
                                                 image={product.image}
                                                 onBasket={addToBasket}
                                    />
                                </div>)})
                        :
                        productList.filter(product=>product.category===category).map(product => {
                            return (
                                <div className={'product-card-list_item'} key={product.id}>
                                    <ProductCard id={product.id}
                                                 title={product.title}
                                                 price={product.price}
                                                 image={product.image}
                                                 onBasket={addToBasket}
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

