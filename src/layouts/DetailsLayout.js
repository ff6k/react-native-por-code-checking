import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

export const Container = styled.View((props) => ({
    width: wp(100),
    background: props.theme.main.colors.white,
    display: props.display ? props.display : '',
    alignItems: props.align ? props.align : '',
    justifyContent: props.justify ? props.justify : '',
    paddingHorizontal: wp(props.theme.main.size.padding),
    marginBottom: hp(20),
}));

export const Paragrah = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: hp(props.theme.main.size.spacing),
}));

export const LineUp = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: hp(props.theme.main.size.spacing),
}));

export const LineUpInfo = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: wp(props.theme.main.size.spacing),
}));

export const LineUpText = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '18px',
    color: props.theme.main.colors.gray300,
    textAlign: 'left',
}));

export const DotLine = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: hp(props.theme.main.size.spacing),
}));

export const DotLineText = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '24px',
    color: props.theme.main.colors.gray300,
    textAlign: 'left',
}));

export const ImageText = styled.Text((props) => ({
    backgroundColor: props.theme.main.colors.red,
    width: wp(20),
    paddingVertical: hp(0.6),
    marginBottom: hp(props.theme.main.size.spacing),
    borderRadius: 24,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '14px',
    color: props.theme.main.colors.white,
    textAlign: 'center',
}));

export const ScheduleBar = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: props.full ? wp(props.theme.main.size.innerWidth) : '',
    marginBottom: hp(props.theme.main.size.spacing - 1),
}));

export const ScheduleText = styled.Text((props) => ({
    fontSize: props.theme.main.size.Body2,
    fontWeight: 700,
    lineHeight: '21px',
    color: props.theme.main.colors.gray200,
    marginLeft: wp(props.theme.main.size.spacing),
    textAlign: 'left',
}));

export const QrCode = styled.View((props) => ({
    backgroundColor: '#F8F9FA',
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    alignItems: 'center',
    paddingVertical: hp(props.theme.main.size.padding),
    marginVertical: hp(props.theme.main.size.padding),
}));

export const KnowMore = styled.View((props) => ({
    backgroundColor: '#F8F9FA',
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    alignItems: 'center',
    paddingVertical: hp(props.theme.main.size.padding),
    marginVertical: hp(props.theme.main.size.padding),
}));

export const KnowMoreTitle = styled.Text((props) => ({
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '20px',
    color: props.theme.main.colors.gray400,
    marginBottom: hp(props.theme.main.size.spacing),
    textAlign: 'center',
}));

export const KnowMoreDescription = styled.Text((props) => ({
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '21px',
    color: props.theme.main.colors.gray200,
    marginBottom: hp(props.theme.main.size.spacing),
    textAlign: 'center',
}));

export const SubTitle = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '18px',
    color: props.theme.main.colors.gray500,
    marginBottom: hp(props.theme.main.size.spacing),
}));

export const SpecialTitle = styled.Text((props) => ({
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '20px',
    color: props.theme.main.colors.gray300,
}));

export const MapViewContainer = styled.View((props) => ({
    width: wp(90),
    display: 'flex',
    marginVertical: hp(props.theme.main.size.padding),
}));

export const PhotoGroup = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const Photo = styled.Image((props) => ({
    width: wp(
        props.theme.main.size.innerWidth / 2 -
            props.theme.main.size.spacing * 2,
    ),
    marginBottom: hp(props.theme.main.size.padding),
    resizeMode: 'cover',
}));

export const CoronaInfo = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    backgroundColor: props.theme.main.colors.gray50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(props.theme.main.size.padding),
    paddingVertical: wp(props.theme.main.size.spacing),
    marginVertical: hp(props.theme.main.size.padding),
}));

export const CoronaTextView = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth / 2),
}));

export const LandingItemView = styled.View((props) => ({
    width: wp((props.theme.main.size.innerWidth * 2) / 3),
    height: wp((props.theme.main.size.innerWidth * 2) / 3),
    backgroundColor: props.theme.main.colors.gray50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(props.theme.main.size.padding),
    paddingBottom: hp(props.theme.main.size.spacing),
    paddingTop: hp(props.theme.main.size.padding),
    marginRight: wp(props.theme.main.size.padding),
}));

export const StepView = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: hp(props.theme.main.size.spacing),
    paddingTop: hp(props.theme.main.size.spacing),
}));

export const PriceInfo = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.white,
    display: 'flex',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: wp(100),
    borderTopWidth: 1,
    borderColor: props.theme.main.colors.gray200,
    paddingHorizontal: wp(props.theme.main.size.padding),
    paddingVertical: hp(props.theme.main.size.spacing),

    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    opacity: 1,
    elevation: 2,
}));

export const Heading3 = styled.Text((props) => ({
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    color: props.theme.main.colors.gray400,
}));

export const SubTitle1 = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '18px',
    color: props.theme.main.colors.gray400,
}));

export const SubTitle2 = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '16px',
    color: props.theme.main.colors.gray400,
}));

export const Description1 = styled.Text((props) => ({
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '21px',
    color: props.theme.main.colors.gray300,
}));

export const NumberCircle = styled.View((props) => ({
    width: hp(props.theme.main.size.padding),
    height: hp(props.theme.main.size.padding),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: props.theme.main.colors.secondary,
    marginRight: wp(props.theme.main.size.padding),
}));

export const Number = styled.Text((props) => ({
    fontSize: props.theme.main.size.Body1,
    fontWeight: 700,
    color: props.theme.main.colors.secondary,
}));

export const Bottom = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const BottomPrice = styled.Text((props) => ({
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    color: props.theme.main.colors.gray500,
}));
