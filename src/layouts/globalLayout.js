import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Input, Button, CheckBox, LinearProgress } from 'react-native-elements';

export const Container = styled.View((props) => ({
    width: wp(100),
    height: props.header
        ? hp(
              props.theme.main.size.fullHeight -
                  props.theme.main.size.headerHeight,
          )
        : props.full
        ? hp(props.theme.main.size.fullHeight)
        : '',
    background: props.main
        ? props.theme.main.colors.main
        : props.color
        ? props.color
        : props.theme.main.colors.white,
    display: props.display ? props.display : '',
    alignItems: props.align ? props.align : '',
    justifyContent: props.justify ? props.justify : '',
    paddingHorizontal: wp(props.theme.main.size.padding),
    paddingTop: props.noHeader ? hp(props.theme.main.size.padding) : 0,
    paddingBottom: props.under ? hp(props.theme.main.size.padding) : '',
}));

export const FullAbsoluteContainer = styled.View((props) => ({
    width: wp(100),
    height: hp(props.theme.main.size.fullHeight),
    display: props.display ? props.display : '',
    alignItems: props.align ? props.align : '',
    justifyContent: props.justify ? props.justify : '',
    position: 'absolute',
}));

export const ModalContainer = styled.View((props) => ({
    width: wp(100),
    height: props.lg
        ? hp(props.theme.main.size.lgModalHeight)
        : props.md
        ? hp(props.theme.main.size.modal5)
        : props.sm
        ? hp(props.theme.main.size.smModalHeight)
        : '',
    background: props.theme.main.colors.white,
    display: props.display ? props.display : '',
    alignItems: props.align ? props.align : '',
    justifyContent: props.justify ? props.justify : '',
    paddingTop: hp(props.theme.main.size.spacing),
    paddingHorizontal: wp(props.theme.main.size.padding),
    paddingBottom: hp(props.theme.main.size.padding),
}));

export const FlexBetweenContainer = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: props.full ? wp(props.theme.main.size.innerWidth) : '',
    backgroundColor: '',
}));

export const FlexStartContainer = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: props.full ? wp(props.theme.main.size.innerWidth) : '',
    backgroundColor: '',
}));

export const VFlexBetweenContainer = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
}));

export const ShadowContainer = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    opacity: 1,
    elevation: '2px',
}));

export const Spacing = styled.View((props) => ({
    paddingVertical: hp(props.theme.main.size.spacing),
}));

export const LeftAbsoluteIcon = styled.View((props) => ({
    width: wp(props.theme.main.size.padding + 1),
    height: wp(props.theme.main.size.padding + 1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp(props.theme.main.size.padding),
    left: wp(props.theme.main.size.padding),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
}));

export const RightAbsoluteIcon = styled.View((props) => ({
    width: wp(props.theme.main.size.padding + 1),
    height: wp(props.theme.main.size.padding + 1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp(props.theme.main.size.padding),
    right: wp(props.theme.main.size.padding),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
}));

export const RightAbsoluteIcon2 = styled.View((props) => ({
    width: wp(props.theme.main.size.padding + 1),
    height: wp(props.theme.main.size.padding + 1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp(props.theme.main.size.padding),
    right: wp(props.theme.main.size.padding * 2.85),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
}));

export const Title = styled.Text((props) => ({
    width: props.noFull ? '' : wp(props.theme.main.size.innerWidth),
    marginVertical: hp(props.theme.main.size.titleVerticalMargin),
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    color: props.color ? props.color : props.theme.main.colors.gray500,
}));

export const AlertTitle = styled.Text((props) => ({
    width: props.noFull ? '' : wp(props.theme.main.size.innerWidth),
    marginVertical: hp(props.theme.main.size.titleVerticalMargin),
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '24px',
    color: props.color ? props.color : props.theme.main.colors.gray500,
    textAlign: 'center',
}));

export const Description = styled.Text((props) => ({
    width: props.noFull ? '' : wp(props.theme.main.size.innerWidth),
    marginBottom: props.noMargin
        ? ''
        : hp(props.theme.main.size.descriptionBottomMargin),
    fontSize: props.theme.main.size.Body2,
    fontWeight: 700,
    lineHeight: '21px',
    color: props.theme.main.colors.gray200,
}));

export const Line = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    height: 0.75,
    marginVertical: props.Margin ? hp(props.theme.main.size.padding) : 0,
    backgroundColor: props.theme.main.colors.gray200,
}));

export const StyledInput = styled(Input).attrs((props) => ({
    containerStyle: {
        paddingLeft: 0,
    },
    inputContainerStyle: {
        width: wp(props.theme.main.size.innerWidth),
        height: props.multiline
            ? hp(props.theme.main.size.multilineHeight)
            : hp(props.theme.main.size.buttonHeight),
        paddingHorizontal: 10,
        marginTop: 10,
        borderWidth: props.Rounded ? props.theme.main.size.borderWidth : 0,
        borderColor: props.theme.main.colors.main,
        borderRadius: props.Rounded ? 7 : 0,
        backgroundColor: props.theme.main.colors.white,
    },
    inputStyle: {
        color: props.theme.main.colors.gray300,
    },
    labelStyle: {
        color: props.theme.main.colors.gray300,
        fontSize: 14,
        lineHeight: 21,
    },
}))``;

