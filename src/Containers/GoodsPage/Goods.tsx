import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer, GoodCard, Header } from '../../Components';
import { LoadingScreen } from '../../Components/UI/LoadingScreen';
import {useServerMutation} from '../../hooks';
import { GetGuitars } from '../../server';

import './Goods.scss'

export const GoodsPage: React.FC = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const typeId = urlParams.get('typeId');
    const page = urlParams.get('page');
    const currentPage = page ? Number(page) : 1;

    const { data, isLoading, mutate } = useServerMutation('gfgasdbd', GetGuitars);

    useEffect(() => {
        mutate({
            typeId: typeId ? Number(typeId) : undefined,
            sort: 'Date',
            order: 'ASC',
            page: currentPage
        });
    }, [currentPage]);

    if (isLoading) {
        return <LoadingScreen/>;
    }

    const productsToShow = data?.items?.map((product) => (
        <GoodCard key={product.id as number} id={product.id} name={product.name} cost={product.cost} ImgPath={product.img}/>
    ));

    const pageCount = Math.ceil((data?.totalCount || 0) / 10);

    console.log(pageCount, data?.totalCount);
    
    
    const ar = [];

    for (let index = 0; index < pageCount; index++) {
        ar[index] = 0;
    }
    
    const pagesToShow = ar.map((_, index) => {
        const page = index + 1;

        console.log(page);
        

        if (page === currentPage) {
            return <div className="currentPage">{currentPage}</div>;
        }

        return <Link className="pages" to={`/goods?page=${page}${typeId ? '&typeId=' + typeId : '' }`}>{page}</Link>
    });

    return (
        <div className="App">
            <Header/>
            <div className="CardContainer">
                {productsToShow}
            </div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10px 0' }}>
                {pagesToShow}
            </div>
            <Footer/>
        </div>
    );
}