import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Input, Button } from 'react-native-elements';

// export const Container = styled.View((props) => ({
//     width: wp(100),
//     height: hp(props.theme.main.size.fullHeight-props.theme.main.size.headerHeight),
//     background: props.theme.main.colors.white,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingBottom: hp(props.theme.main.size.padding),
// }));

// export const Content = styled.View(props => ({
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: wp(props.theme.main.size.innerWidth),
// }));

export const FormContainer = styled.View(props => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(props.theme.main.size.innerWidth),
}));

export const ButtonContainer = styled.View(props => ({   
    width: wp(props.theme.main.size.innerWidth),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',   
}));