export const StyledButton = styled(Button).attrs((props) => ({
    containerStyle: {
        width: props.sm
            ? wp(props.theme.main.size.smButtonWidth)
            : props.md
            ? wp(props.theme.main.size.mdButtonWidth)
            : wp(props.theme.main.size.innerWidth),
        borderRadius: 24,
    },
    buttonStyle: {
        height: props.sm
            ? hp(props.theme.main.size.smButtonHeight)
            : props.md
            ? hp(props.theme.main.size.mdButtonHeight)
            : hp(props.theme.main.size.buttonHeight),
        padding: 0,
        backgroundColor: props.theme.main.colors.pink,
        borderColor: props.theme.main.colors.white,
        borderRadius: 24,
    },
    titleStyle: {
        color: props.theme.main.colors.white,
        fontSize: props.sm ? 16 : 18,
    },
    disabledStyle: {
        fontSize: 18,
    },
}))``;

export const StyledOpacityButton = styled(Button).attrs((props) => ({
    containerStyle: {
        width: props.sm
            ? wp(props.theme.main.size.smButtonWidth)
            : props.md
            ? wp(props.theme.main.size.mdButtonWidth)
            : wp(props.theme.main.size.innerWidth),
        borderRadius: 24,
    },
    buttonStyle: {
        height: props.sm
            ? hp(props.theme.main.size.smButtonHeight)
            : hp(props.theme.main.size.buttonHeight),
        padding: 0,
        backgroundColor: props.rgba ? props.rgba : 'rgba(255, 255, 255, 0.16)',
        borderColor: props.theme.main.colors.white,
        borderRadius: 24,
        opactity: 0.4,
    },
    titleStyle: {
        color: props.theme.main.colors.white,
        fontSize: props.sm ? 16 : 18,
    },
    disabledStyle: {
        fontSize: 18,
    },
}))``;

export const StyledOutlineButton = styled(Button).attrs((props) => ({
    containerStyle: {
        width: wp(props.theme.main.size.innerWidth),
        borderRadius: 24,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        opacity: 1,
        elevation: 2,
    },
    buttonStyle: {
        height: hp(props.theme.main.size.buttonHeight),
        backgroundColor: props.theme.main.colors.white,
        borderColor: props.theme.main.colors.gray200,
        borderRadius: 24,
    },
    titleStyle: {
        color: props.theme.main.colors.gray200,
        fontSize: 18,
    },
    disabledStyle: {
        fontSize: 18,
    },
}))``;

export const StyledOverlayButton = styled(Button).attrs((props) => ({
    containerStyle: {
        width: wp(props.theme.main.size.overlayInnerWidth),
        borderRadius: 24,
    },
    buttonStyle: {
        height: hp(props.theme.main.size.mdButtonHeight),
        backgroundColor: props.theme.main.colors.red,
        borderColor: props.theme.main.colors.red,
        borderRadius: 24,
    },
    titleStyle: {
        color: props.theme.main.colors.white,
        fontSize: 14,
    },
    desabledStyle: {
        fontSize: 18,
    },
}))``;

export const StyledCircleButton = styled(Button).attrs((props) => ({
    containerStyle: {
        width: hp(props.theme.main.size.buttonHeight),
        borderRadius: 100,
    },
    buttonStyle: {
        height: hp(props.theme.main.size.buttonHeight),
        backgroundColor: props.theme.main.colors.pink,
        borderColor: props.theme.main.colors.white,
        borderWidth: props.theme.main.size.borderWidth,
        borderRadius: 100,
    },
    titleStyle: {
        color: props.theme.main.colors.white,
        fontSize: 18,
    },
    desabledStyle: {
        fontSize: 18,
    },
}))``;

export const StyledIconButton = styled(Button).attrs((props) => ({
    containerStyle: {
        width: wp(props.theme.main.size.innerWidth),
        marginBottom: hp(props.theme.main.size.spacing),
        borderRadius: props.rounded ? 24 : 8,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        opacity: 1,
        elevation: 2,
    },
    buttonStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hp(props.theme.main.size.buttonHeight),
        backgroundColor: props.theme.main.colors.white,
        borderColor: props.focus
            ? props.theme.main.colors.main
            : props.theme.main.colors.white,
        borderWidth: props.type === 'outline' ? 2 : 0,
        borderRadius: props.rounded ? 24 : 8,
        boxSizing: 'border-box',
        paddingHorizontal: wp(props.theme.main.size.padding),
    },
    titleStyle: {
        color: props.focus
            ? props.theme.main.colors.main
            : props.theme.main.colors.gray300,
        fontSize: 16,
    },
}))``;

export const ProgressBar = styled(LinearProgress).attrs((props) => ({}))``;

export const CustomCheckBox = styled(CheckBox).attrs((props) => ({
    checkedColor: props.theme.main.colors.main,
    uncheckedColor: props.theme.main.colors.main,
    containerStyle: {
        backgroundColor: props.theme.main.colors.white,
        width: wp(props.theme.main.size.innerWidth),
        borderWidth: 0,
        paddingHorizontal: 0,
    },
    textStyle: {
        color: props.theme.main.colors.gray300,
    },
}))``;
