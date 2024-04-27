// src/routes.js
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import PrivateRouteWrapper from './components/PrivateRouteWrapper';
import PublicRouteWrapper from './components/PublicRouteWrapper';
import { Header } from '../pages/layout';
import Home from '../pages/home/Home';
import { Login, Register } from '../pages/auth';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<PrivateRouteWrapper />}>
                <Route path="/" element={<Header />} >
                    <Route index element={<Home />} />
                </Route>
            </Route>
            <Route element={<PublicRouteWrapper />}>
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </>
    )
);
