import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../Components'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router';

import './reset.scss';
import './style.css';
import { useAccessToken, useServerMutation } from '../../hooks';
import { Login } from '../../server';

type LoginPageProps = {
}

type FormType = {
  login: string
  password: string
}


export const LoginPage: React.FC<LoginPageProps> = (props) => {
  const {
    register,
    handleSubmit,
} = useForm<FormType>();

const { setToken } = useAccessToken();

const { mutate: reg, data } = useServerMutation('asdasdsa', Login);

const onLogin = async (data: FormType) => {
  reg({
    username: data.login,
    password: data.password,
  });
}

useEffect(() => {
  if (data?.token) {
    setToken(data.token);
  }
}, [data]);


  return (
    <div>
      <div className="wrapper">
        <h1 className="visually-hidden">Вход</h1>
        <section className="sign-in">
          <div className="sign-in__info">
            <div className="sign-in__lamp lamp"></div>
            <div className="sign-in__lamp lamp"></div>
            <div className="sign-in__lamp lamp"></div>
            <img className="sign-in__img" src="Images/image.png" alt="" />
            <div className="sign-in__content">
              <Link className="sign-in__panel" to='/'><p>GuitarShop</p></Link>
            </div>
          </div>
          <div className="sign-in__right">
            <form className="sign-in__form form">
              <h2 className="form__title title">Вход</h2>
              <div className="form__row">
                <label className="form__label" htmlFor="email">Имя пользователя</label>
                <input
                  className="form__input"
                  type="email"
                  id="email"
                  name="login"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Поле обязательно'
                    },
                  })}
                  placeholder="Введите имя пользователя"
                />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="password">Пароль</label>
                <input
                  className="form__input"
                  type="password"
                  id="password"
                  placeholder="Введите пароль"
                  name="password"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Поле обязательно'
                    },
                  })}
                />
              </div>
              <button className="form__btn btn" onClick={handleSubmit(onLogin)}>Войти</button>
              <br />
              <Link to="/register" className="form__btn btn text_button">Регистрация</Link>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}