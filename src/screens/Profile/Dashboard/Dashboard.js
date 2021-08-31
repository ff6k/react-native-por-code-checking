//import liraries
import React, { useState } from 'react';
import _ from 'lodash';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Container, Title, Description } from '../../../layouts/globalLayout';
import { bgManAvatarImg, avatarOrangeImg } from '../../../assets/images';
import { Routes } from '~/app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';
import { ListItem } from '../../../components/ListItem';
import Alert from '../../../components/Alert';

// IM
// create a component
const Dashboard = ({ navigation }) => {
    StatusBar.setBarStyle('dark-content');
    const [visible, setVisible] = useState(false);

    const handleAlert = (visible) => {
        setVisible(visible);
    };

    const closeBtnPressed = () => {
        navigation.goBack();
    };

    const handleItemPressed = () => {
        navigation.navigate(Routes.PROFILECREDITCARDS);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.main }}>
            <Container noHeader under display="flex" justify="flex-start">
                <CloseIconBar>
                    <AvatarView>
                        <AvatarContainer>
                            <Image source={avatarOrangeImg} />
                        </AvatarContainer>
                        <AvatarContainer>
                            <Image source={bgManAvatarImg} />
                        </AvatarContainer>
                    </AvatarView>

                    <TouchableOpacity onPress={closeBtnPressed}>
                        <Icon
                            color={theme.main.colors.gray200}
                            name="close"
                            size={25}
                        />
                    </TouchableOpacity>
                </CloseIconBar>

                <Title noFull>R2.com.levi</Title>

                <Description>
                    Lorem ipsum is placeholder text commonly used in the graphic
                </Description>

                <ListItem text="Dados pessoais" onPress={handleItemPressed} />
                <ListItem
                    text="Programa de Fidelidade"
                    onPress={handleItemPressed}
                />
                <ListItem
                    text="Cartões de crédito"
                    onPress={handleItemPressed}
                />

                <VerticalSpace>
                    <Description>Ajuda e suporte</Description>
                </VerticalSpace>

                <ListItem text="Preciso de ajuda" onPress={handleItemPressed} />

                <ListItem
                    text="Perguntas frequentes"
                    onPress={handleItemPressed}
                />
                <ListItem
                    text="Envie um feedback"
                    onPress={handleItemPressed}
                />

                <VerticalSpace>
                    <Description>Informações legais</Description>
                </VerticalSpace>

                <ListItem text="Termos de uso" onPress={handleItemPressed} />
                <ListItem
                    text="Políticas de privacidade"
                    onPress={handleItemPressed}
                />
                <ListItem text="Uso de dados" />

                <ListItem
                    noLine
                    color={theme.main.colors.red}
                    text="Sair da conta"
                    onPress={() => setVisible(true)}
                />

                <Alert
                    visible={visible}
                    handleAlert={handleAlert}
                    title="Sair da conta"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts "
                    buttonTitle="Quero sair"
                    bottomText="Cancelar"
                />
            </Container>
        </ScrollView>
    );
};

const CloseIconBar = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: hp(props.theme.main.size.spacing),
    marginBottom: hp(props.theme.main.size.padding),
}));

const VerticalSpace = styled.View((props) => ({
    marginTop: hp(props.theme.main.size.padding),
}));

const AvatarView = styled.View((props) => ({
    width: wp(20),
    height: wp(20),
}));

const AvatarContainer = styled.View((props) => ({
    width: wp(20),
    height: wp(20),
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
}));

//make this component available to the app
export default Dashboard;
