import React from 'react';
import _ from 'lodash';
import { Routes } from '~/app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import SuccessScreen from '../../../components/SuccessScreen';

// create a component
const ShareCode = ({ navigation }) => {
    const go = () => {
        navigation.navigate(Routes.TICKETSDASHBOARD);
    };

    return (
        <SuccessScreen
            iconName="close"
            title={`Tudo certo! Acabamos de cancelar sua solictação`}
            description={`Lorem ipsum is placeholder text commonly used in
        the graphic, print, and publishing industries`}
            buttonTitle={`Continuar`}
            onClose={go}
            onPress={go}
        />
    );
};

//make this component available to the app
export default ShareCode;
