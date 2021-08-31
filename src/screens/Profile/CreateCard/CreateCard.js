//import liraries
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ScrollView, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import styled from 'styled-components';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    Container,
    StyledButton,
    StyledCircleButton,
    StyledInput,
    Title,
    Description,
    VFlexBetweenContainer,
} from '../../../layouts/globalLayout';
import { ProgressBar } from '../../../components/ProgressBar';
import { ButtonContainer } from '../../../layouts/ProgressScreenLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { theme } from '../../../app-config/theme';
import { Routes } from '../../../app-config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { CreditCardInput } from 'react-native-credit-card-input';

const CELL_COUNT = 3;

const routes = [
    Routes.PROFILECARDNUMBER,
    Routes.PROFILEPRINTEDNAME,
    Routes.PROFILECPF,
    Routes.PROFILEVALIDPERIOD,
    Routes.PROFILESECURITYCODE,
    Routes.PROFILEBILLINGADDRESS,
];

const defaultValues = {};

const CreateCard = ({ route, navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const { control, formState, handleSubmit, setError } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const { isValid, dirtyFields, errors } = formState;

    const onCardNumberChange = () => {};

    const onSubmit = async (model) => {
        if (route.name === Routes.PROFILECARDNUMBER)
            navigation.navigate(Routes.PROFILEPRINTEDNAME);
        if (route.name === Routes.PROFILEPRINTEDNAME)
            navigation.navigate(Routes.PROFILECPF);
        if (route.name === Routes.PROFILECPF)
            navigation.navigate(Routes.PROFILEVALIDPERIOD);
        if (route.name === Routes.PROFILEVALIDPERIOD)
            navigation.navigate(Routes.PROFILESECURITYCODE);
        if (route.name === Routes.PROFILESECURITYCODE)
            navigation.navigate(Routes.PROFILEBILLINGADDRESS);
        if (route.name === Routes.PROFILEBILLINGADDRESS)
            navigation.navigate(Routes.SUCCESSCREATECARD);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container
                full={route.name !== Routes.PROFILEBILLINGADDRESS}
                header={route.name !== Routes.PROFILEBILLINGADDRESS}
                under
                display="flex"
                justify="space-between">
                <VFlexBetweenContainer
                    noHeight={
                        route.name === routes.PROFILEBILLINGADDRESS
                            ? false
                            : true
                    }>
                    {route.name === Routes.PROFILECARDNUMBER && (
                        <Title>{`Qual o número do cartão?`}</Title>
                    )}
                    {route.name === Routes.PROFILEPRINTEDNAME && (
                        <Title>{`Qual é o nome impresso`}</Title>
                    )}
                    {route.name === Routes.PROFILECPF && (
                        <Title>{`Qual o CPF do proprietário do cartão?`}</Title>
                    )}
                    {route.name === Routes.PROFILEVALIDPERIOD && (
                        <Title>{`Qual o prazo de validade do cartão?`}</Title>
                    )}
                    {route.name === Routes.PROFILESECURITYCODE && (
                        <Title>
                            {`Qual é o código de segurança do cartão?`}
                        </Title>
                    )}
                    {route.name === Routes.PROFILEBILLINGADDRESS && (
                        <Title>
                            {`Ok, agora vamos ao endereço de cobrança`}
                        </Title>
                    )}

                    <Description>
                        {route.name === Routes.PROFILECARDNUMBER &&
                            'Lorem ipsum is placeholder text commonly used in the grapic'}
                        {route.name === Routes.PROFILEPRINTEDNAME &&
                            'Lorem ipsum is placeholder text commonly used in the grapic'}
                        {route.name === Routes.PROFILECPF &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.PROFILEVALIDPERIOD &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.PROFILESECURITYCODE &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.PROFILEBILLINGADDRESS &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                    </Description>

                    {route.name === Routes.PROFILECARDNUMBER && (
                        <FormContainer>
                            <CreditCardInput
                                onChange={onCardNumberChange}
                                inputContainerStyle={{
                                    width: wp(theme.main.size.innerWidth),                                 
                                }}
                                inputStyle={{
                                    color: theme.main.colors.gray300,
                                    height: hp(theme.main.size.buttonHeight),
                                    borderWidth: theme.main.size.borderWidth,
                                    borderColor: theme.main.colors.gray,
                                    borderRadius: 7,
                                    paddingLeft: wp(theme.main.size.spacing),
                                }}
                                labelStyle={{
                                    color: theme.main.colors.gray300,
                                    fontSize: 14,
                                    lineHeight: 21,
                                }}
                                scale={0.3}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.PROFILEPRINTEDNAME && (
                        <FormContainer>
                            <Controller
                                name="printedname"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <StyledInput
                                        Rounded={true}
                                        label={''}
                                        errorProps={!!errors.printedname}
                                        errorMessage={
                                            errors?.printedname?.message
                                        }
                                        onChangeText={(text) => onChange(text)}
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.PROFILECPF && (
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

                    {route.name === Routes.PROFILEVALIDPERIOD && (
                        <FormContainer>
                            <Controller
                                name="validperiod"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <StyledInput
                                        Rounded={true}
                                        label={''}
                                        errorProps={!!errors.validperiod}
                                        errorMessage={
                                            errors?.validperiod?.message
                                        }
                                        onChangeText={(text) => onChange(text)}
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.PROFILESECURITYCODE && (
                        <FormContainer>
                            <CodeField
                                ref={ref}
                                {...props}
                                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <Text
                                        key={index}
                                        style={[
                                            styles.cell,
                                            isFocused && styles.focusCell,
                                        ]}
                                        onLayout={getCellOnLayoutHandler(
                                            index,
                                        )}>
                                        {symbol ||
                                            (isFocused ? <Cursor /> : null)}
                                    </Text>
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.PROFILEBILLINGADDRESS && (
                        <FormContainer noHeight>
                            <StyledInput
                                Rounded={true}
                                label={'CEP'}
                                errorProps={!!errors.validperiod}
                                errorMessage={errors?.validperiod?.message}
                                onChangeText={(text) => onChange(text)}
                            />
                            <StyledInput
                                Rounded={true}
                                label={'Estado'}
                                errorProps={!!errors.validperiod}
                                errorMessage={errors?.validperiod?.message}
                                onChangeText={(text) => onChange(text)}
                            />
                            <StyledInput
                                Rounded={true}
                                label={'País'}
                                errorProps={!!errors.validperiod}
                                errorMessage={errors?.validperiod?.message}
                                onChangeText={(text) => onChange(text)}
                            />
                            <StyledInput
                                Rounded={true}
                                label={'Cidade'}
                                errorProps={!!errors.validperiod}
                                errorMessage={errors?.validperiod?.message}
                                onChangeText={(text) => onChange(text)}
                            />
                            <StyledInput
                                Rounded={true}
                                label={'Bairro'}
                                errorProps={!!errors.validperiod}
                                errorMessage={errors?.validperiod?.message}
                                onChangeText={(text) => onChange(text)}
                            />
                            <StyledInput
                                Rounded={true}
                                label={'Endereço'}
                                errorProps={!!errors.validperiod}
                                errorMessage={errors?.validperiod?.message}
                                onChangeText={(text) => onChange(text)}
                            />
                            <StyledInput
                                Rounded={true}
                                label={'Número da casa'}
                                errorProps={!!errors.validperiod}
                                errorMessage={errors?.validperiod?.message}
                                onChangeText={(text) => onChange(text)}
                            />
                        </FormContainer>
                    )}
                </VFlexBetweenContainer>

                <ButtonContainer>
                    {route.name !== Routes.PERSONALDATA && (
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
                    {route.name === Routes.PERSONALDATA ? (
                        <StyledButton
                            type="solid"
                            title={IMLocalized('Finish registration')}
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

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { width: wp(theme.main.size.innerWidth), marginTop: 20 },
    cell: {
        width: wp(25),
        height: wp(11),
        lineHeight: wp(9),
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        borderRadius: 7,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});

const FormContainer = styled.View((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(props.theme.main.size.innerWidth),
    height: props.noHeight ? '' : hp(50),
}));

export default CreateCard;
