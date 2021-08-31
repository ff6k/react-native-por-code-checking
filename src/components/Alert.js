//import liraries
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import {
    Title,
    StyledOverlayButton,
    AlertTitle,
} from '../layouts/globalLayout';
import { TouchableOpacity } from 'react-native';
import { theme } from '../app-config/theme';
import { Overlay } from 'react-native-elements';

// IM
// create a component
const Alert = (props) => {
    const { title, description, buttonTitle, bottomText, handleAlert } = props;

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(props.visible);
    }, [props]);

    return (
        <Overlay
            isVisible={visible}
            animated
            animationType="fade"
            onBackdropPress={() => {
                setVisible(false);
                handleAlert(false);
            }}
            overlayStyle={{
                borderRadius: 10,
                width: wp(theme.main.size.overlayWidth),
                height: wp(theme.main.size.overlayWidth),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingHorizontal: wp(theme.main.size.padding),
            }}>
            <AlertTitle noFull>{title}</AlertTitle>
            <OverlayDescription noFull>{description}</OverlayDescription>

            <StyledOverlayButton
                title={buttonTitle}
                onPress={() => {
                    setVisible(false);
                    handleAlert(false, true);
                }}
            />

            {bottomText && (
                <TouchableOpacity
                    onPress={() => {
                        setVisible(false);
                        handleAlert(false);
                    }}>
                    <OverlayDescription>{bottomText}</OverlayDescription>
                </TouchableOpacity>
            )}
        </Overlay>
    );
};

const OverlayDescription = styled.Text((props) => ({
    marginBottom: hp(props.theme.main.size.descriptionBottomMargin),
    fontSize: props.theme.main.size.Body2,
    fontWeight: 700,
    lineHeight: '21px',
    color: props.theme.main.colors.gray200,
    textAlign: 'center',
}));

//make this component available to the app
export default Alert;
