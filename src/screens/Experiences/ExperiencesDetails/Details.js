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
    Line,
    RightAbsoluteIcon2,
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
    CoronaInfo,
    Description1,
    CoronaTextView,
    LandingItemView,
    SubTitle2,
    StepView,
    Heading3,
    NumberCircle,
    Number,
} from '../../../layouts/DetailsLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';
import * as Progress from 'react-native-progress';
import {
    qrCodeImg,
    coronaImg,
    recAvatar1Img,
    recAvatar2Img,
    recAvatar3Img,
    group1Img,
    group2Img,
    group3Img,
    group4Img,
    boatManImg,
    percentImg,
    fotoMainImg,
} from '../../../assets/images';
import {
    FullImageCardComponent,
    ImageGalleryComponent,
} from '../../../components/ImageGallery/ImageGallery';
import { Routes } from '../../../app-config/constants';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import {
    smDetailData,
    smTicketsDetailImageGalleryData,
} from '../../../app-config/fake-db';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeaderIcon from 'react-native-vector-icons/Feather';
import BottomModal from '../../../components/BottomModal';
import { TextListItem } from '../../../components/ListItem';
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import { ProgressBar } from '../../../components/ProgressBar';

// create a component
const Details = ({ navigation }) => {
    StatusBar.setBarStyle('light-content');

    const [coordinate, setCoordinate] = useState({
        latitude: 41.880032,
        longitude: -87.623177,
    });
    const [visible, setVisible] = useState(false);

    const onModalBtnPressed = () => {
        setVisible(false);
        navigation.navigate(Routes.EXPERIENCESSELECTDATE);
    };

    const onImagePressed = () => {
        navigation.navigate(Routes.TICKETSDETAILSCHEDULE);
    };

    return (
        <>
            <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
                <FullImageCardComponent
                    image={fotoMainImg}
                    bottomTitle="Experiências"
                    bottomDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
                    bottomColorTitle="1.024 favoritadas"
                />

                <LeftAbsoluteIcon>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicon
                            name="chevron-back"
                            color={theme.main.colors.gray200}
                            size={theme.main.size.backIconSize}
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
                        <Title>
                            Quem disse que mar calmo não faz bom marinheiro?
                        </Title>
                        <Description>
                            Um super rolé de barco com café da manhã, wake
                            board, sunset com DJ e Corona liberada. Um barco
                            iradíssimo e recheado de Corona? Podendo se divertir
                            com wake board e bóias infláveis? E curtir um sunset
                            ao som de um DJ? Parece sonho, não é? Mas não é
                            mais.
                        </Description>
                    </Paragrah>

                    <Paragrah>
                        <Description>Próxima saída: 04/02/2021</Description>
                        <SubTitle1>Ainda temos 4 vagas restantes</SubTitle1>
                    </Paragrah>

                    <ProgressBar
                        progress={0.8}
                        width={widthPercentageToDP(theme.main.size.innerWidth)}
                        color={theme.main.colors.secondary}
                    />

                    <CoronaInfo>
                        <CoronaTextView>
                            <Description1>
                                Essa experiência foi criada e idealizada pela
                                Corona
                            </Description1>
                        </CoronaTextView>
                        <Image source={coronaImg} />
                    </CoronaInfo>

                    <Line />

                    <Paragrah>
                        <SubTitle>Saiba mais</SubTitle>
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
                        title="Veja mais fotos"
                        type="outline"
                    />

                    <Line Margin />

                    <Paragrah>
                        <SubTitle>Uma experiência consciente</SubTitle>
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

                    <Spacing />
                    <Paragrah>
                        <SubTitle>Roteiro</SubTitle>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Description>
                    </Paragrah>

                    <StepView>
                        <NumberCircle>
                            <Number>1</Number>
                        </NumberCircle>
                        <VFlexBetweenContainer>
                            <SubTitle2>Título 1</SubTitle2>
                            <Description noFull>
                                09:00 da manhã - saída do pontão do Lago Sul com
                                direito a café da manhã reforçado no barco que
                                estará disponível 100% do tempo.
                            </Description>
                        </VFlexBetweenContainer>
                    </StepView>

                    <StepView>
                        <NumberCircle>
                            <Number>2</Number>
                        </NumberCircle>
                        <VFlexBetweenContainer>
                            <SubTitle2>Título 2</SubTitle2>
                            <Description noFull>
                                Visita aos melhores pontos turísticos do lago
                                como o Palácio do Jaburu, Palácio da Alvorada,
                                Hotel Royal Tulip, Barragem do lago, ponte
                                Juscelino Kubitschek, Ermida Dom Bosco etc.
                            </Description>
                        </VFlexBetweenContainer>
                    </StepView>

                    <StepView>
                        <NumberCircle>
                            <Number>3</Number>
                        </NumberCircle>
                        <VFlexBetweenContainer>
                            <SubTitle2>Título 3</SubTitle2>
                            <Description noFull>
                                Um super profissional de wake board chegará de
                                jet ski para atracar no barco e dará aulas de
                                wake board. Prepare as câmeras que os Stories
                                vão floodar!
                            </Description>
                        </VFlexBetweenContainer>
                    </StepView>

                    <StyledOutlineButton
                        title="Continuar lendo"
                        type="outline"
                    />

                    <Line Margin />

                    <Paragrah>
                        <SubTitle>O que oferecemos</SubTitle>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Description>
                    </Paragrah>

                    <DotLine>
                        <Icon
                            name="check-circle-outline"
                            color={theme.main.colors.success}
                            size={25}
                            style={{
                                marginRight: widthPercentageToDP(
                                    theme.main.size.spacing,
                                ),
                            }}
                        />
                        <SubTitle2>Fotógrafo profissional</SubTitle2>
                    </DotLine>
                    <DotLine>
                        <Icon
                            name="check-circle-outline"
                            color={theme.main.colors.success}
                            size={25}
                            style={{
                                marginRight: widthPercentageToDP(
                                    theme.main.size.spacing,
                                ),
                            }}
                        />
                        <SubTitle2>Café da manhã</SubTitle2>
                    </DotLine>
                    <DotLine>
                        <Icon
                            name="check-circle-outline"
                            color={theme.main.colors.success}
                            size={25}
                            style={{
                                marginRight: widthPercentageToDP(
                                    theme.main.size.spacing,
                                ),
                            }}
                        />
                        <SubTitle2>Cerveja liberada</SubTitle2>
                    </DotLine>
                    <DotLine>
                        <Icon
                            name="check-circle-outline"
                            color={theme.main.colors.success}
                            size={25}
                            style={{
                                marginRight: widthPercentageToDP(
                                    theme.main.size.spacing,
                                ),
                            }}
                        />
                        <SubTitle2>Churrasco a bordo</SubTitle2>
                    </DotLine>
                    <DotLine>
                        <Icon
                            name="check-circle-outline"
                            color={theme.main.colors.success}
                            size={25}
                            style={{
                                marginRight: widthPercentageToDP(
                                    theme.main.size.spacing,
                                ),
                            }}
                        />
                        <SubTitle2>Colete salva-vidas</SubTitle2>
                    </DotLine>

                    <Line Margin />

                    <Paragrah>
                        <SubTitle>O que levar?</SubTitle>
                        <Description>
                            Veja os itens essenciais para fazer com que usa
                            experiência seja completa
                        </Description>
                        <DotLine>
                            <EntypoIcon
                                name="dot-single"
                                color={theme.main.colors.gray200}
                                size={20}
                            />
                            <DotLineText>Protetor solar</DotLineText>
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
                        <SubTitle>Local de partida</SubTitle>
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

                    <ImageGalleryComponent {...smDetailData} />
                </Container>
            </ScrollView>

            <PriceInfo>
                <FlexBetweenContainer full>
                    <VFlexBetweenContainer>
                        <Description noFull>Preço</Description>
                        <SubTitle1>R$ 300 / pessoa</SubTitle1>
                    </VFlexBetweenContainer>
                    <StyledButton
                        sm
                        title="Ver datas"
                        onPress={() => setVisible(true)}
                    />
                </FlexBetweenContainer>
            </PriceInfo>

            <BottomModal
                modal6
                visible={visible}
                handleModal={(value) => setVisible(value)}>
                <VFlexBetweenContainer>
                    <FlexBetweenContainer full>
                        <VFlexBetweenContainer>
                            <Description noFull>Preço</Description>
                            <Heading3>R$ 300 / pessoa</Heading3>
                        </VFlexBetweenContainer>
                    </FlexBetweenContainer>

                    <TextListItem leftText="Duração" rightText="8 horas" />
                    <TextListItem
                        leftText="Período"
                        rightText="Manhã e tarde"
                    />
                    <TextListItem
                        leftText="Tipo de atração"
                        rightText="Coletiva"
                    />
                </VFlexBetweenContainer>

                <StyledButton
                    title="Selecionar datas"
                    onPress={onModalBtnPressed}
                />
            </BottomModal>
        </>
    );
};

//make this component available to the app
export default Details;
