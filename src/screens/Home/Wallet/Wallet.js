//import liraries
import React, { useState } from 'react';
import _ from 'lodash';
import { Container, FlexBetweenContainer } from '../../../layouts/globalLayout';
import {
    Content,
    Title,
    Description,
    VictorImage,
    CloseIconBar,
    TextItems,
    QrContainer,
    QRImage,
    QrView,
    TextItem,
    Divide,
} from './Layout';
import {
    victorImg,
    qrOrangeImg,
    qrCodeImg,
    qrWhiteImg,
} from '../../../assets/images';
import { Routes } from '~/app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Alert from '../../../components/Alert';

// IM
// create a component
const Wallet = ({ navigation }) => {
    StatusBar.setBarStyle('light-content');

    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleAlert = (visible, button) => {
        setOverlayVisible(visible);
    };

    const closeBtnPressed = () => {
        navigation.navigate(Routes.EXPLORE);
    };

    return (
        <Container noHeader main display="flex" justify="flex-start">
            <Content>
                <CloseIconBar>
                    <FlexBetweenContainer>
                        <Title>Olá, Levi!</Title>
                        <VictorImage source={victorImg} />
                    </FlexBetweenContainer>
                    <TouchableOpacity onPress={closeBtnPressed}>
                        <Icon
                            color={theme.main.colors.opacityText}
                            name="close"
                            size={20}
                        />
                    </TouchableOpacity>
                </CloseIconBar>
                <Description opacity>
                    Lorem ipsum is placeholder text commonly used in the graphic
                </Description>
                <QrView>
                    <QrContainer>
                        <QRImage source={qrOrangeImg} />
                    </QrContainer>
                    <QrContainer>
                        <QRImage source={qrWhiteImg} />
                    </QrContainer>

                    <QrContainer>
                        <TouchableOpacity
                            onPress={() => setOverlayVisible(true)}>
                            <QRImage source={qrCodeImg} />
                        </TouchableOpacity>
                    </QrContainer>
                </QrView>

                <Divide />
                <TextItems>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(Routes.TICKETSDASHBOARD)
                        }>
                        <TextItem>Seus ingressos</TextItem>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(Routes.TICKETSDASHBOARD)
                        }>
                        <TextItem>Sua carteira</TextItem>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(Routes.TICKETSDASHBOARD)
                        }>
                        <TextItem>Seus cartões</TextItem>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(Routes.TICKETSDASHBOARD)
                        }>
                        <TextItem>Ajuda</TextItem>
                    </TouchableOpacity>
                </TextItems>
            </Content>

            <Alert
                visible={overlayVisible}
                handleAlert={handleAlert}
                title="Você ainda não fez o
                cadastro do cartão de crédito"
                description="Hey Levi! Para fazer pagamentos utilizando o QR Code, você precisa cadastrar pelo menos um cartão de crédito."
                buttonTitle="Cadastrar cartão"
            />
        </Container>
    );
};

//make this component available to the app
export default Wallet;
