import React from 'react';
import _ from 'lodash';
import { Routes } from '~/app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import SuccessScreen from '../../../components/SuccessScreen';

// create a component
const Success = ({ navigation }) => {
    const go = () => {
        navigation.navigate(Routes.LOGIN);
    };

    return (
        <SuccessScreen
            iconName='close'
            title={IMLocalized('Your password has been changed successfully!')}
            description={IMLocalized(
                'Now you can login to your account using the password you just created',
            )}
            buttonTitle={IMLocalized('Login')}
            onClose={go}
            onPress={go}
        />
    );
};

//make this component available to the app
export default Success;
