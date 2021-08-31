import React from 'react';
import Details from './Details';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';

const DetailsConfig = {
    name: Routes.TICKETSDETAILS,
    component: Details,
    options: {
        headerShown: false,
    },
};

export default DetailsConfig;
