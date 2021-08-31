import React, { useState, useEffect } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import _ from 'lodash';
import { Routes } from '~/app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import SuccessScreen from '../../../components/SuccessScreen';
import BottomModal from '../../../components/BottomModal';
import {
    Description,
    FlexBetweenContainer,
    Spacing,
    StyledButton,
    Title,
    VFlexBetweenContainer,
} from '../../../layouts/globalLayout';
import { Button } from 'react-native-elements';

// create a component
const Success = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 1000);
    }, []);

    const go = () => {
        navigation.navigate(Routes.EXPLORE);
    };

    return (
        <>
            <SuccessScreen
                iconName="close"
                title={`Seu ingresso foi comprado com sucesso!`}
                description={`Lorem ipsum is placeholder text commonly used in
            the graphic, print, and publishing industries`}
                buttonTitle={`Ver ingressos`}
                onClose={go}
                onPress={() => navigation.navigate(Routes.TICKETSDASHBOARD)}
            />

            <BottomModal
                modal6
                visible={visible}
                handleModal={(value) => setVisible(value)}>
                <VFlexBetweenContainer>
                    <Title>O que você achou do processo de compra?</Title>

                    <Description>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic
                    </Description>

                    <VFlexBetweenContainer>
                        <FlexBetweenContainer full>
                            <StyledOpacityCircleButton title={1} />
                            <StyledOpacityCircleButton title={2} />
                            <StyledOpacityCircleButton title={3} />
                            <StyledOpacityCircleButton title={4} />
                            <StyledOpacityCircleButton title={5} />
                        </FlexBetweenContainer>
                        <Spacing />
                        <FlexBetweenContainer full>
                            <StyledOpacityCircleButton title={6} />
                            <StyledOpacityCircleButton title={7} />
                            <StyledOpacityCircleButton title={8} />
                        </FlexBetweenContainer>
                    </VFlexBetweenContainer>
                </VFlexBetweenContainer>

                <StyledButton
                    title="Enviar"
                    onPress={() => setVisible(false)}
                />
            </BottomModal>
        </>
    );
};

export const FullAbsoluteContainer = styled.View((props) => ({
    width: wp(100),
    height: hp(props.theme.main.size.fullHeight),
    display: props.display ? props.display : '',
    alignItems: props.align ? props.align : '',
    justifyContent: props.justify ? props.justify : '',
    position: 'absolute',
}));

export const StyledOpacityCircleButton = styled(Button).attrs((props) => ({
    containerStyle: {
        width: hp(props.theme.main.size.buttonHeight),
        borderRadius: 100,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        opacity: 1,
        elevation: 2,
    },
    buttonStyle: {
        height: hp(props.theme.main.size.buttonHeight),
        backgroundColor: props.theme.main.colors.white,
        borderColor: props.theme.main.colors.white,
        borderWidth: props.theme.main.size.borderWidth,
        borderRadius: 100,
    },
    titleStyle: {
        color: props.theme.main.colors.gray400,
        fontSize: 16,
    },
    desabledStyle: {
        fontSize: 18,
    },
}))``;

//make this component available to the app
export default Success;
