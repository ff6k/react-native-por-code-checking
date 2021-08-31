import React from 'react';
import _ from 'lodash';
import {
    LeftAbsoluteIcon,
    RightAbsoluteIcon,
    Container,
    Description,
    Title,
} from '../../../layouts/globalLayout';
import { Paragrah } from '../../../layouts/DetailsLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';
import { seaImg } from '../../../assets/images';
import { FullImageCardComponent } from '../../../components/ImageGallery/ImageGallery';
import { Routes } from '../../../app-config/constants';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FeaderIcon from 'react-native-vector-icons/Feather';

// create a component
const About = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <FullImageCardComponent image={seaImg} rightIcon />

            <LeftAbsoluteIcon>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicon
                        name="chevron-back"
                        color={theme.main.colors.gray200}
                        size={20}
                    />
                </TouchableOpacity>
            </LeftAbsoluteIcon>

            <RightAbsoluteIcon>
                <FeaderIcon
                    name="upload"
                    color={theme.main.colors.gray200}
                    size={theme.main.size.backIconSize}
                />
            </RightAbsoluteIcon>

            <Container display="flex" justify="flex-start">
                <Paragrah>
                    <Title>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic
                    </Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Description>
                </Paragrah>
            </Container>
        </ScrollView>
    );
};

//make this component available to the app
export default About;
