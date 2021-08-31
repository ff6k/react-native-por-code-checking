import React from 'react';
import CreateCard from './CreateCard';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const BillingAddressConfig = {
    name: Routes.PROFILEBILLINGADDRESS,
    component: CreateCard,
    options: {
        header: ({ navigation, scene }) => (
            <Header
            title={IMLocalized('add card')}
                navigation={navigation}
            />
        ),
    },
};

export default BillingAddressConfig;
