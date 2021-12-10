import './Basket.css'
import ProductInBasket from "../ProductInBasket/ProductInBasket";
import {Link} from "react-router-dom";

function Basket({productList=[]}) {

    return(
            <div className='basket'>
                <h1 className='basket__title'>Корзина</h1>
                {
                    productList.length>0
                        ?
                        <div>
                            <ul className='basket__list'>
                                {productList.map(item=>{
                                    return <li className='basket__item' key={item.id}>
                                        <ProductInBasket product={item}/>
                                        <div className='basket__separator'></div>
                                    </li>

                                })}
                            </ul>
                            <div className={'basket__button-container'}>
                                    <Link to={'/sign_in'} className='link'>
                                        <button className='basket__button'>
                                            Оформить заказ
                                        </button>
                                    </Link>
                            </div>
                        </div>

                        : <div className='basket__empty'>
                            <img src='/img/empty-cart.png' alt={'Cart'}/>
                            <h2>Корзина пустая</h2>
                            <p>Добавьте товары в корзину</p>
                            <Link  to={'/'} className='link'>
                                <button className='basket__button'>
                                    Вернуться назад
                                </button>
                            </Link>
                        </div>
                }


            </div>

    )
}
export default Basket