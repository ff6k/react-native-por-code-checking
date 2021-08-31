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
} from '../layouts/globalLayout';
import * as Progress from 'react-native-progress';
import { ProgressBar } from './ProgressBar';

export const DateInfo = (props) => {
    const { date, time, price, count, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Container>
                <Date>{date}</Date>
                <Info>
                    <Row>
                        <FlexBetweenContainer>
                            <Icon
                                name="clock-outline"
                                color={theme.main.colors.gray400}
                                size={20}
                            />
                            <Time>{time}</Time>
                        </FlexBetweenContainer>
                        <Price>{price}</Price>
                    </Row>
                    <Count>{count}</Count>                   
                    <ProgressBar
                            progress={0.6} 
                            width={wp(theme.main.size.innerWidth-10)}
                            color={theme.main.colors.secondary}
                            backgroundColor={theme.main.colors.gray100}                           
                        />
                </Info>
            </Container>
        </TouchableOpacity>
    );
};

const Container = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.white,
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: hp(props.theme.main.size.spacing),
}));

const Info = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.gray50,
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: wp(props.theme.main.size.padding),
    marginVertical: hp(props.theme.main.size.spacing),
}));

export const Row = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(props.theme.main.size.innerWidth-10) ,
    borderBottomWidth: 0.5,
    borderColor: props.theme.main.colors.gray200,
    paddingBottom: hp(props.theme.main.size.spacing),
    marginBottom: hp(props.theme.main.size.spacing),
}));

const Date = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '16px',
    color: props.theme.main.colors.gray200,
}));

const Time = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 600,
    color: props.theme.main.colors.gray400,
    marginLeft: wp(props.theme.main.size.spacing),
}));

const Price = styled.Text((props) => ({
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '14px',
    color: props.theme.main.colors.gray200,
}));

const Count = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '16px',
    color: props.theme.main.colors.gray400,
    marginBottom: hp(props.theme.main.size.spacing),
}));
