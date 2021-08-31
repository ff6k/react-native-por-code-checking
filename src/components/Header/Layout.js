import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styled from "styled-components";

export const HeaderBackgroundContainer = styled.View((props) => ({
    height: hp(props.theme.main.size.headerHeight),
    width: wp(100),
    backgroundColor: props.color ? props.color : props.theme.main.colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const HeaderContainer = styled.View((props) => ({
    height: hp(props.theme.main.size.headerHeight),
    width: wp(100),
    backgroundColor: props.theme.main.colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
}));

export const CenterHeaderContainer = styled.View((props) => ({    
    height: hp(props.theme.main.size.headerHeight),
    width: wp(100),
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const LeftHeaderContainer = styled.View((props) => ({    
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}));

export const RightHeaderContainer = styled.View((props) => ({    
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}));

export const HeaderText = styled.Text((props) => ({
    color: props.theme.main.colors.gray200,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '16px',
    marginLeft: 10,
}));

export const RightText = styled.Text((props) => ({
    fontSize: 14,
    color: props.theme.main.colors.gray200,
    marginLeft: 10,
    fontWeight: 700,
}));

