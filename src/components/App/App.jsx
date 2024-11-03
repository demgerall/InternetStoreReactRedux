import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppRoutes } from '../Routes/Routes';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';

import './App.module.scss';

import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from '../../features/products/productsSlice';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div
            className="app"
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
        >
            <Header />

            <div
                className="container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '20% 78%',
                    gap: '2%',
                }}
            >
                <Sidebar />
                <AppRoutes />
            </div>

            <Footer />
        </div>
    );
};
