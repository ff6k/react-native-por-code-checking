//import liraries
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import {
    LeftAbsoluteIcon,
    Container,
    FullAbsoluteContainer,
} from '../../../layouts/globalLayout';
import { theme } from '../../../app-config/theme';
import { boatManImg, sceneManImg, seaImg, qrImg } from '../../../assets/images';
import {
    FullImageCardComponent,
    ImageGalleryComponent,
    SpecialImageCardComponent,
} from '../../../components/ImageGallery/ImageGallery';
import {
    smImageGalleryData,
    experienceDashboardData1,
    experienceDashboardData2,
    experienceDashboardData3,
} from '../../../app-config/fake-db';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Routes } from '../../../app-config/constants';
import {
    Count,
    CountView,
    WalletButton,
    WalletImage,
    WalletImageView,
    WalletView,
} from '../../Home/Explore/Layout';

// create a component
const Dashboard = ({ route, navigation }) => {
    const handleWalletBtnPressed = () => {
        navigation.navigate(Routes.PAYMENTDASHBOARD);
    };

    return (
        <>
            <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
                <FullImageCardComponent
                    image={
                        route.params.bottomTitle === 'Experiences'
                            ? boatManImg
                            : route.params.bottomTitle === 'Events'
                            ? sceneManImg
                            : ''
                    }
                    bottomTitle={route.params.bottomTitle}
                    bottomDescription="Find the perfect experiences for you to make the most of!"
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
                {route.params.bottomTitle === 'Experiences' ? (
                    <Container display="flex" justify="flex-start">
                        <ImageGalleryComponent
                            divide
                            {...experienceDashboardData1}
                            onNavigate={() =>
                                navigation.navigate(Routes.EXPERIENCESDETSILS)
                            }
                        />
                        <ImageGalleryComponent
                            divide
                            {...experienceDashboardData2}
                            onNavigate={() =>
                                navigation.navigate(Routes.EXPERIENCESDETSILS)
                            }
                        />

                        <ImageGalleryComponent
                            {...experienceDashboardData3}
                            onNavigate={() =>
                                navigation.navigate(Routes.EXPERIENCESDETSILS)
                            }
                        />
                    </Container>
                ) : route.params.bottomTitle === 'Events' ? (
                    <Container display="flex" justify="flex-start">
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(
                                    Routes.EXPERIENCESEVENTSBEACHDETSILS,
                                )
                            }>
                            <SpecialImageCardComponent
                                subtitle="NA PRAIA"
                                title="Novo litoral, um clube de experiências pé na areia"
                                buttonTitle="Descubra"
                                image={seaImg}
                            />
                        </TouchableOpacity>
                        <ImageGalleryComponent
                            {...smImageGalleryData}
                            onNavigate={() =>
                                navigation.navigate(
                                    Routes.EXPERIENCESEVENTSDETSILS,
                                )
                            }
                        />
                        <ImageGalleryComponent
                            {...smImageGalleryData}
                            onNavigate={() =>
                                navigation.navigate(
                                    Routes.EXPERIENCESEVENTSDETSILS,
                                )
                            }
                        />
                        <ImageGalleryComponent
                            {...smImageGalleryData}
                            onNavigate={() =>
                                navigation.navigate(
                                    Routes.EXPERIENCESEVENTSDETSILS,
                                )
                            }
                        />
                    </Container>
                ) : (
                    <></>
                )}
            </ScrollView>
            
            {route.params.from === Routes.EXPERIENCESSUCCESSADDCART && (
                <FullAbsoluteContainer>
                    <WalletButton>
                        <TouchableOpacity
                            onPress={() => handleWalletBtnPressed()}>
                            <WalletImage source={qrImg} />
                            <WalletView>
                                <WalletImageView>
                                    <Ionicon
                                        name={'cart-outline'}
                                        size={25}
                                        color={theme.main.colors.white}
                                    />
                                    <Count>2</Count>
                                </WalletImageView>
                            </WalletView>
                        </TouchableOpacity>
                    </WalletButton>
                </FullAbsoluteContainer>
            )}
        </>
    );
};

//make this component available to the app
export default Dashboard;
