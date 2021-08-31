import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    HeaderBackgroundContainer,
    HeaderContainer,
    LeftHeaderContainer,
    CenterHeaderContainer,
    HeaderText,
    RightText,
    RightHeaderContainer,
} from './Layout';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity } from 'react-native';
import { theme } from '../../app-config/theme';

const Header = ({ navigation, title, subtitle, iconName, router, color }) => {
    return (
        <HeaderBackgroundContainer color={color}>
            <HeaderContainer>
                <LeftHeaderContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name="chevron-back"
                            color={theme.main.colors.gray200}
                            size={20}
                        />
                    </TouchableOpacity>
                </LeftHeaderContainer>
                <CenterHeaderContainer>
                    <HeaderText>{title}</HeaderText>
                </CenterHeaderContainer>
                <RightHeaderContainer>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(router)}>
                        {/* <RightText>{subtitle}</RightText> */}
                        {iconName && (
                            <Icon
                                name={iconName}
                                color={theme.main.colors.gray200}
                                size={20}
                            />
                        )}
                    </TouchableOpacity>
                </RightHeaderContainer>
            </HeaderContainer>
        </HeaderBackgroundContainer>
    );
};

export default withNavigation(Header);
