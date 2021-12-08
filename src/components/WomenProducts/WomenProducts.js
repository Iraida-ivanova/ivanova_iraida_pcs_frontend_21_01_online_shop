import ProductCard from "../ProductCard/ProductCard";
import './WomenProducts.css'


function WomenProducts({productList}) {
    return (
        <div className={'women-product-card-list p17'} >
            {
                productList.filter(product=>product.category==='women').map(product => {
                        return (
                            <div className={'women-product-card-list_item'} key={product.id}>
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

export default WomenProducts

