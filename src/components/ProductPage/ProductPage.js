import './ProductPage.css';

function ProductPage ({id=0, title='Худи', price='3000 руб.', image='/img/watch.png'}) {

    return (
        <div className='product-page' p17>
            <h1 className='product-page_title'>
                {title}
            </h1>
            <div className='product-page_container'>
                <div className='product-page_image'>
                    <img src={image} alt={'product image'}/>
                </div>
                <div className='product-page_description'>
                    <div className='product-page_price'>
                        {price}
                    </div>
                    <h2>Описание товара</h2>
                    <div className='product-page_text'>
                        Широкое худи из футера с капюшоном на подкладке и кулиске. Карман-муфта спереди. Рельефная трикотажная резинка снизу на рукавах и по нижнему краю.
                    </div>
                </div>

            </div>



        </div>
    )
}
export default ProductPage