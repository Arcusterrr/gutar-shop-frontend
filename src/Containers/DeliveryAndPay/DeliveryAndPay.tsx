import React from 'react';
import { BuyButton, Footer, Header, Rating } from '../../Components';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import './DeliveryAndPay.scss';
import { DividerProps } from '@material-ui/core';

type DeliveryAndPayProps = {
}



export const DeliveryAndPay: React.FC<DeliveryAndPayProps> = (props) => {

    return (
        <div>
            <Header />
            <div className='content_del'>
                <div className="bold">Курьерская доставка</div>
                <div><b>Доставка по Челябинску</b></div>

                <div><b>Доставка на следующий день</b></div>
                <br />
                <div>Главный магазин находится в Челябинске по адресу Савина 18. Доставка по городу Челябинск</div>

                <div>Время доставки – осуществляется  в течение  дня.</div>

                <br />
                <div><b>Условия получения заказа на следующий день</b></div>
                <br />

                <ul>
                    <li>Для доставки на следующий день заказ необходимо оформить  до 12:00 часов,  все товары   должны быть в наличии в городе доставки.</li>
                    <li>При оформлении  после 12.00 часов выбирайте доступные даты  для получения заказа.</li>
                </ul>
                <div className="delivery-country">
                    <h3>Доставка и оплата по России</h3>
                    <ul>
                        <li>
                            <AccountBalanceWalletIcon fontSize="large"/>
                            <div>
                            Наличными при получении(кроме СНГ)
                            </div>
                        </li>
                        <li>
                            <LocalShippingIcon fontSize="large"/>
                            <div>Надежные транспортные компании</div>
                            </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}