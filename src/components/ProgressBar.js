import React, { useState, useEffect } from 'react';
import * as Progress from 'react-native-progress';
import styled from 'styled-components';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FlexBetweenContainer } from '../layouts/globalLayout';
import { theme } from '../app-config/theme';
import PropTypes from 'prop-types';

export const ProgressBar = (props) => {
    return (
        <FlexBetweenContainer>
            <Progress.Bar
                {...props}
                borderWidth={0}
                borderRadius={5}
                height={hp(theme.main.size.progresBarHeight)}
            />
            <Label>{props.label}</Label>
        </FlexBetweenContainer>
    );
};

const Label = styled.Text((props) => ({
    color: props.theme.main.colors.gray200,
    fontSize: props.theme.main.size.Label,
    fontWeight: 600,
    lineHeight: '15px',
    textAlign: 'center',
    marginLeft: wp(props.theme.main.size.spacing),
}));

Progress.Bar.defaultProps = {
    backgroundColor: theme.main.colors.gray50,
    color: theme.main.colors.primary,
    width: 200
};

Progress.Bar.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number
};
