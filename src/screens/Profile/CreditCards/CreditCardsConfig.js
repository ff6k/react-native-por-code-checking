import React from 'react';
import CreditCards from './CreditCards';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const CreditCardsConfig = {
    name: Routes.PROFILECREDITCARDS,
    component: CreditCards,
    options: {
        header: ({ navigation, scene }) => (
            <Header
                title={IMLocalized('Credit cards')}
                navigation={navigation}
                iconName='add'
                router={Routes.PROFILECARDNUMBER}
            />
        ),
    },
};

export default CreditCardsConfig;
