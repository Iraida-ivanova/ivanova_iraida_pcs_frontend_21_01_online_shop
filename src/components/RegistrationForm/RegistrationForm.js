import './Form.css'
import React, { useState} from "react";
import {useDispatch} from "react-redux";
import {setUser, setIsLoggedIn} from "../../app/reducers/userSlice";
import {Link} from "react-router-dom";

function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [checkboxError, setCheckboxError] = useState('')
    const [message, setMessage]= useState('');
    const [classMessage, setClassMessage] = useState('');

    const dispatch = useDispatch();

    const formHandler = (e)=> {
        if(e.target[0].value === ''){ setNameError(' Поле обязательно для заполнения')}
        else {setNameError('')};
        if(e.target[1].value === ''){ setLastNameError(' Поле обязательно для заполнения')}
        else {setLastNameError('')};
        setEmail(e.target[2].value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target[2].value === '') {
            setEmailError(' Поле обязательно для заполнения')}
        else if (!re.test(String(e.target[2].value).toLowerCase())) {
            setEmailError('Некорректный Email')}
        else {
            setEmailError('')
        }
        setPassword(e.target[3].value)
        if (e.target[3].value.length<6) {
            setPasswordError('Пароль не должен быть короче 6 символов');
            if (!e.target[3].value){setPasswordError('Поле обязательно для заполнения')}
        }
        else {
            setPasswordError('')

        }
        setCheckbox(e.target[4].checked);
        !e.target[4].checked?setCheckboxError('Поле обязательно для заполнения') : setCheckboxError('');

        if(e.target[4].checked && !nameError && !lastNameError&& !emailError && !passwordError) {
            const users = JSON.parse(localStorage.getItem('users'));
            if(users.some(item => item.email === e.target[2].value)) {
                setMessage('Пользователь с таким Email уже существует');
            }
            else {
                users.push({name:e.target[0].value,lastName:e.target[1].value, email: e.target[2].value, password: e.target[3].value });
                localStorage.setItem('users',JSON.stringify(users));
                dispatch(setUser({name:e.target[0].value,lastName:e.target[1].value, email: e.target[2].value, password: e.target[3].value }));
                dispatch(setIsLoggedIn());
                setMessage('Поздравляем с успешной регистрацией!')
            }
        }
        e.preventDefault();
    }
    return (
        <div className="form-container p17">
            <form className='form' type='submit' onSubmit={e=>formHandler(e)}>
                <div className='form__tittle'>
                    <h3 className="form__tittle">Регистрация</h3>
                </div>
                <div className='form__input-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-name">Имя</label>
                        <br/>
                        <input className="form__input" type="text" id="form-name" placeholder="Введите имя"/>
                        {nameError && <span className="error" aria-live="polite">{nameError}</span>}
                    </div>
                </div>
                <br/>
                <div className='form__input-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-lastName">Фамилия</label>
                        <br/>
                        <input className="form__input" type="text" id="form-lastName" placeholder="Введите фамилию"/>
                        {lastNameError && <span className="error" aria-live="polite">{lastNameError}</span>}
                    </div>
                </div>
                <br/>
                <div className='form__input-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-email">Email</label>
                        <br/>
                        <input   name='email' className="form__input" type="text" id="form-email" placeholder="Введите email"/>
                        {(emailError) && <span className="error" aria-live="polite">{emailError}</span>}
                    </div>
                </div>

                <br/>
                <div className='form__input-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__inputs">
                        <label className="form__input-label" htmlFor="form-password">Пароль</label>
                        <br/>
                        <input   name='password' className="form__input" type="password" id="form-password" placeholder="Введите пароль"/>
                        {(passwordError) && <span className="error" aria-live="polite">{passwordError}</span>}
                    </div>

                </div>
                <br/>
                <div className='form__checkbox-container'>
                    <span className='asterisk'>*</span>
                    <div className="form__checkbox-wrapper">
                        <input  className="form__checkbox" type="checkbox" id="input-checkbox"/>
                        <div className="form__checkbox-mark"></div>
                        <label className="form__checkbox-label" htmlFor="input-checkbox">Я согласен с <a
                            className="link" href="https://mail.ru/" target="_blank">Правилами пользования
                            приложением</a></label>
                    </div>
                    {(!checkbox) && <span className="error" id='checkbox-error' aria-live="polite">{checkboxError}</span>}
                    <span className='asterisk'>*</span>
                </div>
                <br/>
                <div className="form__container-button">
                    <button  className='button button-green'>Регистрация</button>
                </div>
            </form>
            {message&&<div className={`message ${classMessage}`}>
                { message}
                <div className='form__container-close'>
                    <button onClick={()=>setClassMessage('message-closed')} className='button form__button-close'>
                        <i  className="material-icons">close</i>
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default RegistrationForm

