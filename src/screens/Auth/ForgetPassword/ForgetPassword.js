//import liraries
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ScrollView, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    Container,
    StyledButton,
    StyledInput,
    Title,
    Description,
    VFlexBetweenContainer,
} from '../../../layouts/globalLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { whatCPFSchema } from '../../../model';
import { theme } from '../../../app-config/theme';
import { Routes } from '../../../app-config/constants';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const defaultValues = {
    cpf: '',
};

const CELL_COUNT = 6;

const ForgetPassword = ({ route, navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const { control, formState, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(whatCPFSchema),
    });

    const { isValid, dirtyFields, errors } = formState;

    const onSubmit = (model) => {
        if (route.name === 'WHATCPF') navigation.navigate(Routes.ACCESSCODE);
        if (route.name === 'ACCESSCODE')
            navigation.navigate(Routes.NEWPASSWORD);
        if (route.name === 'NEWPASSWORD')
            navigation.navigate(Routes.CONFIRMPASSWORD);
        if (route.name === 'CONFIRMPASSWORD')
            navigation.navigate(Routes.SUCCESSCHANGEPASSWORD);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container header under display="flex" justify="space-between">
                <VFlexBetweenContainer>
                    {route.name === 'WHATCPF' && (
                        <Title>{IMLocalized('What is your CPF?')}</Title>
                    )}
                    {route.name === 'ACCESSCODE' && (
                        <Title>{IMLocalized('Access code')}</Title>
                    )}
                    {route.name === 'NEWPASSWORD' && (
                        <Title>
                            {IMLocalized('What will the new password be?')}
                        </Title>
                    )}
                    {route.name === 'CONFIRMPASSWORD' && (
                        <Title>
                            {IMLocalized(
                                'Good! Can you now confirm the new password?',
                            )}
                        </Title>
                    )}
                    <Description>
                        {route.name === 'WHATCPF' &&
                            'Assim conseguimos encontrar a conta que estavinculada ao CPF informado'}
                        {route.name === 'ACCESSCODE' &&
                            'Enter the code that was sent to ...saj@gmail.com. Fill in the fields below'}
                        {route.name === 'NEWPASSWORD' &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === 'CONFIRMPASSWORD' &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                    </Description>

                    {route.name === 'ACCESSCODE' ? (
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
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
                    ) : (
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
                    )}
                </VFlexBetweenContainer>
                <StyledButton
                    type="solid"
                    title={IMLocalized('Access')}
                    // disabled={_.isEmpty(dirtyFields) || !isValid}
                    onPress={onSubmit}
                />
            </Container>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { width: wp(theme.main.size.innerWidth), marginTop: 20 },
    cell: {
        width: wp(11),
        height: wp(11),
        lineHeight: wp(11),
        fontSize: 24,
        borderWidth: 1,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: theme.main.colors.main,
    },
});

export default ForgetPassword;
