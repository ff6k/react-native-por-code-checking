import React from 'react';
import DetailSchedule from './DetailSchedule';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';

const DetailScheduleConfig = {
    name: Routes.TICKETSDETAILSCHEDULE,
    component: DetailSchedule,
    options: {
        headerShown: false,
    },
};

export default DetailScheduleConfig;
