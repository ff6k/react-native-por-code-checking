//import liraries
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import _ from 'lodash';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    Container,
    StyledButton,
    Title,
    Description,
    StyledIconButton,
    VFlexBetweenContainer,
} from '../../../layouts/globalLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { theme } from '../../../app-config/theme';
import { Routes } from '../../../app-config/constants';
import { Paragrah } from '../../../layouts/DetailsLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Component = ({ route, navigation }) => {
    const [type, setType] = useState(0);

    const onBtnPressed = () => {
        navigation.navigate(Routes.SUBSCRIPTIONSELECTPAYMENTMETHOD);
    };

    const onSubscriptionTypeSelected = (type) => {
        setType(type);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container header under display="flex" justify="space-between">
                <VFlexBetweenContainer>
                    <VFlexBetweenContainer>
                        <Title>{`Selecione o tipo de assinatura`}</Title>
                        <Description>
                            Lorem ipsum is placeholder text commonly used in the
                            graphic
                        </Description>
                    </VFlexBetweenContainer>

                    <VFlexBetweenContainer>
                        <StyledIconButton
                            type="outline"
                            title={`Na Praia Clube R$ 80,00`}
                            onPress={() => onSubscriptionTypeSelected(0)}
                            icon={
                                <Icon
                                    name={
                                        type === 0
                                            ? 'checkbox-marked-circle'
                                            : ''
                                    }
                                    size={25}
                                    color={theme.main.colors.main}
                                />
                            }
                            iconPosition="right"
                            focus={type === 0}
                        />
                        <StyledIconButton
                            type="outline"
                            title={`Na Praia Festival R$ 400,00`}
                            onPress={() => onSubscriptionTypeSelected(1)}
                            icon={
                                <Icon
                                    name={
                                        type === 1
                                            ? 'checkbox-marked-circle'
                                            : ''
                                    }
                                    size={25}
                                    color={theme.main.colors.main}
                                />
                            }
                            iconPosition="right"
                            focus={type === 1}
                        />
                        <StyledIconButton
                            type="outline"
                            title={`Na Praia Clube R$ 80,00`}
                            onPress={() => onSubscriptionTypeSelected(2)}
                            icon={
                                <Icon
                                    name={
                                        type === 2
                                            ? 'checkbox-marked-circle'
                                            : ''
                                    }
                                    size={25}
                                    color={theme.main.colors.main}
                                />
                            }
                            iconPosition="right"
                            focus={type === 2}
                        />
                        <StyledIconButton
                            type="outline"
                            title={`Na Praia Clube R$ 80,00`}
                            onPress={() => onSubscriptionTypeSelected(3)}
                            icon={
                                <Icon
                                    name={
                                        type === 3
                                            ? 'checkbox-marked-circle'
                                            : ''
                                    }
                                    size={25}
                                    color={theme.main.colors.main}
                                />
                            }
                            iconPosition="right"
                            focus={type === 3}
                        />
                    </VFlexBetweenContainer>
                </VFlexBetweenContainer>

                <StyledButton title="Avançar" onPress={onBtnPressed} />
            </Container>
        </ScrollView>
    );
};

export default Component;
