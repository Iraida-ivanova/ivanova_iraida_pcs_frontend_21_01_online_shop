import './Header.css';
import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedOut} from "../../app/reducers/userSlice";

function Header () {
    const counter = useSelector((state)=>state.cartItems.cartItems.length);
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
    const dispatch = useDispatch();
    return (
        <div className='header'>
            <div className='header-topbar p17'>
                <a className='header-topbar__phone-number link linkTo' href='tel:+7-495-790-35-03'>Бесплатный звонок: +7-495-790-35-03</a>
                {isLoggedIn ?
                    <Link onClick={()=>dispatch(setIsLoggedOut())} to={'/'} className='link header-topbar__link'>
                        <i className='material-icons'>account_circle</i>
                        <span className='header-topbar__link-text'>Выйти</span>
                    </Link>
                    :<div className='header-topbar__sign'>
                        <Link to={'sign_in'} className='link header-topbar__link'>
                            <i className='material-icons'>account_circle</i>
                            <span className='header-topbar__link-text'>Вход/</span>
                        </Link>
                        <Link to={'sign_up'} className='link header-topbar__link'>
                            <span className='header-topbar__link-text'>Регистрация</span>
                        </Link>
                    </div>
                    }
            </div>
            <div className='header-content p17'>
                <div className='header-content__container'>
                    <Link to={'/'}>
                        <img className='logo' src='/img/logo.png' alt='Logo'/>
                    </Link>
                        <ul className='header-content__menu'>
                            <li>
                                <Link to={'catalog'} className='header-content__link linkTo'>
                                    <div className='header-content__menu-category'>Все</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'men'} className='header-content__link linkTo'>
                                    <div className='header-content__menu-category'>Мужчины</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'women'} className='header-content__link linkTo'>
                                    <div className='header-content__menu-category'>Женщины</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'kids'} className='header-content__link linkTo'>
                                    <div className='header-content__menu-category'>Дети</div>
                                </Link>
                            </li>
                        </ul>
                </div>
                <div className='header-content__wrapper'>
                    <Link to={'cart'} className='header-content__link'>
                        <i className='material-icons'>shopping_cart</i>
                    </Link>
                    <div className='header-content__iterator'>
                        {counter>0?counter:''}
                    </div>
                </div>
            </div>
            <div className='header__bottom'></div>
        </div>
    )
}
export default Header