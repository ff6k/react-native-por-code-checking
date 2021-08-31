import React from 'react';
import _ from 'lodash';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Container, StyledOpacityButton } from '../layouts/globalLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../app-config/theme';
import { Paragrah } from '../layouts/DetailsLayout';

// create a component
const SubscribeScreen = (props) => {
    const { image, title, description, buttonTitle, onClose, onPress, color } =
        props;

    return (
        <ScrollView style={{ backgroundColor: color }}>
            <Container color={color} display="flex" justify="flex-start">
                <Content>
                    <CloseIconBar>
                        <TouchableOpacity onPress={onClose}>
                            <Icon
                                color={theme.main.colors.white}
                                name={'close'}
                                size={20}
                            />
                        </TouchableOpacity>
                    </CloseIconBar>

                    <VictorContainer>
                        <VictorImage source={image} />
                    </VictorContainer>

                    <Paragrah>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </Paragrah>

                    <Progress>
                        <ProgressItem line />
                        <ProgressItem />
                        <ProgressItem />
                    </Progress>

                    <StyledOpacityButton
                        type="solid"
                        title={buttonTitle}
                        onPress={onPress}
                    />
                </Content>
            </Container>
        </ScrollView>
    );
};

const CloseIconBar = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
}));

const Title = styled.Text((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    color: props.theme.main.colors.white,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    textAlign: 'center',
}));

const Description = styled.Text((props) => ({
    color: props.theme.main.colors.white,
    fontSize: props.theme.main.size.Body2,
    fontWeight: 700,
    lineHeight: '21px',
    textAlign: 'center',
}));

const Content = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    height: hp(props.theme.main.size.fullHeight),
    paddingVertical: hp(props.theme.main.size.padding),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const VictorContainer = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
}));

const VictorImage = styled.Image((props) => ({
    width: props.width ? hp(props.width) : wp(props.theme.main.size.innerWidth),
    resizeMode: 'contain',
}));

const Progress = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
}));

const ProgressItem = styled.View((props) => ({
    backgroundColor: props.line
        ? props.theme.main.colors.white
        : 'rgba(255, 255, 255, 0.32)',
    width: props.line
        ? wp(props.theme.main.size.padding)
        : wp((props.theme.main.size.spacing * 2) / 3),
    height: wp((props.theme.main.size.spacing * 3) / 4),
    marginHorizontal: wp(props.theme.main.size.spacing),
    borderRadius: 5,
}));

//make this component available to the app
export default SubscribeScreen;
