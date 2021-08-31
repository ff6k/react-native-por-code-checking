//import liraries
import React, { useState } from 'react';
import _ from 'lodash';
import {
    LeftAbsoluteIcon,
    RightAbsoluteIcon,
    Container,
    Description,
    Spacing,
    StyledOutlineButton,
    Title,
    FlexBetweenContainer,
} from '../../../layouts/globalLayout';
import {
    Paragrah,
    LineUp,
    LineUpInfo,
    LineUpText,
    DotLine,
    DotLineText,
    ImageText,
    ScheduleBar,
    ScheduleText,
    QrCode,
    SubTitle,
    SpecialTitle,
    MapViewContainer,
    PhotoGroup,
    Photo,
} from '../../../layouts/DetailsLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';
import {
    qrCodeImg,
    ticketDetailImg,
    recAvatar1Img,
    recAvatar2Img,
    recAvatar3Img,
    group1Img,
    group2Img,
    group3Img,
    group4Img,
} from '../../../assets/images';
import {
    FullImageCardComponent,
    ImageGalleryComponent,
} from '../../../components/ImageGallery/ImageGallery';
import { Routes } from '../../../app-config/constants';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { smTicketsDetailImageGalleryData } from '../../../app-config/fake-db';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListItem, TextListItem } from '../../../components/ListItem';
import BottomModal from '../../../components/BottomModal';
import Alert from '../../../components/Alert';

