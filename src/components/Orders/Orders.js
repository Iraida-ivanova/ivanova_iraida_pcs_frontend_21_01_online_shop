import './Orders.css'
import ProductInBasket from "../ProductInBasket/ProductInBasket";
import {Link} from "react-router-dom";

function Orders({productList=[]}) {

    return(
            <div className='orders'>
                <h1 className='orders__title'>Мои заказы</h1>
                <div>
                    <ul className='orders__list'>
                        {productList.map(item=>{
                            return <li className='orders__item' key={item.id}>
                                        <ProductInBasket product={item}/>
                                        <div className='orders__separator'></div>
                            </li>
                        })}
                    </ul>
                    <div className={'orders__button-container'}>

                            <button className='basket__button'>
                                Оформить заказ
                            </button>


                    </div>
                </div>
            </div>

    )
}
export default Orders