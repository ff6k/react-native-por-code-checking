import React from 'react';
import About from './About';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';

const AboutConfig = {
    name: Routes.NOTIFICATIONABOUT,
    component: About,
    options: {
        headerShown: false,
    },
};

export default AboutConfig;
