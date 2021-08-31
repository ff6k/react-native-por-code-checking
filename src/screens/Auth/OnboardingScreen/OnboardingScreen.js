import React, { useState } from 'react';
import _ from 'lodash';
import { Routes } from '~/app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { phone1Img, phone2Img, phone3Img } from '../../../assets/images';
import { theme } from '../../../app-config/theme';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, View } from 'react-native';
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import { StyledOpacityButton } from '../../../layouts/globalLayout';

// create a component
const Component = ({ navigation }) => {

    const Square = ({ isLight, selected }) => {
        let backgroundColor;
        let width;
        let height = 6;

        if (selected) {
            width = 16;
            backgroundColor = 'rgba(255, 255, 255, 0.8)';
        } else {
            width = 6;
            backgroundColor = 'rgba(255, 255, 255, 0.32)';
        }
        return (
            <View
                style={{
                    width,
                    height,
                    marginBottom: heightPercentageToDP(20),
                    marginHorizontal: widthPercentageToDP(
                        theme.main.size.spacing - 1,
                    ),
                    backgroundColor,
                    borderRadius: 5,
                }}
            />
        );
    };

    const Done = ({ isLight, ...props }) => (
        <View
            style={{
                width: wp(100),
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: hp(5),
            }}>
            <StyledOpacityButton
                title="Navegar no app"
                rgba="rgba(255, 255, 255, 0.08)"
                onPress={() => navigation.navigate(Routes.LOGIN)}
            />
        </View>
    );

    return (
        <Onboarding
            showNext={false}
            showSkip={false}
            bottomBarHighlight={false}
            DotComponent={Square}
            DoneButtonComponent={Done}
            containerStyles={{
                height: hp(60),
                width: wp(100),
            }}
            imageContainerStyles={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: hp(60),
                marginTop: hp(5),
                padding: 0,
            }}
            titleStyles={{
                fontSize: 24,
            }}
            subTitleStyles={{
                marginBottom: hp(17),
                fontSize: 12,
            }}
            pages={[
                {
                    backgroundColor: theme.main.colors.secondary,

                    image: <Image source={phone1Img} style={{}} />,
                    title: 'Encontre experiêcias',
                    subtitle:
                        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
                },
                {
                    backgroundColor: theme.main.colors.red,
                    image: <Image source={phone2Img} />,
                    title: 'Participe de eventos',
                    subtitle:
                        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
                },
                {
                    backgroundColor: theme.main.colors.pink,
                    image: (
                        <Image
                            source={phone1Img}
                            width={wp(100)}                            
                            padding={0}
                            margin={0}
                            resizeMode="contain"
                        />
                    ),
                    title: 'Pague de forma fácil',
                    subtitle:
                        'Ao cadastrar seu cartão de crédito, você pode utilizar o QR Code para consumir no evento.',
                },
            ]}
        />
    );
};

//make this component available to the app
export default Component;
