import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Button, CheckBox } from 'react-native-elements';

export const Title = styled.Text((props) => ({
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    color: props.gray
        ? props.theme.main.colors.gray500
        : props.theme.main.colors.white,
    marginBottom: hp(props.theme.main.size.spacing),
}));

export const GalleryView = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: hp(props.theme.main.size.padding),
}));

export const GalleryTitleView = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const GalleryTitle = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '20px',
    color: props.theme.main.colors.gray500,
}));

export const GallerySubTitle = styled.Text((props) => ({
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '20px',
    color: props.theme.main.colors.gray200,
}));

export const ImageGallery = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: props.divide ? 1 : 0,
    borderColor: 'rgba(206, 212, 218, 0.5)',
    paddingBottom: hp(props.theme.main.size.spacing + 1),
    paddingTop: hp(props.theme.main.size.spacing),
}));

export const ImageBox = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const ImageCard = styled.View((props) => ({}));

export const VerticalImageCard = styled.View((props) => ({
    marginBottom: hp(props.theme.main.size.spacing + 1),
}));

export const FullImageCard = styled.View((props) => ({
    marginBottom: hp(props.theme.main.size.padding),
}));

export const DetaildCard = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingBottom: hp(props.theme.main.size.padding),
    paddingHorizontal: wp(props.theme.main.size.padding),
}));

export const VerticalImageGallery = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingBottom: hp(props.theme.main.size.padding),
    paddingTop: hp(props.theme.main.size.spacing),
}));

export const ImageView = styled.Image((props) => ({
    width: props.lg
        ? wp(props.theme.main.size.lgImageWidth)
        : props.md
        ? wp(props.theme.main.size.mdImageWidth)
        : props.sm
        ? wp(props.theme.main.size.smImageWidth)
        : '',
    marginRight: wp(props.theme.main.size.spacing + 2),
    resizeMode: 'contain',
}));

export const VerticalImageView = styled.Image((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    borderRadius: 12,
    resizeMode: 'cover',
}));

export const DetailVerticalImageView = styled.Image((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    resizeMode: 'cover',
}));

export const FullImageView = styled.Image((props) => ({
    width: wp(props.theme.main.size.fullWidth),
    height: hp(45),
    resizeMode: 'cover',
}));

export const CardTitleView = styled.View((props) => ({
    backgroundColor: props.color,
    position: 'absolute',
    top: hp(2),
    left: wp(5),
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: 24,
}));

