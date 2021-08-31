//import liraries
import React, { useState } from 'react';
import _ from 'lodash';
import {
    LeftAbsoluteIcon,
    RightAbsoluteIcon,
    Description,
    Spacing,
    StyledOutlineButton,
    Title,
    FlexBetweenContainer,
    StyledButton,
    VFlexBetweenContainer,
    RightAbsoluteIcon2,
    Line,
    FullAbsoluteContainer,
} from '../../../layouts/globalLayout';
import {
    Container,
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
    PriceInfo,
    SubTitle1,
    Bottom,
    BottomPrice,
    LandingItemView,
    SubTitle2,
} from '../../../layouts/DetailsLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';
import {
    qrCodeImg,
    recAvatar1Img,
    recAvatar2Img,
    recAvatar3Img,
    group1Img,
    group2Img,
    group3Img,
    group4Img,
    lgBackManImg,
    percentImg,
} from '../../../assets/images';
import {
    FullImageCardComponent,
    ImageGalleryComponent,
} from '../../../components/ImageGallery/ImageGallery';
import { Routes } from '../../../app-config/constants';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { smEventDetailData, smTicketsDetailImageGalleryData } from '../../../app-config/fake-db';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeaderIcon from 'react-native-vector-icons/Feather';
import BottomModal from '../../../components/BottomModal';
import { PriceInfo as PriceInfoComponent } from '../../../components/PriceInfo';

// create a component
const Details = ({ navigation }) => {
    const [coordinate, setCoordinate] = useState({
        latitude: 41.880032,
        longitude: -87.623177,
    });
    const [visible, setVisible] = useState(false);

    const onPriceInfoBtnPressed = () => {
        setVisible(false);
        navigation.navigate(Routes.EXPERIENCESADDCART);
    };

    const onImagePressed = () => {
        navigation.navigate(Routes.TICKETSDETAILSCHEDULE);
    };

    return (
        <>
            <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
                <FullImageCardComponent image={lgBackManImg} rightIcon />

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
                        <Title>Mayden Voyager Festival</Title>
                        <Description>
                            Lorem ipsum is placeholder text commonly used in the
                            graphic, print, and publishing industries for
                            previewing layouts and visual mockups.
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
                        <SubTitle>Descrição do evento</SubTitle>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                        title="Veja mais fotos"
                        type="outline"
                    />

                    <Line Margin />

                    <Paragrah>
                        <SubTitle>Um evento consciente</SubTitle>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Description>
                    </Paragrah>

                    <ScrollView horizontal={true}>
                        <LandingItemView>
                            <Image source={percentImg} />
                            <SubTitle2>Doação</SubTitle2>
                            <Description noFull>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Description>
                        </LandingItemView>
                        <LandingItemView>
                            <Image source={percentImg} />
                            <SubTitle2>Doação</SubTitle2>
                            <Description noFull>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Description>
                        </LandingItemView>
                        <LandingItemView>
                            <Image source={percentImg} />
                            <SubTitle2>Doação</SubTitle2>
                            <Description noFull>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Description>
                        </LandingItemView>
                    </ScrollView>

                    <StyledOutlineButton
                        title="Adicionar a agenda"
                        type="outline"
                    />

                    <Spacing />
                    <Paragrah>
                        <SubTitle>Line-up</SubTitle>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                    <Spacing />

                    <ImageGalleryComponent
                        {...smEventDetailData}
                        onNavigate={onImagePressed}
                    />
                </Container>
            </ScrollView>

            <PriceInfo>
                <FlexBetweenContainer full>
                    <VFlexBetweenContainer>
                        <Description noFull>A partir de</Description>
                        <SubTitle1>R$ 300 / pessoa</SubTitle1>
                    </VFlexBetweenContainer>

                    <StyledButton
                        md
                        title="Comprar"
                        onPress={() => setVisible(true)}
                    />
                </FlexBetweenContainer>
            </PriceInfo>

            <BottomModal
                modal6
                visible={visible}
                handleModal={(value) => setVisible(value)}>
                <Title>Selecione seus ingressos</Title>
                <ScrollView>
                    <PriceInfoComponent
                        type="Normal"
                        price={`R$ 150,00`}
                        totalPrice={''}
                        number={2}
                    />
                    <PriceInfoComponent
                        type="Normal"
                        price={`R$ 150,00`}
                        totalPrice={''}
                        number={2}
                    />
                    <PriceInfoComponent
                        type="Normal"
                        price={`R$ 150,00`}
                        totalPrice={''}
                        number={2}
                    />
                </ScrollView>

                <Bottom>
                    <BottomPrice>{`R$ 300,00`}</BottomPrice>
                    <StyledButton
                        sm
                        title="Avançar"
                        onPress={onPriceInfoBtnPressed}
                    />
                </Bottom>
            </BottomModal>
        </>
    );
};

//make this component available to the app
export default Details;
