import ProductCard from "../ProductCard/ProductCard";
import './KidsProducts.css'


function KidsProducts({productList}) {
    return (
        <div className={'kids-product-card-list p17'} >
            {
                productList.filter(product=>product.category==='kids').map(product => {
                        return (
                            <div className={'kids-product-card-list_item'} key={product.id}>
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

export default KidsProducts

