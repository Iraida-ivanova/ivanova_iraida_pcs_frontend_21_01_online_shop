import Banner from "../Banner/Banner";
import bannerImg from "../../mock3";
import React from "react";
import CategoryCardList from "../CategoryCardList/CategoryCardList";
import ProductCardList from "../ProductCardList/ProductCardList";

function IndexPage({categoryCards, products }) {
    return (
        <div>
            <Banner banner={bannerImg}/>
            <CategoryCardList categoryCardList={categoryCards}/>
            <ProductCardList productList={products} title={'Наши товары'} category={'all'}/>
        </div>
    )
}
export default IndexPage