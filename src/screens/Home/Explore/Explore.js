//import liraries
import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import _ from 'lodash';
import {
    StyledIconButton,
    Container,
    FullAbsoluteContainer,
} from '../../../layouts/globalLayout';
import {
    Title,
    InputArea,
    HeaderView,
    UserMenu,
    Avatar,
    OrangeDecoration,
    PinkDecoration,
    MainDecoration,
    WalletButton,
    WalletImage,
    WalletView,
} from './Layout';
import {
    ImageCardComponent,
    ImageGalleryComponent,
    VerticalImageCardComponent,
    VerticalImageGalleryComponent,
} from '../../../components/ImageGallery/ImageGallery';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { theme } from '../../../app-config/theme';
import { manAvatarImg, qrImg, sceneManImg } from '../../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import BottomModal from '../../../components/BottomModal';
import {
    lgImageGalleryData,
    verticalImageGalleryData,
    mdImageGalleryData,
    smImageGalleryData,
} from '../../../app-config/fake-db';

// create a component
const Explore = ({ navigation }) => {
    StatusBar.setBarStyle('light-content');

    const [modalVisible, setModalVisible] = useState(false);

    const handleAvatarPressed = () => {
        navigation.navigate(Routes.PROFILEDASHBOARD);
    };

    const handleStyledButtonPressed = () => {
        setModalVisible(true);
    };

    const handleImgPressed = () => {
        setModalVisible(false);
        navigation.navigate(Routes.EXPERIENCESDETSILS);
    };

    const handleModalImgPressed = (data) => {
        setModalVisible(false);
        navigation.navigate(Routes.EXPERIENCESDASHBOARD, { ...data });
    };

    const handleWalletBtnPressed = () => {
        setModalVisible(false);
        navigation.navigate(Routes.WALLET);
    };

    return (
        <>
            <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
                <Container noHeader display="flex" justify="flex-start">
                    <MainDecoration />
                    <PinkDecoration />
                    <OrangeDecoration />

                    <HeaderView>
                        <Title color={theme.main.colors.white}>
                            {'Explorar'}
                        </Title>
                        <UserMenu>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate(Routes.NOTIFICATIONDASHBOARD)
                                }>
                                <Icon
                                    color={theme.main.colors.white}
                                    name="bell-check-outline"
                                    size={20}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate(Routes.PAYMENTDASHBOARD)
                                }>
                                <Icon
                                    color={theme.main.colors.white}
                                    name="cart-outline"
                                    size={20}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleAvatarPressed}>
                                <Avatar source={manAvatarImg} />
                            </TouchableOpacity>
                        </UserMenu>
                    </HeaderView>

                    <InputArea>
                        <StyledIconButton
                            rounded
                            nomain
                            color={theme.main.colors.gray200}
                            type="solid"
                            title={IMLocalized('What are you looking for?')}
                            onPress={handleStyledButtonPressed}
                            icon={
                                <Ionicon
                                    name={'search'}
                                    size={25}
                                    color={theme.main.colors.gray200}
                                />
                            }
                            iconPosition="right"
                        />
                    </InputArea>

                    <ImageGalleryComponent
                        divide={true}
                        {...lgImageGalleryData}
                        onNavigate={handleImgPressed}
                    />

                    <ImageGalleryComponent
                        divide={true}
                        {...mdImageGalleryData}
                        onNavigate={handleImgPressed}
                    />

                    <ImageGalleryComponent
                        divide={false}
                        {...smImageGalleryData}
                        onNavigate={handleImgPressed}
                    />
                </Container>
            </ScrollView>

            <BottomModal
                lg
                visible={modalVisible}
                handleModal={(value) => setModalVisible(value)}>
                <VerticalImageGalleryComponent
                    {...verticalImageGalleryData}
                    onNavigate={handleModalImgPressed}
                />
            </BottomModal>

            <FullAbsoluteContainer>
                <WalletButton>
                    <TouchableOpacity onPress={() => handleWalletBtnPressed()}>
                        <WalletImage source={qrImg} />
                        <WalletView>
                            <Ionicon
                                name={'wallet-outline'}
                                size={25}
                                color={theme.main.colors.white}
                            />
                        </WalletView>
                    </TouchableOpacity>
                </WalletButton>
            </FullAbsoluteContainer>
        </>
    );
};

//make this component available to the app
export default Explore;
