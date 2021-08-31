import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

export const CloseIconBar = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const Content = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    height: hp(props.theme.main.size.fullHeight),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
}));

export const TextItems = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
}));

export const TextItem = styled.Text((props) => ({
    color: props.theme.main.colors.white,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '20px',
    marginVertical: hp(props.theme.main.size.spacing),
}));

export const VictorImage = styled.Image((props) => ({
    width: props.width ? hp(props.width) : hp(3),
    height: props.height ? hp(props.height) : hp(3),
    marginVertical: hp(props.theme.main.size.titleVerticalMargin)
}));

export const Title = styled.Text((props) => ({
    color: props.theme.main.colors.white,
    fontSize: 24,
    fontWeight: 700,
    marginRight: wp(props.theme.main.size.spacing),
    marginVertical: hp(props.theme.main.size.titleVerticalMargin)
}));

export const Description = styled.Text((props) => ({
    color: props.opacity
        ? 'rgba(255, 255, 255, 0.56)'
        : props.theme.main.colors.white,
    fontSize: props.theme.main.size.Body2,
    fontWeight: 400,
    lineHeight: '21px',
}));

export const QrView = styled.View((props) => ({
    width: wp(70),
    height: wp(70),
    alignSelf: 'center',
    marginVertical: hp(props.theme.main.size.padding),
}));

export const QrContainer = styled.View((props) => ({
    width: wp(70),
    height: wp(70),
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
}));

export const QRImage = styled.Image((props) => ({
    resizeMode: 'contain',
}));

export const Divide = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    marginVertical: hp(props.theme.main.size.spacing),
}));
