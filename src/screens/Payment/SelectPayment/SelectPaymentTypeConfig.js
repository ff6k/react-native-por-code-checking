import React from 'react';
import SelectPayment from './SelectPayment';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const SelectPaymentTypeConfig = {
    name: Routes.PAYMENTSELECTPAYMENTTYPE,
    component: SelectPayment,
    options: {
        header: ({ navigation, scene }) => (
            <Header title={IMLocalized('Cart')} navigation={navigation} />
        ),
    },
};

export default SelectPaymentTypeConfig;
