import React from 'react';
import ForgetPassword from './ForgetPassword';
import Header from '../../../components/Header/Header';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';

const NewPasswordConfig = {
    name: Routes.NEWPASSWORD,
    component: ForgetPassword,
    options: {
        header: ({ navigation, scene }) => (
            <Header
                title={IMLocalized('Recover password')}
                navigation={navigation}
            />
        ),
    },
};

export default NewPasswordConfig;
