//import liraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, Modal, View, Animated } from 'react-native';
import _ from 'lodash';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { theme } from '../app-config/theme';
import Modal1 from 'react-native-modal';

const BottomModal1 = (props) => {
    return (
        <Modal
            animated
            animationType="slide"
            visible={props.visible}
            transparent
            onRequestClose={() => props.handleModal(false)}
            onBackdropPress={() => props.handleModal(false)}>
            <View style={modalStyles.overlay}>
                <Animated.View
                    style={
                        props.lg
                            ? [modalStyles.lgContainer]
                            : props.md
                            ? [modalStyles.mdContainer]
                            : [modalStyles.container]
                    }>
                    {props.children}
                </Animated.View>
            </View>
        </Modal>
    );
};

const BottomModal = (props) => {
    return (
        <Modal1
            animated
            animationInTiming={600}
            animationOutTiming={600}
            animationType="slide"
            isVisible={props.visible}
            transparent
            onBackButtonPress={() => props.handleModal(false)}
            onBackdropPress={() => props.handleModal(false)}>
            <Container {...props}>{props.children}</Container>
        </Modal1>
    );
};

const Container = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: wp(theme.main.size.fullWidth),
    height: props.modal4
        ? hp(theme.main.size.modal4)
        : props.modal5
        ? hp(theme.main.size.modal5)
        : props.modal6
        ? hp(theme.main.size.modal6)
        : props.modal7
        ? hp(theme.main.size.modal7)
        : props.modal8
        ? hp(theme.main.size.modal8)
        : props.modal85
        ? hp(theme.main.size.modal85)
        : '',
    backgroundColor: theme.main.colors.white,
    paddingVertical: hp(theme.main.size.padding),
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,

    position: 'absolute',
    bottom: hp(-2.5),
    left: wp(-5),
}));

const modalStyles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    lgContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: wp(theme.main.size.fullWidth),
        height: hp(theme.main.size.lgModalHeight),
        backgroundColor: theme.main.colors.white,
        paddingVertical: hp(theme.main.size.padding),
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,

        position: 'absolute',
        bottom: hp(-2.5),
        left: wp(-5),
    },
    mdContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: wp(theme.main.size.fullWidth),
        height: hp(theme.main.size.modal5),
        backgroundColor: theme.main.colors.white,
        paddingVertical: hp(theme.main.size.padding),
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,

        position: 'absolute',
        bottom: hp(-2.5),
        left: wp(-5),
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: wp(theme.main.size.fullWidth),
        height: hp(theme.main.size.modal5),
        backgroundColor: theme.main.colors.white,
        paddingVertical: hp(theme.main.size.padding),
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,

        position: 'absolute',
        bottom: hp(-2.5),
        left: wp(-5),
    },
});

export default BottomModal;
