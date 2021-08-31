//import liraries
import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import _ from 'lodash';
import {
    Container,
    Description,
    StyledInput,
    StyledButton,
    Title,
} from '../../../layouts/globalLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { ScrollView } from 'react-native';
import { theme } from '../../../app-config/theme';
import { TextListItem } from '../../../components/ListItem';
import BottomModal from '../../../components/BottomModal';
import { Routes } from '../../../app-config/constants';

// create a component
const TicketsDetail = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const onItemPressed = () => {
        setVisible(true);
    };

    const onBtnPressed = () => {
        setVisible(false);
        navigation.navigate(Routes.EXPERIENCESEDITCART);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container display="flex" justify="flex-start">
                <Title>Indentifique os ingressos</Title>
                <Description>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries .
                </Description>

                <SubTitle>Ingressos normais</SubTitle>

                <TextListItem
                    leftText="Levi Rodrigues dos Santos"
                    rightText="Adicionar"
                    rightTextColor={theme.main.colors.secondary}
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Levi Rodrigues dos Santos"
                    rightText="Adicionar"
                    rightTextColor={theme.main.colors.secondary}
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Levi Rodrigues dos Santos"
                    rightText="Adicionar"
                    rightTextColor={theme.main.colors.secondary}
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Levi Rodrigues dos Santos"
                    rightText="Adicionar"
                    rightTextColor={theme.main.colors.secondary}
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Levi Rodrigues dos Santos"
                    rightText="Adicionar"
                    rightTextColor={theme.main.colors.secondary}
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Levi Rodrigues dos Santos"
                    rightText="Adicionar"
                    rightTextColor={theme.main.colors.secondary}
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Levi Rodrigues dos Santos"
                    rightText="Adicionar"
                    rightTextColor={theme.main.colors.secondary}
                    onPress={onItemPressed}
                    noLine
                />
            </Container>

            <BottomModal
                modal7
                visible={visible}
                handleModal={(value) => setVisible(value)}>
                <Title>Identifique o participante</Title>

                <Form>
                    <StyledInput Rounded={true} label={'Nome'} />
                    <StyledInput Rounded={true} label={'CPF'} />
                    <StyledInput Rounded={true} label={'E-mail'} />
                </Form>

                <StyledButton title="Salvar" onPress={onBtnPressed} />
            </BottomModal>
        </ScrollView>
    );
};

const Form = styled.Text((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(props.theme.main.size.padding),
}));

const SubTitle = styled.Text((props) => ({
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '14px',
    color: props.theme.main.colors.gray300,
    marginVertical: hp(props.theme.main.size.spacing),
}));

//make this component available to the app
export default TicketsDetail;
