import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {Register} from '../../server';
import {useServerMutation, useAccessToken} from '../../hooks';

import './reset.scss';
import './style.css';
import { Link } from 'react-router-dom';

type RegisterPageProps = {
}

type FormType = {
    login: string
    password: string
}


export const RegisterPage: React.FC<RegisterPageProps> = (props) => {
    const {
        register,
        handleSubmit,
    } = useForm<FormType>();

    const { setToken } = useAccessToken();

    const { mutate: reg, data } = useServerMutation('asdasdsa', Register);

    const onRegister = async (data: FormType) => {
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
            <p className="sign-in__panel">GuitarShop</p>
            {/* <div className="sign-in__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              veritatis expedita error, dolorum temporibus esse, tempore illum
              voluptas, hic impedit sequi adipisci quo amet ad. Iusto facere
              illo rerum impedit!
            </div> */}
          </div>
        </div>
        <div className="sign-in__right">
          <form className="sign-in__form form">
            <h2 className="form__title title">Регистрация</h2>
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
            <button className="form__btn btn" onClick={handleSubmit(onRegister)}>Зарегистрироваться</button>
            <br />  
            <Link to="/login" className="form__btn btn text_button">Вход</Link>
          </form>
        </div>
      </section>
    </div>            
        </div>
    );
}