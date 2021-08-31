import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

export const H = styled.Text((props) => ({
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '20px',
    color: props.theme.main.colors.gray500,
}));

export const H1 = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '27px',
    color: props.theme.main.colors.gray500,
}));

export const H2 = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '18px',
    color: props.theme.main.colors.gray500,
}));

export const H3 = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '24px',
    color: props.theme.main.colors.gray500,
}));

export const H4 = styled.Text((props) => ({
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '21px',
    color: props.theme.main.colors.gray300,
}));

export const H6 = styled.Text((props) => ({
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '21px',
    color: props.theme.main.colors.gray200,
}));


