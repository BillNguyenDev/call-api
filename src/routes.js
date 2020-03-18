import React from 'react';

import HomePage from './papes/HomePape';
import ProductListPage from './papes/ProductListPage';
import ProductActionPage from './papes/ProductActionPage';
import NotFoundPage from './papes/NotFoundPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match }) => <ProductActionPage match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;