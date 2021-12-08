import './Header.css';
import React from "react";
import {Link} from "react-router-dom";

function Header () {

    return (
        <div className='header'>
            <div className='header-topbar p17'>
                <div className="header-topbar_phone-number">Бесплатный звонок: +7 (800) 888-88-88</div>
                <a className='header-topbar_link' href={'https://mail.ru/'}>
                    <i className='material-icons'>account_circle</i>
                    <span className='header-topbar_link-text'>Войти</span>
                </a>
            </div>
            <div className='header_content p17'>
                <div className='header_container'>
                    <img className='logo' src='img/logo.png'/>
                        <ul className='header_menu'>
                            <li className='header_menu-category'>
                                <Link to={'catalog'} className='header_link'>Все</Link>
                            </li>
                            <li className='header_menu-category'>
                                <Link to={'men'} className='header_link'>Мужчины</Link>
                            </li>
                            <li className='header_menu-category'>
                                <Link to={'women'} className='header_link'>Женщины</Link>
                            </li>
                            <li className='header_menu-category'>
                                <Link to={'kids'} className='header_link'>Дети</Link>
                            </li>

                        </ul>
                </div>
                <div className='header_content_wrapper'>
                    <Link to={'basket'} className='header_link'>
                        <i className='material-icons'>shopping_cart</i>
                    </Link>
                    <div className='header_content_iterator'>
                        1
                    </div>
                </div>
            </div>
            <div className='header_bottom'></div>
        </div>
    )
}
export default Header