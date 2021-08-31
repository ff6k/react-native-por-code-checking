import React from 'react';
import _ from 'lodash';
import { Routes } from '~/app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import SuccessScreen from '../../../components/SuccessScreen';

// create a component
const Success = ({ navigation }) => {
    const go = () => {
        navigation.navigate(Routes.EXPLORE);
    };

    return (
        <SuccessScreen
            iconName="close"
            title={`Seus ingressos foram adicionados ao carrinho`}
            description={`Lorem ipsum is placeholder text commonly used in
            the graphic, print, and publishing industries`}
            buttonTitle={`Ver carrinho`}
            bottomText={`Continur navegando`}
            onClose={go}
            onPress={() => navigation.navigate(Routes.PAYMENTDASHBOARD)}
            onBottomTextPress={() =>
                navigation.navigate(Routes.EXPERIENCESDASHBOARD, {from: Routes.EXPERIENCESSUCCESSADDCART})
            }
        />
    );
};

//make this component available to the app
export default Success;
