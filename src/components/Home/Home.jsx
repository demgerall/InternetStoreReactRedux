import React from 'react';
import { useSelector } from 'react-redux';

import { Poster } from '../Poster/Poster';
import { Products } from '../Products/Products';

import './Home.module.scss';

export const Home = () => {
    const { list } = useSelector(({ products }) => products);

    return (
        <>
            <Poster />
            <Products products={list} amount={5} title="Trending" />
        </>
    );
};
