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
    StyledButton,
    RightAbsoluteIcon2,
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
    KnowMore,
    KnowMoreTitle,
    KnowMoreDescription,
} from '../../../layouts/DetailsLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
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
    seaImg,
    lgBackManImg,
} from '../../../assets/images';
import {
    FullImageCardComponent,
    ImageGalleryComponent,
} from '../../../components/ImageGallery/ImageGallery';
import { Routes } from '../../../app-config/constants';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { smBeachDetailData1, smBeachDetailData2, smBeachDetailData3, smTicketsDetailImageGalleryData } from '../../../app-config/fake-db';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListItem } from '../../../components/ListItem';
import BottomModal from '../../../components/BottomModal';
import Alert from '../../../components/Alert';
import FeaderIcon from 'react-native-vector-icons/Feather';

// create a component
const Details = ({ navigation }) => {
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
        navigation.navigate(Routes.EXPERIENCESEVENTSDETSILS);
    };

    const knowMoreBtnPressed = () => {
        navigation.navigate(Routes.SUBSCRIPTIONDASHBOARD);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <FullImageCardComponent image={seaImg} rightIcon />

            <LeftAbsoluteIcon>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicon
                        name="chevron-back"
                        color={theme.main.colors.gray200}
                        size={20}
                    />
                </TouchableOpacity>
            </LeftAbsoluteIcon>

            <RightAbsoluteIcon2>
                <FeaderIcon
                    name="upload"
                    color={theme.main.colors.gray200}
                    size={theme.main.size.backIconSize}
                />
            </RightAbsoluteIcon2>

            <RightAbsoluteIcon>
                <Icon
                    name="heart-outline"
                    color={theme.main.colors.gray200}
                    size={theme.main.size.backIconSize}
                />
            </RightAbsoluteIcon>

            <Container display="flex" justify="flex-start">
                <Paragrah>
                    <Title>Na Praia</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Description>
                </Paragrah>

                <KnowMore>
                    <KnowMoreTitle>Curta de forma simples</KnowMoreTitle>
                    <KnowMoreDescription>
                        Obtenha a assinatura desse evento e participe de todos
                        os eventos sem ter que ficar comprando ingressos
                    </KnowMoreDescription>
                    <StyledButton
                        sm
                        title="Saiba mais"
                        onPress={knowMoreBtnPressed}
                    />
                </KnowMore>

                <Paragrah>
                    <SubTitle>Local do evento</SubTitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Description>
                </Paragrah>

                <Paragrah>
                    <FlexBetweenContainer>
                        <Icon
                            name="map-marker-outline"
                            color={theme.main.colors.gray300}
                            size={30}
                        />
                        <SpecialTitle>Mormaii Surf Bar</SpecialTitle>
                    </FlexBetweenContainer>

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
                

                <ImageGalleryComponent
                    {...smBeachDetailData1}
                    onNavigate={handleImagePressed}
                />

                <ImageGalleryComponent
                    {...smBeachDetailData2}
                    onNavigate={handleImagePressed}
                />

                <ImageGalleryComponent
                    {...smBeachDetailData3}
                    onNavigate={handleImagePressed}
                    noLine
                />

                <BottomModal visible={modalVisible}>
                    <Container noHeader display="flex" justify="flex-start">
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
                    </Container>
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
