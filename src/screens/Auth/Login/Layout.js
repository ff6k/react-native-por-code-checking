import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Button, CheckBox } from 'react-native-elements';

export const FormContainer = styled.View(props => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(props.theme.main.size.innerWidth),
    height: hp(78),
    marginTop: hp(props.theme.main.size.spacing)
}));

export const InputArea = styled.View(props => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(props.theme.main.size.innerWidth),
    height: hp(25),
}));

export const RememberCheckBox = styled(CheckBox).attrs((props) => ({
    containerStyle: {
        width: wp(40),
        backgroundColor: props.theme.main.colors.main,
        borderWidth: 0,
        paddingHorizontal: 0,
    },
    textStyle: {
        color: props.theme.main.colors.white,
    },
}))``;

export const ForgotButton = styled.TouchableOpacity((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
}));

export const SignupButton = styled.TouchableOpacity((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const SocialButton = styled(Button).attrs((props) => ({
    containerStyle: {
        width: wp(25),
    },
    buttonStyle: {  
        height: hp(7),       
        backgroundColor: props.theme.main.colors.white,
        borderColor: `rgba(206, 212, 218, 0.5)`,
        borderWidth: props.theme.main.size.borderWidth,
        borderRadius: 5,   
    },    
}))``;

export const ForgotText = styled.Text((props) => ({
    fontSize: props.theme.main.size.Body2,
    fontWeight: 600,
    lineHeight: '14px',
    color: props.theme.main.colors.main,
}));

export const NotAccountText = styled.Text((props) => ({
    fontSize: props.theme.main.size.Body2,
    fontWeight: 400,
    lineHeight: '21px',
    color: props.theme.main.colors.gray200,
}));

export const SignupText = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '24px',
    color: props.theme.main.colors.main,
}));