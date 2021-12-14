import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn, setUser} from "../../app/reducers/userSlice";


function FormLogin() {
    const [message, setMessage]= useState('');
    const [classMessage, setClassMessage] = useState('');
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
    // const [location, setLocation] = useState({state: { fromDashboard: true }});
    const dispatch = useDispatch();
    const formHandler = (e)=> {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users.some(item => item.email === e.target[0].value)) {

            if (users.some(item => item.email === e.target[0].value && item.password === e.target[1].value)) {
                const user = users.find(item => item.email === e.target[0].value && item.password === e.target[1].value)
                dispatch(setUser({
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    password: user.password
                }));
                dispatch(setIsLoggedIn());
            } else {
                setMessage('Введен неверный пароль');
            }
        } else {
            setMessage('Пользователь с таким Email не зарегистрирован');
        }
        e.preventDefault();
    }

    return (
        <div className="form-container p17">
            <form className='form' onSubmit={e=>formHandler(e)} action={'/'}>
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
                    <button className='button button-green'>Вход</button>
                </div>
                {message&&<div className={`message ${classMessage}`}>
                { message}
                    <div className='form__container-close'>
                        <button onClick={()=>setClassMessage('message-closed')} className='button form__button-close'>
                            <i  className="material-icons">close</i>
                        </button>
                    </div>
                </div>}
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

