import React from 'react';
import Dashboard from './Dashboard';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';

const DashboardConfig = {
    name: Routes.EXPERIENCESDASHBOARD,
    component: Dashboard,
    options: {
        headerShown: false,
    },
};

export default DashboardConfig;
