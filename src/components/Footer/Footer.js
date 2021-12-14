import './Footer.css'
import {Link} from "react-router-dom";


function Footer({contacts}) {
    return (
        <div className='footer p17'>
            <div className='footer_container'>
                <div className='footer_inform'>
                    <h5>О КОМПАНИИ</h5>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <Link to={'empty'} className='footer__item-link linkTo'>
                                Новости
                            </Link>
                        </li>
                        <li className='footer__item'>
                            <Link to={'empty'} className='footer__item-link linkTo'>
                                Акции
                            </Link>
                        </li>
                        <li className='footer__item'>
                            <Link to={'empty'} className='footer__item-link linkTo'>
                                Магазины сети
                            </Link>
                        </li>
                        <li className='footer__item'>
                            <Link to={'empty'} className='footer__item-link linkTo'>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer_vac'>
                    <h5>РАБОТА У НАС</h5>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <Link to={'empty'} className='footer__item-link linkTo'>
                                Вакансии
                            </Link>
                        </li>
                        <li className='footer__item'>
                            <Link to={'empty'} className='footer__item-link linkTo'>
                                Условия работы
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer_contacts'>
                    <h5>КОНТАКТЫ</h5>
                    <a className='footer_phone link' href={contacts.phoneHref}>{contacts.phoneText}</a>
                    <div className='footer_working-hours link'>{contacts.workingHouse}</div>
                    <a className='footer_email link' href={contacts.emailHref} target={'blank'}>{contacts.email}</a>
                </div>
            </div>
            <div className='footer_bottom'>
                <div className='footer_copyright'>
                    2009-2021 © CreateX.ru — модный интернет-магазин оежды, обуви и аксессуаров.
                    Все права защищены.<br/>Доставка по всей России!
                </div>
                <div className='footer_social-links'>
                    <div className='footer_social-link-twitter'>
                        <a href={'https://twitter.com/'} target={'blank'}>
                            <img className='footer_icon'  src='/img/twitter.ico' alt = 'icon'/>
                        </a>
                    </div>
                    <div className='footer_social-link-instagram'>
                        <a href={'https://www.instagram.com/'} target={'blank'}>
                            <img className='footer_icon'  src='/img/instagram.ico' alt = 'icon'/>
                        </a>
                    </div>
                    <div className='footer_social-link-facebook'>
                        <a href={'https://www.facebook.com/'} target={'blank'}>
                        <img className='footer_icon'  src='/img/facebook.ico' alt = 'icon'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer