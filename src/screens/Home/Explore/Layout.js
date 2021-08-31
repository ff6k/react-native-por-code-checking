import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Button, CheckBox } from 'react-native-elements';

export const OrangeDecoration = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.secondary,
    width: wp(props.theme.main.size.fullWidth * 1.2),
    height: hp(props.theme.main.size.fullHeight * 0.5),
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: props.theme.main.size.decorationLeftRadius,
    borderBottomRightRadius: props.theme.main.size.decorationRightRadius,
}));

export const PinkDecoration = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.pink,
    width: wp(props.theme.main.size.fullWidth * 1.2),
    height: hp(props.theme.main.size.fullHeight * 0.6),
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: props.theme.main.size.decorationLeftRadius,
    borderBottomRightRadius: props.theme.main.size.decorationRightRadius,
}));

export const MainDecoration = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.main,
    width: wp(props.theme.main.size.fullWidth * 1.2),
    height: hp(props.theme.main.size.fullHeight * 0.7),
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: props.theme.main.size.decorationLeftRadius,
    borderBottomRightRadius: props.theme.main.size.decorationRightRadius,
}));

export const HeaderView = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(props.theme.main.size.innerWidth),
    marginVertical: hp(props.theme.main.size.padding),
}));

export const Title = styled.Text((props) => ({
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    color: props.gray
        ? props.theme.main.colors.gray500
        : props.theme.main.colors.white,
}));

export const UserMenu = styled.View((props) => ({
    width: wp(25),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const Avatar = styled.Image((props) => ({
    width: hp(4),
    height: hp(4),
    resizeMode: 'cover',
}));

export const InputArea = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(props.theme.main.size.innerWidth),
}));

export const WalletButton = styled.View((props) => ({
    width: hp(7.5),
    height: hp(7.5),
    position: 'absolute',
    bottom: hp(props.theme.main.size.padding),
    right: wp(props.theme.main.size.padding),
}));

export const WalletView = styled.View((props) => ({
    width: hp(7.5),
    height: hp(7.5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const WalletImageView = styled.View((props) => ({
    width: hp(3),
    height: hp(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const WalletImage = styled.Image((props) => ({
    width: hp(7.5),
    height: hp(7.5),
    position: 'absolute',
    top: 0,
    left: 0,
}));

export const Count = styled.Text((props) => ({
    backgroundColor: 'red',
    width: hp(1.5),
    height: hp(1.5),
    position: 'absolute',
    top: -1,
    right: -3,
    fontSize: 10,
    fontWeight: 700,
    borderRadius: 5,
    color: props.theme.main.colors.white,
    backgroundColor: props.theme.main.colors.secondary,
    textAlign: 'center'
}));