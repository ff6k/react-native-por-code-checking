import React from 'react';
import SelectDate from './SelectDate';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const SelectDateConfig = {
    name: Routes.EXPERIENCESSELECTDATE,
    component: SelectDate,
    options: {
        header: ({ navigation, scene }) => (
            <Header
            title={IMLocalized('select date')}
                navigation={navigation}
            />
        ),
    },
};

export default SelectDateConfig;
