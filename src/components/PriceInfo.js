import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { IMLocalized } from '../services/localization/IMLocalization';
import { TouchableOpacity } from 'react-native';
import { theme } from '../app-config/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    FlexBetweenContainer,
    VFlexBetweenContainer,
} from '../layouts/globalLayout';

export const PriceInfo = (props) => {
    const { type, price, totalPrice, number, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Container>
                <FlexBetweenContainer full>
                    <VFlexBetweenContainer>
                        <Type>{type}</Type>
                        <Price>{price}</Price>
                    </VFlexBetweenContainer>
                    <FlexBetweenContainer>
                        <Icon
                            name="minus-circle"
                            color={theme.main.colors.secondary}
                            size={20}
                        />
                        <Number>{number}</Number>
                        <Icon
                            name="plus-circle"
                            color={theme.main.colors.secondary}
                            size={20}
                        />
                    </FlexBetweenContainer>
                </FlexBetweenContainer>                              
            </Container>
        </TouchableOpacity>
    );
};

const Container = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(props.theme.main.size.spacing),
}));

const Price = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '18px',
    color: props.theme.main.colors.gray300,
    marginTop: hp(props.theme.main.size.spacing),
}));

const Type = styled.Text((props) => ({
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '14px',
    color: props.theme.main.colors.gray200,
}));

const Number = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '18px',
    color: props.theme.main.colors.gray400,
    marginHorizontal: wp(props.theme.main.size.spacing),
}));

