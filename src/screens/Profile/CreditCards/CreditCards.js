//import liraries
import React, { useState } from 'react';
import _ from 'lodash';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import {
    Container,
    Title,
    Description,
    VFlexBetweenContainer,
} from '../../../layouts/globalLayout';
import { visaImg, maestroImg } from '../../../assets/images';
import { Routes } from '~/app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';
import { ListItem, TextListItem } from '../../../components/ListItem';
import BottomModal from '../../../components/BottomModal';
import Alert from '../../../components/Alert';

// IM
// create a component
const Dashboard = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleItemPressed = () => {
        setModalVisible(true);
    };

    const handleModalBtnPressed = () => {
        setOverlayVisible(true);
    };

    const handleAlert = (visible, button) => {
        setOverlayVisible(visible);
        if (button) setModalVisible(visible);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container under display="flex" justify="flex-start">
                <Title>Aqui estão seus cartões de crédito salvos</Title>

                <VerticalSpace>
                    <Description>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic
                    </Description>
                </VerticalSpace>

                <ListItem
                    noLine
                    image={maestroImg}
                    text="Final 5468"
                    onPress={handleItemPressed}
                />

                <VerticalSpace>
                    <Description>Outros cartões</Description>
                </VerticalSpace>

                <ListItem
                    image={visaImg}
                    text="Final 5468"
                    onPress={handleItemPressed}
                />
                <ListItem
                    image={visaImg}
                    text="Final 5468"
                    onPress={handleItemPressed}
                />
                <ListItem
                    image={maestroImg}
                    text="Final 5468"
                    onPress={handleItemPressed}
                />
                <ListItem
                    image={visaImg}
                    text="Final 5468"
                    onPress={handleItemPressed}
                />
                <ListItem
                    image={maestroImg}
                    text="Final 5468"
                    onPress={handleItemPressed}
                />
                <ListItem
                    image={maestroImg}
                    text="Final 5468"
                    onPress={handleItemPressed}
                />
                <ListItem
                    noLine
                    image={visaImg}
                    text="Final 5468"
                    onPress={handleItemPressed}
                />

                <BottomModal
                    modal7
                    visible={modalVisible}
                    handleModal={(value) => setModalVisible(value)}>
                    <VFlexBetweenContainer>
                        <Title>Informações do cartão</Title>
                        <Description>
                            Lorem ipsum is placeholder text commonly used in the
                            graphic
                        </Description>

                        <VerticalSpace>
                            <Description>Cartão principal</Description>
                        </VerticalSpace>

                        <TextListItem
                            leftText="Nome impresso"
                            rightText="LEVI R DOS SANTOS"
                        />
                        <TextListItem leftText="Validade" rightText="06/2028" />
                        <TextListItem
                            leftText="Bandeira do cartão"
                            rightText="Mastercard"
                        />
                        <TextListItem
                            leftText="Número do cartão"
                            rightText="Final 0065"
                        />
                    </VFlexBetweenContainer>

                    <TouchableOpacity onPress={handleModalBtnPressed}>
                        <ModalButton>Apagar cartão</ModalButton>
                    </TouchableOpacity>
                </BottomModal>

                <Alert
                    visible={overlayVisible}
                    handleAlert={handleAlert}
                    title="Apagar cartão"
                    description="Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts"
                    buttonTitle="Quero apagar"
                    bottomText="Cancelar"
                />
            </Container>
        </ScrollView>
    );
};

const VerticalSpace = styled.View((props) => ({
    marginTop: hp(props.theme.main.size.padding),
}));

const ModalButton = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '23px',
    color: props.theme.main.colors.red,
    alignSelf: 'center',
}));

//make this component available to the app
export default Dashboard;
