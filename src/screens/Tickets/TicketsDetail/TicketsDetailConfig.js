import React from 'react';
import TicketsDetail from './TicketsDetail';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const TicketsDetailConfig = {
    name: Routes.TICKETSDETAIL,
    component: TicketsDetail,
    options: {
        header: ({ navigation, scene }) => (
            <Header
            title={IMLocalized('Ticket Details')}
                navigation={navigation}
            />
        ),
    },
};

export default TicketsDetailConfig;
