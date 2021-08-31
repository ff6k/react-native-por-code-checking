import React from 'react';
import Wallet from './Wallet';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';

const WalletConfig = {
    name: Routes.WALLET,
    component: Wallet,
    options: {
        headerShown: false,
    },
};

export default WalletConfig;
