import React from 'react';
import Explore from './Explore';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';

const ExploreConfig = {
    name: Routes.EXPLORE,
    component: Explore,
    options: {
        headerShown: false,
    },
};

export default ExploreConfig;
