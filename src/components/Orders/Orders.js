import './Orders.css'
import CartWithProducts from "../Cart/CartWithProducts";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import {Link} from "react-router-dom";

function Orders() {
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
    const [message, setMessage]= useState('');
    const [classMessage, setClassMessage] = useState('');
    return(
            <div className={'cart p17'}>
                {
                    !isLoggedIn ?
                        <div className='orders__not-logged p17'>
                            Чтобы оформить заказ, нужно <Link to={'/sign_in'} className='linkTo order__link'>
                            войти
                        </Link> или <Link to={'/sign_up'} className='linkTo order__link'>
                            зарегистрироваться
                        </Link>, если вы новый пользователь
                        </div>
                    :
                    <div>
                        <h1 className={'orders__title'}>Оформление заказа</h1>
                        <h2 className='orders__title'>Товары в корзине</h2>
                        <CartWithProducts/>
                        <div className='order'>
                            <h2 className='orders__title'>Оформить заказ</h2>
                            <div className='order__form-container' >
                                <form className='order__form'>
                                    <div className='orders__form-group'>
                                        <label className='orders__label' htmlFor='phone'>Телефон</label>
                                        <input className='form__input' id="phone" placeholder="Ваш телефон"/>
                                    </div>
                                    <div className='orders__form-group'>
                                        <label className='orders__label' htmlFor="address">Адрес доставки</label>
                                        <input className='form__input' id="address" placeholder="Адрес доставки"/>
                                    </div>
                                    <div className='orders__form-group form-check'>
                                        <input type="checkbox" className="form-check-input" id="agreement"/>
                                            <label className="form-check-label" htmlFor="agreement">Согласен с правилами
                                                доставки</label>
                                    </div>

                                    <button onClick={(e)=>{e.preventDefault();
                                        setClassMessage('');
                                        setMessage('Сервис временно недоступен')}} className='button button-green'
                                    >
                                        Оформить заказ
                                    </button>
                                    { message &&
                                    <div className={`message ${classMessage}`}>
                                        { message }
                                        <div className='form__container-close'>
                                            <button onClick={(e)=>{e.preventDefault(); setClassMessage('message-closed')}} className='button form__button-close'>
                                                <i  className="material-icons">close</i>
                                            </button>
                                        </div>
                                    </div>
                                    }
                                </form>

                            </div>
                        </div>
                    </div>
                }

            </div>

    )
}
export default Orders