export const CloseIcon = styled.View((props) => ({
    width: wp(props.theme.main.size.padding + 1),
    height: wp(props.theme.main.size.padding + 1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp(2),
    right: wp(5),
    backgroundColor: props.theme.main.colors.black,
    borderRadius: 15,
    // opacity: 0.4
}));

export const CardTitle = styled.Text((props) => ({
    fontSize: props.theme.main.size.Small,
    fontWeight: 600,
    lineHeight: '12px',
    color: props.color ? props.color : props.theme.main.colors.white,
}));

export const CardSecondTitle = styled.Text((props) => ({
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '30px',
    color: props.theme.main.colors.white,
}));

export const CardBottomButton = styled.Text((props) => ({
    backgroundColor: props.theme.main.colors.primary,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '16px',
    color: props.theme.main.colors.white,
    marginVertical: hp(props.theme.main.size.spacing - 1),
    paddingVertical: 3,
    paddingHorizontal: wp(props.theme.main.size.spacing),
    borderBottomWidth: props.color ? hp(1) : 0,
    borderColor: props.color,
    borderRadius: 50,
}));

export const CardBottomTextView = styled.View((props) => ({
    width: props.full
        ? wp(props.theme.main.size.fullWidth * 0.8)
        : wp(props.theme.main.size.lgImageWidth * 0.8),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: hp(3),
    left: wp(6),
}));

export const CardBottomTextTitle = styled.Text((props) => ({
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Montserrat',
    lineHeight: '26px',
    color: props.theme.main.colors.white,
    marginBottom: hp(props.theme.main.size.spacing - 1),
    borderBottomWidth: props.underline ? hp(0.6) : 0,
    borderColor: props.color,
}));

export const CardBottomUnderlineTextTitle = styled.Text((props) => ({
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '26px',
    color: props.theme.main.colors.white,
    marginBottom: hp(props.theme.main.size.spacing - 1),
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: props.color,
    backgroundColor: 'blue',
}));

export const CardBottomTextDescription = styled.Text((props) => ({
    fontSize: props.theme.main.size.Body2,
    fontWeight: 400,
    lineHeight: '21px',
    color: props.opacity
        ? props.theme.main.colors.opacityText
        : props.theme.main.colors.white,
}));

export const CardBottomColorTextDescriptionView = styled.View((props) => ({   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(props.theme.main.size.spacing),    
}));

export const CardBottomColorTextDescription = styled.Text((props) => ({
    fontSize: props.theme.main.size.Body2,
    fontWeight: 400,
    lineHeight: '21px',
    color: props.opacity
        ? props.theme.main.colors.opacityText
        : props.theme.main.colors.pink,
    marginLeft: wp(props.theme.main.size.spacing),    
}));

export const MdCardBottomTextView = styled.View((props) => ({
    width: wp(props.theme.main.size.lgImageWidth * 0.6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: hp(3),
    left: wp(6),
}));

export const MdCardBottomTextTitle = styled.Text((props) => ({
    fontSize: 12,
    fontWeight: 700,
    lineHeight: '12px',
    color: props.theme.main.colors.secondary,
    marginBottom: hp(props.theme.main.size.spacing - 1),
}));

export const MdCardBottomTextDescription = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '21px',
    color: props.theme.main.colors.white,
}));

export const HImageCard = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
}));

export const HCardDayMark = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.white,
    position: 'absolute',
    width: hp(props.theme.main.size.buttonHeight),
    height: hp(props.theme.main.size.buttonHeight),
    bottom: hp(props.theme.main.size.spacing),
    left: hp(props.theme.main.size.spacing),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(props.theme.main.size.spacing),
    borderRadius: 8,
}));

export const HCardMarkDayText = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '18px',
    color: props.theme.main.colors.gray400,
}));

export const HCardMarkDayWeek = styled.Text((props) => ({
    fontSize: 9,
    fontWeight: 600,
    lineHeight: '9px',
    color: props.theme.main.colors.gray200,
}));

export const HCardBottomTextView = styled.View((props) => ({
    width: wp(props.theme.main.size.mdImageWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: hp(props.theme.main.size.spacing),
}));

export const HCardBottomTextTitle = styled.Text((props) => ({
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '24px',
    color: props.theme.main.colors.gray300,
    marginBottom: hp(props.theme.main.size.spacing - 1),
}));

export const HCardBottomTextSubTitle = styled.Text((props) => ({
    fontSize: 14,
    fontWeight: 600,
    // lineHeight: '14px',
    color: props.theme.main.colors.red,
    // marginBottom: hp(props.theme.main.size.spacing - 1),
}));

export const ShadowContainer = styled.View((props) => ({
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: props.theme.main.size.padding,
    backgroundColor: props.theme.main.colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    opacity: 1,
    elevation: 2,
    marginBottom: hp(props.theme.main.size.spacing+1),
}));

export const DetailItem = styled.View((props) => ({
    width: wp(
        props.theme.main.size.innerWidth - props.theme.main.size.padding * 2,
    ),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: hp(props.theme.main.size.spacing),
    borderBottomWidth: props.border ? 0.75 : 0,
    borderColor: props.theme.main.colors.gray200,
}));

export const DetailText = styled.Text((props) => ({
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '12px',
    color: props.theme.main.colors.gray200,
}));

export const DetailBoldText = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '16px',
    color: props.theme.main.colors.gray400,
}));
