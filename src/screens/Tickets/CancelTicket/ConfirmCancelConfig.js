import React from 'react';
import CancelTicket from './CancelTicket';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const ConfirmCancelConfig = {
    name: Routes.TICKETSCANCELCONFIRM,
    component: CancelTicket,
    options: {
        header: ({ navigation, scene }) => (
            <Header
            title={IMLocalized('Create an account')}
                navigation={navigation}
            />
        ),
    },
};

export default ConfirmCancelConfig;
