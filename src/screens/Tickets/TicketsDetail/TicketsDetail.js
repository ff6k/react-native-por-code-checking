//import liraries
import React from 'react';
import _ from 'lodash';
import {
    Container,
    Description,
    Title,
} from '../../../layouts/globalLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { ScrollView } from 'react-native';
import { theme } from '../../../app-config/theme';
import { TextListItem } from '../../../components/ListItem';

// create a component
const TicketsDetail = ({ navigation }) => {
    const onItemPressed = () => {};

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container display="flex" justify="flex-start">
                <Title>Mayden Voyager Festival</Title>
                <Description>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups. Tipo de assintura: Na Praia
                    Festival
                </Description>

                <TextListItem
                    leftText="Evento"
                    rightText="Mayden Voyager Festival"
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Valor total"
                    rightText="R$ 560,00"
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Forma de pagamento"
                    rightText="Cartão de crédito"
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Data do cancelamento"
                    rightText="25/06/2021"
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Motivo"
                    rightText="Problemas de saúde"
                    onPress={onItemPressed}
                />
                <TextListItem
                    leftText="Tipo de rembolso"
                    rightText="Integral"
                    onPress={onItemPressed}
                    noLine
                />
            </Container>
        </ScrollView>
    );
};

//make this component available to the app
export default TicketsDetail;
