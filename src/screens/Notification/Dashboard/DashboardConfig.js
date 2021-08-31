import React from 'react';
import Dashboard from './Dashboard';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const DashboardConfig = {
    name: Routes.NOTIFICATIONDASHBOARD,
    component: Dashboard,
    options: {
        header: ({ navigation, scene }) => (
            <Header title={`Suas notificações`} navigation={navigation} />
        ),
    },
};

export default DashboardConfig;
