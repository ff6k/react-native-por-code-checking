import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { IMLocalized } from '../services/localization/IMLocalization';
import { Image, TouchableOpacity } from 'react-native';
import { theme } from '../app-config/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlexBetweenContainer } from '../layouts/globalLayout';

export const ListItem = (props) => {
    const { image, text, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Container {...props}>
                <FlexBetweenContainer>
                    {image && (
                        <Image
                            source={image}
                            style={{
                                marginRight: wp(
                                    theme.main.size.spacing,
                                ),
                            }}
                        />
                    )}
                    <Text {...props}>{text}</Text>
                </FlexBetweenContainer>

                <Icon
                    name="chevron-forward"
                    color={
                        props.color ? props.color : theme.main.colors.gray300
                    }
                    size={20}
                />
            </Container>
        </TouchableOpacity>
    );
};

export const TextListItem = (props) => {
    const { leftText, rightText, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Container {...props}>
                <FlexBetweenContainer full>
                    <LeftText {...props}>{leftText}</LeftText>
                    <RightText {...props} color={props.rightTextColor}>{rightText}</RightText>
                </FlexBetweenContainer>
            </Container>
        </TouchableOpacity>
    );
};

const Container = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: props.theme.main.colors.listBorder,
    borderBottomWidth: props.noLine ? 0 : '1px',
    paddingVertical: hp(props.theme.main.size.spacing),
    marginVertical: hp(0.7),
}));

const Text = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '16px',
    color: props.color ? props.color : props.theme.main.colors.gray300,
}));

const LeftText = styled.Text((props) => ({
    fontSize: props.size ? props.size : 14,
    fontWeight: 600,
    lineHeight: props.size ? `${props.size}px` : '14px',
    color: props.color ? props.color : props.theme.main.colors.gray200,
}));

const RightText = styled.Text((props) => ({
    fontSize: props.size ? props.size : 14,
    fontWeight: 600,
    lineHeight: props.size ? `${props.size}px` : '14px',
    color: props.color ? props.color : props.theme.main.colors.gray300,
}));
