import ProductCard from "../ProductCard/ProductCard";
import './FormRegister.css'


function FormRegister() {
    return (
        <div className="form-container p17">
            <form className="form">
                <div className='form__tittle'>
                    <h3 className="form__tittle">Регистрация</h3>
                </div>
                <div className='form__input-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-name">Имя</label>
                        <br/>
                        <input className="form__input" type="text" id="form-name" placeholder="Введите имя"/>
                        <span className="error" aria-live="polite"></span>
                    </div>
                    <span className='asterisk'>*</span>
                </div>
                <br/>
                <div className='form__input-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-lastName">Фамилия</label>
                        <br/>
                        <input className="form__input" type="text" id="form-lastName" placeholder="Введите фамилию"/>
                        <span className="error" aria-live="polite"></span>
                    </div>
                    <span className='asterisk'>*</span>
                </div>
                <br/>
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
                <div className='form__checkbox-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__checkbox-wrapper">
                        <input className="form__checkbox" type="checkbox" id="input-checkbox"/>
                        <div className="form__checkbox-mark"></div>
                        <label className="form__checkbox-label" htmlFor="input-checkbox">Я согласен с <a
                            className="link" href="https://mail.ru/" target="_blank">Правилами пользования
                            приложением</a></label>
                    </div>
                    <span className="error" id='checkbox-error' aria-live="polite"></span>
                    <span className='asterisk'>*</span>
                </div>
                <br/>
                <div className="form__container-button">
                    <button className="form__button">Регистрация</button>
                </div>
            </form>
        </div>
    )
}

export default FormRegister

