import React from 'react';
import AddCart from './AddCart';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const AddCartConfig = {
    name: Routes.EXPERIENCESADDCART,
    component: AddCart,
    options: {
        header: ({ navigation, scene }) => (
            <Header
            title={IMLocalized('Add to cart')}
                navigation={navigation}
            />
        ),
    },
};

export default AddCartConfig;
