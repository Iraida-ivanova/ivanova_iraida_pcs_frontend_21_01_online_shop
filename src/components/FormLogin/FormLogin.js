import {Link, Navigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn, setUser} from "../../app/reducers/userSlice";


function FormLogin() {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
    const dispatch = useDispatch();

    const formHandler = (e)=> {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users'));
        if (users.some(item => item.email === e.target[0].value)) {
            setEmailError('');
            if (users.some(item => item.email === e.target[0].value && item.password === e.target[1].value)) {
                setPasswordError('');
                const user = users.find(item => item.email === e.target[0].value && item.password === e.target[1].value)
                dispatch(setUser({
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    password: user.password
                }));
                dispatch(setIsLoggedIn());
            } else {
                setPasswordError('Введен неверный пароль');
            }
        } else {
            setEmailError('Пользователь с таким Email не зарегистрирован');
        }
    }

    return (

        <div className="form-container p17">
            {isLoggedIn && <Navigate to='/'/>}
            <form className='form' onSubmit={formHandler} action={'/'}>
                <div className='form__tittle'>
                    <h3 className="form__tittle">Вход</h3>
                </div>
                <div className='form__input-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-email">Email</label>
                        <br/>
                        <input className="form__input" type="text" id="form-email" placeholder="Введите email"/>
                        {emailError && <span className="error" aria-live="polite">{emailError}</span>}
                    </div>
                    <span className='asterisk'>*</span>
                </div>

                <br/>
                <div className='form__input-container'>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-password">Пароль</label>
                        <br/>
                        <input className="form__input" type="password" id="form-password" placeholder="Введите пароль"/>
                        {passwordError && <span className="error" aria-live="polite">{passwordError}</span>}
                    </div>
                    <span className='asterisk'>*</span>
                </div>
                <br/>
                <br/>
                <div className="form__container-button" >
                    <button className='button button-green' type={"submit"}>Вход</button>
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

