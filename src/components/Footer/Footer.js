import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer({contacts}) {
    return (
        <div className='footer p17'>
            <div className='footer_container'>
                <div className='footer_inform'>
                    <h5>О КОМПАНИИ</h5>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <a href='/index.html' className='nav-link'/>
                            Новости
                        </li>
                        <li className='nav-item'>
                            {/*<a href="/index.html" className="nav-link">*/}
                            Акции
                        </li>
                        <li className='nav-item'>
                            {/*<a href="/index.html" className="nav-link">*/}
                            Магазины сети
                            {/*</a>*/}
                        </li>
                        <li className='nav-item'>
                            {/*<a href="/index.html" className="nav-link">*/}
                            Контакты
                            {/*</a>*/}
                        </li>
                    </ul>
                </div>
                <div className='footer_vac'>
                    <h5>РАБОТА У НАС</h5>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <a href='/index.html' className='nav-link'/>
                            Вакансии
                        </li>
                        <li className='nav-item'>
                            {/*<a href="/index.html" className="nav-link">*/}
                            Условия работы
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
                            <img className='footer_icon'  src='/img/twitter.png'/>
                        </a>
                    </div>
                    <div className='footer_social-link-instagram'>
                        <a href={'https://www.instagram.com/'} target={'blank'}>
                            <img className='footer_icon'  src='/img/Instagram.svg'/>
                        </a>
                    </div>
                    <div className='footer_social-link-facebook'>
                        <a href={'https://www.facebook.com/'} target={'blank'}>
                        <img className='footer_icon'  src='/img/facebook.png'/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer