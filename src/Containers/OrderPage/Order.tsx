import React, { useEffect } from 'react';
import { Header, Footer, DialogWindow } from '../../Components';
import { useServerMutation, useServerQuery } from '../../hooks';
import { CreateOrder, GetCartItems, removeCartItem } from '../../server';
import { Redirect, } from 'react-router-dom';

import './Order.scss'
import { LoadingScreen } from '../../Components/UI/LoadingScreen';

type OrderProps = {
}

const server = 'https://localhost:5001/';

export const Order: React.FC<OrderProps> = (props) => {

    let cost = 0;
    let count = 0;

    const { data, isLoading, refetch } = useServerQuery('gfgasdbd', GetCartItems, undefined);

    const { mutateAsync } = useServerMutation('gfgasdbd1', removeCartItem);
    const nk = useServerMutation('wafawrsa', CreateOrder);

    if (isLoading) {
        return <LoadingScreen/>;
    }

    const deleteItem = (cartId: number) => {
        mutateAsync({
            id: cartId
        }).then(() => {
                refetch();
        });
    }   

    const createOrder = (address:string) => {
        console.log(address);
        
        nk.mutateAsync({
            address: address
        }).then(() =>{
            refetch();
        });
    }

    function totalPrice() {
        data?.items?.forEach(item => {
            cost += item.guitar.cost;
            count++;
        });
        if (count != 0) {
            return <><div className="cartWindow">
                <div className="goodsCount">Товаров в корзине: <span>{count}</span></div>
                <div className="cartSum">Итого к оплате: <span>{cost} ₽</span></div>
            </div>
            <div className="orderButton"><DialogWindow redirect='guitartypes' submitHandle={(address) => createOrder(address)}/></div>
            </>
        }else{
            return <div className="empty">Корзина пуста</div>
        }
    }

    const cartItemsToShow = data?.items?.map((item) => (
        <div className="cartItem">
            <div className="cartItem__picture">
                <img src={item.guitar.img} alt="" />
            </div>
            <div className="cartItem__info">
                <div className="info__name">{item.guitar.name}</div>
                <div className="info__cost">Цена: {item.guitar.cost} ₽</div>
                <div className="info__count">Количество: 1</div>
            </div>
            <div className="cartItem__buttons">
                <button onClick={() => deleteItem(item.guitar.id)}><div>Удалить</div></button>
            </div>
        </div>
    ))

    return (
        <div>
            <Header />
            <div className="container">
                {cartItemsToShow}
                {totalPrice()}
            </div>
            <Footer />
        </div>
    );
}