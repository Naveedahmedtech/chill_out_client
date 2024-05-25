// src/routes.js
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import PrivateRouteWrapper from './components/PrivateRouteWrapper';
import PublicRouteWrapper from './components/PublicRouteWrapper';
import { Header } from '../pages/layout';
import { ForgotPassword, SignIn, Register, ResetPassword, VerifyCode } from '../pages/auth';
import { Chat, Create, Home, NotFound, Reels, Search } from '../pages';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<PrivateRouteWrapper />}>
                <Route path="/" element={<Header />} >
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='search' element={<Search />} />
                    <Route path='create-reels' element={<Create />} />
                    <Route path='reels' element={<Reels />} />
                    <Route path='chat' element={<Chat />} />
                </Route>
            </Route>
            <Route element={<PublicRouteWrapper />}>
                <Route path='auth/register' element={<Register />} />
                <Route path='auth/sign-in' element={<SignIn />} />
                <Route path='auth/forgot-password' element={<ForgotPassword />} />
                <Route path='auth/verify-code' element={<VerifyCode />} />
                <Route path='auth/reset-password' element={<ResetPassword />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </>
    )
);
