import React from 'react';
import EditCart from './EditCart';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const EditCartConfig = {
    name: Routes.EXPERIENCESEDITCART,
    component: EditCart,
    options: {
        header: ({ navigation, scene }) => (
            <Header
            title={IMLocalized('Add to cart')}
                navigation={navigation}
            />
        ),
    },
};

export default EditCartConfig;
