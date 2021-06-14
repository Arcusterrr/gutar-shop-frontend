import React from 'react';
import { Header, Footer, CardMaterial } from '../../Components';
import { LoadingScreen } from '../../Components/UI/LoadingScreen';
import { useServerQuery } from '../../hooks';
import { GetOrders } from '../../server';

import './PersonPage.scss'

type PersonPageProps = {
}

export const PersonPage: React.FC<PersonPageProps> = (props) => {

    const { data, isLoading } = useServerQuery('gfgasdbd', GetOrders, undefined);
    console.log(data);

    if (isLoading) {
        return <LoadingScreen/>;
    }

    const ordersToShow = Boolean(data) == false ? null: data?.map((item) => (
        <div className="order">
            <div className="orderInfo">
                <div>Адрес доставки: {item?.address}</div>
                <div>Дата заказа: {new Date(item?.orderDate).toLocaleString('ru-RU')}</div>
            </div>
            <div className="order__content">
                {item?.items?.map((item) => (
                    <div key={item.id} className="guitar">
                        <CardMaterial guitarName={item.guitar.name} guitarCost={item.guitar.cost} guitarImg={item.guitar.img} />
                    </div>
                ))}
            </div>
        </div>
    ))

    return (
        <div>
            <Header />
            <div className="container">
                {ordersToShow}
            </div>
            <Footer />
        </div>
    );
}