// create a component
const Details = ({ navigation }) => {
    StatusBar.setBarStyle('light-content');

    const [coordinate, setCoordinate] = useState({
        latitude: 41.880032,
        longitude: -87.623177,
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleModalItemPressed = () => {
        setOverlayVisible(true);
    };

    const handleAlert = (visible, button) => {
        setOverlayVisible(visible);
        if (button) {
            setModalVisible(visible);
            navigation.navigate(Routes.TICKETSCANCELREASON);
        }
    };
    const handleImagePressed = () => {
        navigation.navigate(Routes.TICKETSDETAILSCHEDULE);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <FullImageCardComponent image={ticketDetailImg} rightIcon />

            <LeftAbsoluteIcon>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicon
                        name="chevron-back"
                        color={theme.main.colors.gray200}
                        size={20}
                    />
                </TouchableOpacity>
            </LeftAbsoluteIcon>

            <RightAbsoluteIcon>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Icon
                        name="dots-vertical"
                        color={theme.main.colors.gray200}
                        size={20}
                    />
                </TouchableOpacity>
            </RightAbsoluteIcon>

            <Container display="flex" justify="flex-start">
                <ImageText>Evento</ImageText>

                <Paragrah>
                    <Title>Mayden Voyager Festival</Title>
                    <Description>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Tipo de assintura: Na Praia
                        Festival
                    </Description>
                </Paragrah>

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

                <Paragrah>
                    <SubTitle>Veja algumas fotos</SubTitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Description>
                </Paragrah>

                <FlexBetweenContainer>
                    <PhotoGroup>
                        <Photo source={group1Img} />
                        <Photo source={group2Img} />
                    </PhotoGroup>
                    <PhotoGroup>
                        <Photo source={group3Img} />
                        <Photo source={group4Img} />
                    </PhotoGroup>
                </FlexBetweenContainer>

                <StyledOutlineButton
                    onPress={Routes.PHOTOGALLERY}
                    title="Ver todas as fotos"
                    type="outline"
                />

                <QrCode>
                    <Image source={qrCodeImg} />
                </QrCode>

                <StyledOutlineButton
                    title="Adicionar a agenda"
                    type="outline"
                />

                <Spacing />
                <Paragrah>
                    <SubTitle>Line-up</SubTitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Description>
                </Paragrah>

                <LineUp>
                    <Image source={recAvatar1Img} />
                    <LineUpInfo>
                        <LineUpText>Rodrigo Gomes</LineUpText>
                        <ScheduleBar>
                            <Icon
                                name="clock-outline"
                                color={theme.main.colors.gray200}
                                size={20}
                            />
                            <ScheduleText noFull>
                                Civil Service Club
                            </ScheduleText>
                        </ScheduleBar>
                    </LineUpInfo>
                </LineUp>

                <LineUp>
                    <Image source={recAvatar2Img} />
                    <LineUpInfo>
                        <LineUpText>Rodrigo Gomes</LineUpText>
                        <ScheduleBar>
                            <Icon
                                name="clock-outline"
                                color={theme.main.colors.gray200}
                                size={20}
                            />
                            <ScheduleText noFull>
                                Civil Service Club
                            </ScheduleText>
                        </ScheduleBar>
                    </LineUpInfo>
                </LineUp>

                <LineUp>
                    <Image source={recAvatar3Img} />
                    <LineUpInfo>
                        <LineUpText>Rodrigo Gomes</LineUpText>
                        <ScheduleBar>
                            <Icon
                                name="clock-outline"
                                color={theme.main.colors.gray200}
                                size={20}
                            />
                            <ScheduleText noFull>
                                Civil Service Club
                            </ScheduleText>
                        </ScheduleBar>
                    </LineUpInfo>
                </LineUp>

                <Paragrah>
                    <SubTitle>O que levar?</SubTitle>
                    <Description>
                        Veja os itens essenciais para fazer com que usa
                        experiência seja completa
                    </Description>
                </Paragrah>

                <Paragrah>
                    <DotLine>
                        <EntypoIcon
                            name="dot-single"
                            color={theme.main.colors.gray200}
                            size={20}
                        />
                        <DotLineText>Óculos escuros</DotLineText>
                    </DotLine>
                    <DotLine>
                        <EntypoIcon
                            name="dot-single"
                            color={theme.main.colors.gray200}
                            size={20}
                        />
                        <DotLineText>Óculos escuros</DotLineText>
                    </DotLine>
                    <DotLine>
                        <EntypoIcon
                            name="dot-single"
                            color={theme.main.colors.gray200}
                            size={20}
                        />
                        <DotLineText>Chapéu, boné, viseira</DotLineText>
                    </DotLine>
                    <DotLine>
                        <EntypoIcon
                            name="dot-single"
                            color={theme.main.colors.gray200}
                            size={20}
                        />
                        <DotLineText>Roupa extra (seca)</DotLineText>
                    </DotLine>
                    <DotLine>
                        <EntypoIcon
                            name="dot-single"
                            color={theme.main.colors.gray200}
                            size={20}
                        />
                        <DotLineText>Repelente</DotLineText>
                    </DotLine>
                </Paragrah>

                <Paragrah>
                    <SubTitle>Local do evento</SubTitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Description>
                </Paragrah>

                <Paragrah>
                    <SpecialTitle>Mormaii Surf Bar</SpecialTitle>
                    <Description>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic
                    </Description>
                </Paragrah>

                <MapViewContainer>
                    <MapView
                        initialRegion={{
                            latitude: coordinate.latitude,
                            longitude: coordinate.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                        region={{
                            latitude: coordinate.latitude,
                            longitude: coordinate.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                        style={{ width: '100%', height: 230 }}>
                        <MapView.Marker.Animated
                            coordinate={coordinate}
                            onDragEnd={(e) => {
                                console.log(
                                    'dragEnd',
                                    e.nativeEvent.coordinate,
                                );
                            }}
                        />
                    </MapView>
                </MapViewContainer>

                <StyledOutlineButton title="Ver no mapa" type="outline" />

                <Spacing />
                <Spacing />

                <ImageGalleryComponent
                    {...smTicketsDetailImageGalleryData}
                    onNavigate={handleImagePressed}
                />

                <BottomModal
                    modal4
                    visible={modalVisible}
                    handleModal={(value) => setModalVisible(value)}>
                    <Description>Opções</Description>
                    <ListItem
                        text="Cancelar ingresso"
                        onPress={handleModalItemPressed}
                    />
                    <ListItem
                        text="Ver detalhes do evento"
                        onPress={handleModalItemPressed}
                    />
                    <ListItem
                        text="Compartilhar evento"
                        onPress={handleModalItemPressed}
                    />
                </BottomModal>

                <Alert
                    visible={overlayVisible}
                    handleAlert={handleAlert}
                    title="Cancelar ingresso"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts "
                    buttonTitle="Quero cancelar"
                    bottomText="Quero continuar com o ingresso"
                />
            </Container>
        </ScrollView>
    );
};

//make this component available to the app
export default Details;
