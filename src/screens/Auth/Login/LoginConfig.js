import React from 'react';
import Login from './Login';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';

const LoginConfig = {
    name: Routes.LOGIN,
    component: Login,
    options: {
        headerShown: false,
    },
};

export default LoginConfig;
