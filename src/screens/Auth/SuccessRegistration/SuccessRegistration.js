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
            iconName="close"
            title={IMLocalized('His registration was completed successfully!')}
            description={IMLocalized(
                `Select 3 or more music styles, this way we'll help you suggest the best experiences and events for you!`,
            )}
            buttonTitle={IMLocalized('save interests')}
            onClose={go}
            onPress={go}
        />
    );
};

//make this component available to the app
export default Success;
