//import liraries
import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import _ from 'lodash';
import {
    LeftAbsoluteIcon,
    Container,
    Description,
    FlexBetweenContainer,
    Spacing,
    StyledOutlineButton,
    Title,
} from '../../../layouts/globalLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';
import { lgBackManImg, qrCodeImg } from '../../../assets/images';
import { H1, H2, H3, H4, H6 } from './Layout';
import {
    FullImageCardComponent,
    ImageGalleryComponent,
} from '../../../components/ImageGallery/ImageGallery';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { smTicketsDetailImageGalleryData } from '../../../app-config/fake-db';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const DetailSchedule = ({ navigation }) => {
    const [coordinate, setCoordinate] = useState({
        latitude: 41.880032,
        longitude: -87.623177,
    });

    const handleImagePressed = () => {};

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <FullImageCardComponent image={lgBackManImg} />

            <LeftAbsoluteIcon>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicon
                        name="chevron-back"
                        color={theme.main.colors.gray200}
                        size={20}
                    />
                </TouchableOpacity>
            </LeftAbsoluteIcon>

            <Container display="flex" justify="flex-start">
                <Title>Mayden Voyager Festival</Title>
                <Description>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups. Tipo de assintura: Na Praia
                    Festival
                </Description>

                <ScheduleBar>
                    <Icon
                        name="calendar-today"
                        color={theme.main.colors.gray200}
                        size={20}
                    />
                    <ScheduleText noFull>24/05/2020, 09:00 am</ScheduleText>
                </ScheduleBar>

                <ScheduleBar>
                    <Icon
                        name="map-marker-outline"
                        color={theme.main.colors.gray200}
                        size={20}
                    />
                    <ScheduleText noFull>Civil Service Club</ScheduleText>
                </ScheduleBar>

                <Spacing />

                <StyledOutlineButton title="Ver no mapa" type="outline" />

                <Spacing />
                <Spacing />

                <SubTitle>Line-up</SubTitle>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Description>

                <SubTitle>O que levar?</SubTitle>
                <Description>
                    Veja os itens essenciais para fazer com que usa experiência
                    seja completa
                </Description>

                <SpecialTitle>Mormaii Surf Bar</SpecialTitle>
                <Description>
                    Lorem ipsum is placeholder text commonly used in the graphic
                </Description>

                <ImageGalleryComponent
                    {...smTicketsDetailImageGalleryData}
                    onNavigate={handleImagePressed}
                />

                <ImageGalleryComponent
                    {...smTicketsDetailImageGalleryData}
                    onNavigate={handleImagePressed}
                />

                <ImageGalleryComponent
                    {...smTicketsDetailImageGalleryData}
                    onNavigate={handleImagePressed}
                    noLine
                />
            </Container>
        </ScrollView>
    );
};

const SubTitle = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '18px',
    color: props.theme.main.colors.gray500,
}));

const SpecialTitle = styled.Text((props) => ({
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '20px',
    color: props.theme.main.colors.gray300,
}));

const ScheduleBar = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: props.full ? wp(props.theme.main.size.innerWidth) : '',
    marginBottom: hp(props.theme.main.size.spacing),
}));

const ScheduleText = styled.Text((props) => ({
    fontSize: props.theme.main.size.Body2,
    fontWeight: 700,
    lineHeight: '21px',
    color: props.theme.main.colors.gray200,
}));

const MapViewContainer = styled.View((props) => ({
    width: wp(90),
    display: 'flex',
    marginVertical: hp(props.theme.main.size.padding),
}));
//make this component available to the app
export default DetailSchedule;
