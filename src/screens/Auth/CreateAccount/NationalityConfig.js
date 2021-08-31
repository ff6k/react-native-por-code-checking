import React from 'react';
import CreateAccount from './CreateAccount';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const NationalityConfig = {
    name: Routes.NATIONALITY,
    component: CreateAccount,
    options: {
        header: ({ navigation, scene }) => (
            <Header
                title={IMLocalized('Create an account')}
                navigation={navigation}
            />
        ),
    },
};

export default NationalityConfig;
