//import liraries
import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { Description } from '../../../layouts/globalLayout';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { theme } from '../../../app-config/theme';
import {
    imoticon1Img,
    imoticon2Img,
    imoticon3Img,
} from '../../../assets/images';
import { Image } from 'react-native-elements/dist/image/Image';

// create a component
const Dashboard = ({ navigation }) => {
    const [selected, setSelected] = useState();
    const [hidden, setHidden] = useState(false);

    const onPressed = (val) => {
        if(val !==1) {
            navigation.navigate(Routes.NOTIFICATIONABOUT);
        }
        setSelected(val);
        setHidden(false);
    };

    const onHiddenPressed = () => {
        setHidden(true);
        console.log(hidden, selected)
    };
    return (
        <>
            <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
                <Container display="flex" justify="flex-start">
                    <Title>Aqui estão suas últimas notificações</Title>

                    <BackgroundCard hidden={selected === 0 && hidden}>
                        <TouchableOpacity onPress={() => onHiddenPressed()}>
                            <CleanTextView>
                                <CleanText>Limpar</CleanText>
                            </CleanTextView>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPressed(0)}>
                            <Card>
                                <Circle>
                                    <Imoticon source={imoticon1Img} />
                                </Circle>
                                <TextView>
                                    <Subtitle>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphic
                                    </Subtitle>
                                    <Description noMargin>
                                        24/05/2020, 09:00 am
                                    </Description>
                                </TextView>
                            </Card>
                        </TouchableOpacity>
                    </BackgroundCard>

                    <BackgroundCard hidden={selected === 1 && hidden}>
                        <TouchableOpacity onPress={() => onHiddenPressed()}>
                            <CleanTextView>
                                <CleanText>Limpar</CleanText>
                            </CleanTextView>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                onPressed(1);
                            }}>
                            <Card selected={selected === 1}>
                                <Circle>
                                    <Imoticon source={imoticon2Img} />
                                </Circle>
                                <TextView>
                                    <Subtitle>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphic
                                    </Subtitle>
                                    <Description noMargin>
                                        24/05/2020, 09:00 am
                                    </Description>
                                </TextView>
                            </Card>
                        </TouchableOpacity>
                    </BackgroundCard>

                    <BackgroundCard hidden={selected === 2 && hidden}>
                        <TouchableOpacity onPress={() => onHiddenPressed()}>
                            <CleanTextView>
                                <CleanText>Limpar</CleanText>
                            </CleanTextView>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPressed(2)}>
                            <Card>
                                <Circle>
                                    <Imoticon source={imoticon3Img} />
                                </Circle>
                                <TextView>
                                    <Subtitle>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphic
                                    </Subtitle>
                                    <Description noMargin>
                                        24/05/2020, 09:00 am
                                    </Description>
                                </TextView>
                            </Card>
                        </TouchableOpacity>
                    </BackgroundCard>
                </Container>
            </ScrollView>
        </>
    );
};

const Container = styled.View((props) => ({
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
    paddingTop: props.noHeader ? hp(props.theme.main.size.padding) : 0,
    paddingBottom: props.under ? hp(props.theme.main.size.padding) : '',
}));

const Title = styled.Text((props) => ({
    width: props.noFull ? '' : wp(props.theme.main.size.innerWidth),
    marginVertical: hp(props.theme.main.size.titleVerticalMargin),
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    color: props.color ? props.color : props.theme.main.colors.gray500,
    paddingLeft: wp(props.theme.main.size.padding),
    paddingBottom: hp(props.theme.main.size.spacing),
}));

const BackgroundCard = styled.View((props) => ({
    display: props.hidden ? 'none' : 'flex',
    width: wp(props.theme.main.size.fullWidth),
    backgroundColor: props.theme.main.colors.error,
    marginVertical: hp(0.5),
}));

const CleanTextView = styled.View((props) => ({
    height: hp(12),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    position: 'absolute',
    right: 0,
    top: 0,
}));

const CleanText = styled.Text((props) => ({
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '12px',
    color: props.theme.main.colors.white,
    marginRight: hp(props.theme.main.size.padding),
}));

const TextView = styled.View((props) => ({
    width: wp(70),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const Card = styled.View((props) => ({
    backgroundColor: props.theme.main.colors.white,
    width: wp(props.theme.main.size.fullWidth),
    height: hp(12),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.04)',
    paddingVertical: hp(props.theme.main.size.spacing),

    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    opacity: 1,
    elevation: props.selected ? 2 : 0,

    left: props.selected ? wp(-30) : 0,
    borderRadius: props.selected ? 5 : 0,
}));

const Circle = styled.View((props) => ({
    width: hp(props.theme.main.size.buttonHeight),
    height: hp(props.theme.main.size.buttonHeight),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: props.theme.main.colors.gray50,
    marginHorizontal: wp(props.theme.main.size.padding),
}));

const Subtitle = styled.Text((props) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '16px',
    color: props.theme.main.colors.gray400,
    marginBottom: hp(props.theme.main.size.spacing),
}));

const Imoticon = styled.Image((props) => ({}));

//make this component available to the app
export default Dashboard;
