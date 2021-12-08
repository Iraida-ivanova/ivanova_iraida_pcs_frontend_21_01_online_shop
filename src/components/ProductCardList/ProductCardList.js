import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductCardList.css'


function ProductCardList({productList}=[]) {
    return (
        <div className={'product-card-list p17'} >
            {
                productList.map(product => {
                        return (
                            <div className={'product-card-list_item'} key={product.id}>
                                <ProductCard id={product.id}
                                            title={product.title}
                                            price={product.price}
                                            image={product.image}
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default ProductCardList

