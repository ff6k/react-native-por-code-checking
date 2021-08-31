//import liraries
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import {
    Container,
    StyledButton,
    StyledCircleButton,
    StyledInput,
    Title,
    Description,
    StyledIconButton,
    VFlexBetweenContainer,
} from '../../../layouts/globalLayout';
import {
    FormContainer,
    ButtonContainer,
} from '../../../layouts/ProgressScreenLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { theme } from '../../../app-config/theme';
import { Routes } from '../../../app-config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
import { TextListItem } from '../../../components/ListItem';
import { ProgressBar } from '../../../components/ProgressBar';

const routes = [
    Routes.TICKETSCANCELREASON,
    Routes.TICKETSCANCELMOREREASON,
    Routes.TICKETSPIX,
];

const defaultValues = {};

const CancelTicket = ({ route, navigation }) => {
    const [reason, setReason] = useState(0);

    const { control, formState, handleSubmit, setError } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const { isValid, dirtyFields, errors } = formState;

    const onSubmit = async (model) => {
        if (route.name === Routes.TICKETSCANCELREASON)
            navigation.navigate(Routes.TICKETSCANCELMOREREASON);
        if (route.name === Routes.TICKETSCANCELMOREREASON)
            navigation.navigate(Routes.TICKETSPIX);
        if (route.name === Routes.TICKETSPIX)
            navigation.navigate(Routes.TICKETSCANCELCONFIRM);
        if (route.name === Routes.TICKETSCANCELCONFIRM)
            navigation.navigate(Routes.SUCCESSCANCELTICKET);
    };

    const handleReasonSelected = (reason) => {
        setReason(reason);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container header under display="flex" justify="space-between">
                <VFlexBetweenContainer>
                    {route.name === Routes.TICKETSCANCELREASON && (
                        <Title>{`Qual é o motivo do cancelamento?`}</Title>
                    )}
                    {route.name === Routes.TICKETSCANCELMOREREASON && (
                        <Title>{`Nos fale mais um pouco sobre o motivo`}</Title>
                    )}
                    {route.name === Routes.TICKETSPIX && (
                        <Title>{`Ok, agora informe seu PIX para o reembolso`}</Title>
                    )}
                    {route.name === Routes.TICKETSCANCELCONFIRM && (
                        <Title>{`Confirme o cancelamento`}</Title>
                    )}

                    <Description>
                        {route.name === Routes.TICKETSCANCELREASON &&
                            'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'}
                        {route.name === Routes.TICKETSCANCELMOREREASON &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.TICKETSPIX &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.TICKETSCANCELCONFIRM &&
                            'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .'}
                    </Description>

                    {route.name === Routes.TICKETSCANCELREASON && (
                        <FormContainer>
                            <StyledIconButton
                                type="outline"
                                title={`Lorem Impsum`}
                                onPress={() => handleReasonSelected(0)}
                                icon={
                                    <Icon
                                        name={
                                            reason === 0
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={reason === 0}
                            />
                            <StyledIconButton
                                type="outline"
                                title={`Lorem Impsum`}
                                onPress={() => handleReasonSelected(1)}
                                icon={
                                    <Icon
                                        name={
                                            reason === 1
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={reason === 1}
                            />
                            <StyledIconButton
                                type="outline"
                                title={`Lorem Impsum`}
                                onPress={() => handleReasonSelected(2)}
                                icon={
                                    <Icon
                                        name={
                                            reason === 2
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={reason === 2}
                            />
                            <StyledIconButton
                                type="outline"
                                title={`Lorem Impsum`}
                                onPress={() => handleReasonSelected(3)}
                                icon={
                                    <Icon
                                        name={
                                            reason === 3
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={reason === 3}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.TICKETSCANCELMOREREASON && (
                        <FormContainer>
                            <Controller
                                name="morereason"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <StyledInput
                                        Rounded={true}
                                        label={''}
                                        errorProps={!!errors.morereason}
                                        errorMessage={
                                            errors?.morereason?.message
                                        }
                                        onChangeText={(text) => onChange(text)}
                                        multiline
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.TICKETSPIX && (
                        <FormContainer>
                            <Controller
                                name="cpf"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <StyledInput
                                        Rounded={true}
                                        label={''}
                                        errorProps={!!errors.cpf}
                                        errorMessage={errors?.cpf?.message}
                                        onChangeText={(text) => onChange(text)}
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.TICKETSCANCELCONFIRM && (
                        <FormContainer>
                            <TextListItem
                                leftText="Evento"
                                rightText="Mayden Voyager Festival"
                            />
                            <TextListItem
                                leftText="Valor total"
                                rightText="R$ 560,00"
                            />
                            <TextListItem
                                leftText="Forma de pagamento"
                                rightText="Cartão de crédito"
                            />
                            <TextListItem
                                leftText="Data do cancelamento"
                                rightText="25/06/2021"
                            />
                            <TextListItem
                                leftText="Motivo"
                                rightText="Problemas de saúde"
                            />
                            <TextListItem
                                leftText="PIX para rembolso"
                                rightText="444.555***"
                                noLine
                            />
                        </FormContainer>
                    )}
                </VFlexBetweenContainer>

                <ButtonContainer>
                    {route.name !== Routes.TICKETSCANCELCONFIRM && (
                        <ProgressBar
                            progress={
                                (_.indexOf(routes, route.name) + 1) /
                                routes.length
                            }
                            label={
                                _.indexOf(routes, route.name) +
                                1 +
                                '/' +
                                routes.length
                            }
                        />
                    )}
                    {route.name === Routes.TICKETSCANCELCONFIRM ? (
                        <StyledButton
                            type="solid"
                            title={`Confirmar`}
                            onPress={onSubmit}
                        />
                    ) : (
                        <StyledCircleButton
                            type="solid"
                            onPress={onSubmit}
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={25}
                                    color="white"
                                />
                            }
                        />
                    )}
                </ButtonContainer>
            </Container>
        </ScrollView>
    );
};

export default CancelTicket;
