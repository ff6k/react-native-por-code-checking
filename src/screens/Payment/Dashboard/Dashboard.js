//import liraries
import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import {
    Title,
    Container,
    FlexBetweenContainer,
    VFlexBetweenContainer,
    StyledButton,
    Description,
} from '../../../layouts/globalLayout';
import { DetailVerticalImageGalleryComponent } from '../../../components/ImageGallery/ImageGallery';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { theme } from '../../../app-config/theme';
import { paymentDashboardData } from '../../../app-config/fake-db';
import Alert from '../../../components/Alert';
import { SubTitle1, PriceInfo } from '../../../layouts/DetailsLayout';

// create a component
const Dashboard = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const handleAlert = (visible, button) => {
        setVisible(visible);
    };

    const onClose = () => {
        setVisible(true);
    };

    return (
        <>
            <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
                <Container display="flex" justify="flex-start">
                    <Title>Seu carrinho</Title>

                    <DetailVerticalImageGalleryComponent
                        {...paymentDashboardData}
                        handleClose={onClose}
                    />
                </Container>

                <Alert
                    visible={visible}
                    handleAlert={handleAlert}
                    title="Remover ingresso"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts "
                    buttonTitle="Quero remover"
                    bottomText="Cancelar"
                />
            </ScrollView>

            <PriceInfo>
                <FlexBetweenContainer full>
                    <VFlexBetweenContainer>
                        <Description noFull>Valor total</Description>
                        <SubTitle1>R$ 500 / pessoa</SubTitle1>
                    </VFlexBetweenContainer>

                    <StyledButton
                        sm
                        title="Comprar"
                        onPress={() =>
                            navigation.navigate(Routes.PAYMENTSELECTPAYMENTTYPE)
                        }
                    />
                </FlexBetweenContainer>
            </PriceInfo>
        </>
    );
};

export const Row = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

//make this component available to the app
export default Dashboard;
