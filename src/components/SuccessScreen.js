import React from 'react';
import _ from 'lodash';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import {
    Container,
    StyledButton,
    VFlexBetweenContainer,
} from '../layouts/globalLayout';
import { victor1Img } from '../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../app-config/theme';

// create a component
const SuccessScreen = (props) => {
    const {
        iconName,
        title,
        description,
        buttonTitle,
        bottomText,
        onClose,
        onPress,
        onBottomTextPress,
    } = props;

    StatusBar.setBarStyle('light-content');

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.main }}>
            <Container main display="flex" justify="flex-start">
                <Content>
                    <CloseIconBar>
                        <TouchableOpacity onPress={onClose}>
                            <Icon
                                color={theme.main.colors.opacityText}
                                name={iconName}
                                size={20}
                            />
                        </TouchableOpacity>
                    </CloseIconBar>
                    <TextContent>
                        <VictorContainer>
                            <VictorImage source={victor1Img} />
                        </VictorContainer>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </TextContent>
                    <VFlexBetweenContainer>
                        <StyledButton
                            type="solid"
                            title={buttonTitle}
                            onPress={onPress}
                        />
                        {bottomText && (
                            <TouchableOpacity onPress={onBottomTextPress}>
                                <BottomText>{bottomText}</BottomText>
                            </TouchableOpacity>
                        )}
                    </VFlexBetweenContainer>
                </Content>
            </Container>
        </ScrollView>
    );
};

export const CloseIconBar = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
}));

export const Content = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    height: hp(props.theme.main.size.fullHeight),
    paddingVertical: hp(props.theme.main.size.padding),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const TextContent = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    height: hp(35),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const VictorContainer = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
}));

export const VictorImage = styled.Image((props) => ({
    width: props.width ? hp(props.width) : hp(12),
    height: props.height ? hp(props.height) : hp(12),
    resizeMode: 'cover',
}));

export const IconImage = styled.Image((props) => ({
    width: hp(4),
    height: hp(4),
    resizeMode: 'contain',
}));

export const Title = styled.Text((props) => ({
    color: props.theme.main.colors.white,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    textAlign: 'center',
}));

export const Description = styled.Text((props) => ({
    color: props.theme.main.colors.white,
    fontSize: props.theme.main.size.Body2,
    fontWeight: 700,
    lineHeight: '21px',
    textAlign: 'center',
}));

export const BottomText = styled.Text((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    color: props.theme.main.colors.white,
    fontSize: props.theme.main.size.Subtitle,
    fontWeight: 600,
    lineHeight: '18px',
    textAlign: 'center',
    marginTop: hp(props.theme.main.size.padding),
}));

//make this component available to the app
export default SuccessScreen;
