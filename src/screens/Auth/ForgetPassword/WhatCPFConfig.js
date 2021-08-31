import React from 'react';
import ForgetPassword from './ForgetPassword';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const WhatCPFConfig = {
    name: Routes.WHATCPF,
    component: ForgetPassword,
    options: {
        header: ({ navigation, scene }) => (
            <Header
                title={IMLocalized('Recover password')}
                navigation={navigation}
            />
        ),
    },
};

export default WhatCPFConfig;
