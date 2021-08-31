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
import { Routes } from '../../../app-config/constants';

// create a component
const TicketsDetail = ({ navigation }) => {
    const onBtnPressed = () => {
        navigation.navigate(Routes.EXPERIENCESSUCCESSADDCART);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container under display="flex" justify="flex-start">
                <Title>Indentifique os ingressos</Title>
                <Description>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries .
                </Description>

                <SubTitle>Ingressos normais</SubTitle>

                <Form>
                    <TextListItem
                        leftText="Ingresso n° 1"
                        rightText="Editar"
                        rightTextColor={theme.main.colors.secondary}
                    />
                    <TextListItem
                        leftText="Ingresso n° 1"
                        rightText="Editar"
                        rightTextColor={theme.main.colors.secondary}
                    />
                    <TextListItem
                        leftText="Ingresso n° 1"
                        rightText="Editar"
                        rightTextColor={theme.main.colors.secondary}
                    />
                    <TextListItem
                        leftText="Ingresso n° 1"
                        rightText="Editar"
                        rightTextColor={theme.main.colors.secondary}
                    />
                    <TextListItem
                        leftText="Ingresso n° 1"
                        rightText="Editar"
                        rightTextColor={theme.main.colors.secondary}
                    />
                    <TextListItem
                        leftText="Ingresso n° 1"
                        rightText="Editar"
                        rightTextColor={theme.main.colors.secondary}
                    />
                    <TextListItem
                        leftText="Ingresso n° 1"
                        rightText="Editar"
                        rightTextColor={theme.main.colors.secondary}
                        noLine
                    />
                </Form>
                <StyledButton title={'Adicionar'} onPress={onBtnPressed} />
            </Container>
        </ScrollView>
    );
};

const Form = styled.Text((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(props.theme.main.size.padding),
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
