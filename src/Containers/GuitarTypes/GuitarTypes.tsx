import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer, GoodCard, Header } from '../../Components';
import { Product, User } from '../../types';
import {GetGuitarTypes} from '../../server';
import {useServerQuery} from '../../hooks';

import './GuitarTypes.scss'

type GuitarTypesProps = {
}

const server = 'https://localhost:5001/';

export const GuitarTypesPage: React.FC<GuitarTypesProps> = (props) => {

    const {data} = useServerQuery('gfgbd', GetGuitarTypes, {
        sortName:'ASC',
    })

    const typesToShow = data?.items?.map((guitarType) => (
        <Link to={`goods?typeId=${guitarType.id}`}> <div className="type">{guitarType.name}</div></Link>
    ))

    return (
        <div className="App">
            <Header/>
            <div className="typesContainer">
                {typesToShow}
            </div>
            <Footer/>
        </div>
    );
}