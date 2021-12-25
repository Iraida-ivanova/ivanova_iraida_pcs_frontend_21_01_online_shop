import Banner from "../Banner/Banner";
import React from "react";
import CategoryCardList from "../CategoryCardList/CategoryCardList";
import ProductCardList from "../ProductCardList/ProductCardList";

function IndexPage({categoryCards, products }) {
    return (
        <div>
            <Banner/>
            <CategoryCardList categoryCardList={categoryCards}/>
            <ProductCardList productList={products} title={'Наши товары'} category={'all'}/>
        </div>
    )
}
export default IndexPage