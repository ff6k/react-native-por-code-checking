//import liraries
import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import _ from 'lodash';
import { StyledIconButton, Container } from '../../../layouts/globalLayout';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { theme } from '../../../app-config/theme';
import {
    DetailVerticalImageGalleryComponent,
    VerticalImageGalleryComponent,
} from '../../../components/ImageGallery/ImageGallery';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import BottomModal from '../../../components/BottomModal';
import {
    ticketsActiveImageGalleryData,
    ticketsCanceledImageGalleryData,
    ticketsClosedImageGalleryData,
    ticketsOutstandingImageGalleryData,
    ticketsSubscriptionsImageGalleryData,
} from '../../../app-config/fake-db';
import { Button } from 'react-native-elements';
import Alert from '../../../components/Alert';

// create a component
const Explore = ({ navigation }) => {
    StatusBar.setBarStyle('dark-content');

    const [step, setStep] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleAlert = (visible, button) => {
        setVisible(visible);
        if (button) navigation.navigate(Routes.TICKETSSHARECODE);
    };

    const handleClose = () => {
        setVisible(true);
    };

    const onMenuItemPressed = (step) => {
        setStep(step);
    };

    const onImgItemPressed = () => {
        if (step === 0) navigation.navigate(Routes.TICKETSDETAILS);
        if (step === 1) navigation.navigate(Routes.TICKETSCOPYCODE);
        if (step === 2) navigation.navigate(Routes.TICKETSDETAILS);
        if (step === 3) navigation.navigate(Routes.TICKETSDETAILS);
        if (step === 4) navigation.navigate(Routes.TICKETSDETAIL);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container display="flex" justify="flex-start">
                <Menu>
                    <ScrollView horizontal={true}>
                        <MenuItem
                            title="Ativos"
                            onPress={() => onMenuItemPressed(0)}
                        />

                        <MenuItem
                            title="Pendentes"
                            onPress={() => onMenuItemPressed(1)}
                        />

                        <MenuItem
                            title="Assinaturas"
                            onPress={() => onMenuItemPressed(2)}
                        />

                        <MenuItem
                            title="Encerrados"
                            onPress={() => onMenuItemPressed(3)}
                        />

                        <MenuItem
                            title="Cancelados"
                            onPress={() => onMenuItemPressed(4)}
                        />
                    </ScrollView>
                </Menu>

                {step === 0 && (
                    <VerticalImageGalleryComponent
                        {...ticketsActiveImageGalleryData}
                        onNavigate={onImgItemPressed}
                    />
                )}

                {step === 1 && (
                    <DetailVerticalImageGalleryComponent
                        {...ticketsOutstandingImageGalleryData}
                        onNavigate={onImgItemPressed}
                        handleClose={handleClose}
                    />
                )}

                {step === 2 && (
                    <VerticalImageGalleryComponent
                        {...ticketsSubscriptionsImageGalleryData}
                        onNavigate={onImgItemPressed}
                    />
                )}

                {step === 3 && (
                    <VerticalImageGalleryComponent
                        {...ticketsClosedImageGalleryData}
                        onNavigate={onImgItemPressed}
                    />
                )}

                {step === 4 && (
                    <VerticalImageGalleryComponent
                        {...ticketsCanceledImageGalleryData}
                        onNavigate={onImgItemPressed}
                    />
                )}
            </Container>

            <Alert
                visible={visible}
                handleAlert={handleAlert}
                title="Sair da conta"
                description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts "
                buttonTitle="Quero sair"
                bottomText="Cancelar"
            />
        </ScrollView>
    );
};

const Menu = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: hp(props.theme.main.size.spacing),
}));

export const MenuItem = styled(Button).attrs((props) => ({
    containerStyle: {
        // backgroundColor: '',
    },
    buttonStyle: {
        height: hp(5),
        backgroundColor: props.theme.main.colors.white,
        borderColor: props.theme.main.colors.white,
        borderRadius: 24,
        paddingVertical: 0,
    },
    titleStyle: {
        fontSize: 24,
        color: props.theme.main.colors.gray500,
    },
    disabledStyle: {
        fontSize: 18,
    },
}))``;

//make this component available to the app
export default Explore;
