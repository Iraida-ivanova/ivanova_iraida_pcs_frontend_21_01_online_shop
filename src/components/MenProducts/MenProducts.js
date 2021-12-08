import ProductCard from "../ProductCard/ProductCard";
import './MenProducts.css'


function MenProducts({productList}) {
    return (
        <div className={'men-product-card-list p17'} >
            {
                productList.filter(product=>product.category==='men').map(product => {
                        return (
                            <div className={'men-product-card-list_item'} key={product.id}>
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

export default MenProducts

