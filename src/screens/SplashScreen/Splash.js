//import liraries
import React, { useEffect } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Container } from '../../layouts/globalLayout';
import { Routes } from '../../app-config/constants';
import { init } from '../../services/localization/IMLocalization';
import { splashImg } from '../../assets/images';
import auth from '@react-native-firebase/auth';
import { StatusBar } from 'react-native';

const Splash = ({ navigation }) => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('light-content');

    const setLang = useSelector(({ auth }) => auth.language);
    const checked = useSelector(({ auth }) => auth.checked);
    const role = useSelector(({ auth }) => auth.role);

    useEffect(() => {
        if (setLang) {
            init(setLang);
        }
    }, [setLang]);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => {
            if (user) {
                setTimeout(() => {
                    if (checked) {
                        navigation.replace(role);
                    } else {
                        auth().signOut();
                        navigation.replace(Routes.ONBOARDINGSCREEN);
                    }
                }, 3000);
            } else {
                setTimeout(() => {
                    if (checked) {
                        navigation.replace(role);
                    } else {
                        auth().signOut();
                        navigation.replace(Routes.ONBOARDINGSCREEN);
                    }
                }, 5000);
            }
        });

        return subscriber;
    }, []);

    return (
        <Container display="flex" align="center" justify="center">
            <SplashLogo source={splashImg} />
        </Container>
    );
};

const SplashLogo = styled.Image({
    height: hp(100),
    width: wp(100),
    resizeMode: 'stretch',
});

export default Splash;
