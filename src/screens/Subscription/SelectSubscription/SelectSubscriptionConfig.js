import React from 'react';
import SelectPayment from './SelectSubscription';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const SelectSubscriptionConfig = {
    name: Routes.SUBSCRIPTIONSELECTSUBSCRIPTION,
    component: SelectPayment,
    options: {
        header: ({ navigation, scene }) => (
            <Header title={`Assinatura`} navigation={navigation} />
        ),
    },
};

export default SelectSubscriptionConfig;
