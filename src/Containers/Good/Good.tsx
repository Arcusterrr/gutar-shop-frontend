import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { BuyButton, Footer, Header, Rating } from '../../Components';
import { HorizontalScrolling } from '../../Components/UI/HorizontalScrolling';
import { useServerQuery } from '../../hooks';
import { GetGuitarsById } from '../../server';
import { Product } from '../../types';

import './Good.scss';

type GoodProps = {
}

type DetailedLocation = { id: string }

export const Good: React.FC<GoodProps> = (props) => {

    const location = useParams<DetailedLocation>();
    const history = useHistory();
    const id = location.id;

    const { data } = useServerQuery('gfgasdbd', GetGuitarsById, {
        sort: 'Date',
        order: 'ASC',
        page: 1,
        id: parseInt(location.id),
    })


    if (Boolean(id) == false) {
        history.push("/goods");
        return null;
    }


    return (
        <div>
            <Header />
            <div className='Good'>
                <div className='Content'>
                    <div className='First'>
                        {/* <img className='good__Img' src={data?.img} alt="" /> */}
                        <HorizontalScrolling className='Scroller'>
                        {data?.detailedImages?.map(el => <img className="ScrollItem" src={el}></img>)}
                        </HorizontalScrolling>
                    </div>
                    <div className='Second'>
                        <div className='good__Name'>{data?.name}</div>
                        <div className='good__Description'>{data?.description}</div>
                        <div className='good__Cost'>{data?.cost} р.</div>
                        <div className='good__Buy'><BuyButton idGuitar={data?.id as number}></BuyButton></div>
                        <div className="good__Rating"><Rating rating={data?.rating as number} /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}