import ProductCard from "../ProductCard/ProductCard";
import './FormLogin.css'
import {Link} from "react-router-dom";


function FormLogin() {
    return (
        <div className="form-container p17">
            <form className="form">
                <div className='form__tittle'>
                    <h3 className="form__tittle">Вход</h3>
                </div>
                <div className='form__input-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-email">Email</label>
                        <br/>
                        <input className="form__input" type="text" id="form-email" placeholder="Введите email"/>
                        <span className="error" aria-live="polite"></span>
                    </div>
                    <span className='asterisk'>*</span>
                </div>

                <br/>
                <div className='form__input-container'>

                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-password">Пароль</label>
                        <br/>
                        <input className="form__input" type="password" id="form-password" placeholder="Введите пароль"/>
                        <span className="error" aria-live="polite"></span>
                    </div>
                    <span className='asterisk'>*</span>
                </div>
                <br/>
                <br/>
                <div className="form__container-button">
                    <button className="form__button">Вход</button>
                </div>
            </form>
            <div className='form__link-cont'>
                <Link to={'/sign_up'} className='link form__link-reg'>
                    Зарегистрируйся
                </Link>

                <br/>
                если ты новый пользователь
            </div>
        </div>
    )
}

export default FormLogin

