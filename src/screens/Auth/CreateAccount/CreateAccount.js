//import liraries
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    View,
    Animated,
} from 'react-native';
import _ from 'lodash';
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
    StyledIconButton,
    CustomCheckBox,
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
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import DatePicker from '../../../components/DatePicker/DatePicker';
import BottomModal from '../../../components/BottomModal';
import { ProgressBar } from '../../../components/ProgressBar';

const CELL_COUNT = 6;

const routes = [
    Routes.NATIONALITY,
    Routes.FULLNAME,
    Routes.CPF,
    Routes.EMAIL,
    Routes.CODE,
    Routes.BIRTHDATE,
    Routes.GENDER,
    Routes.PCD,
    Routes.CREATEPWD,
    Routes.CONFIRMPWD,
];

const defaultValues = {
    fullname: '',
    cpf: '',
    email: '',
    code: '',
    birthdate: new Date(),
    pcd: '',
    password: '',
    confirm: '',
};

const CreateAccount = ({ route, navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [isBrazilian, setIsBrazilian] = useState(true);
    const [overLang, setOverLang] = useState('English');
    const [gender, setGender] = useState('Man');
    const [PCD, setPCD] = useState('Not');
    const [showPassword, setshowPassword] = useState(true);
    const [termChecked, setTermChecked] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const { control, formState, handleSubmit, setError } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const { isValid, dirtyFields, errors } = formState;

    const onSubmit = async (model) => {
        if (route.name === Routes.NATIONALITY)
            navigation.navigate(Routes.FULLNAME);
        if (route.name === Routes.FULLNAME) navigation.navigate(Routes.CPF);
        if (route.name === Routes.CPF) navigation.navigate(Routes.EMAIL);
        if (route.name === Routes.EMAIL) navigation.navigate(Routes.CODE);
        if (route.name === Routes.CODE) navigation.navigate(Routes.BIRTHDATE);
        if (route.name === Routes.BIRTHDATE) navigation.navigate(Routes.GENDER);
        if (route.name === Routes.GENDER) navigation.navigate(Routes.PCD);
        if (route.name === Routes.PCD) navigation.navigate(Routes.CREATEPWD);
        if (route.name === Routes.CREATEPWD)
            navigation.navigate(Routes.CONFIRMPWD);
        if (route.name === Routes.CONFIRMPWD)
            navigation.navigate(Routes.PERSONALDATA);
        if (route.name === Routes.PERSONALDATA)
            navigation.navigate(Routes.SUCCESSREGISTRATION);
    };

    const handleLangSelect = (text) => {
        if (text === 'brazilian') {
            setIsBrazilian(true);
        } else {
            setIsBrazilian(false);
            setModalVisible(true);
        }
    };

    const handleOverLangSelect = (text) => {
        setOverLang(text);
        setModalVisible(false);
    };

    const handleGenderSelect = (text) => {
        setGender(text);
    };

    const handlePCDSelect = (text) => {
        setPCD(text);
    };

    const _handleDismiss = () => {
        setModalVisible(false);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container header under display="flex" justify="space-between">
                <VFlexBetweenContainer>
                    {route.name === Routes.NATIONALITY && (
                        <Title>{IMLocalized(`What's your nationality?`)}</Title>
                    )}
                    {route.name === Routes.FULLNAME && (
                        <Title>{IMLocalized('What is your full name?')}</Title>
                    )}
                    {route.name === Routes.CPF && (
                        <Title>{IMLocalized('What is the CPF?')}</Title>
                    )}
                    {route.name === Routes.EMAIL && (
                        <Title>{IMLocalized('What is your email?')}</Title>
                    )}
                    {route.name === Routes.CODE && (
                        <Title>{IMLocalized('Access code')}</Title>
                    )}
                    {route.name === Routes.BIRTHDATE && (
                        <Title>{IMLocalized('What is your birth date?')}</Title>
                    )}
                    {route.name === Routes.GENDER && (
                        <Title>{IMLocalized('What is your gender?')}</Title>
                    )}
                    {route.name === Routes.PCD && (
                        <Title>{IMLocalized('What is your gender?')}</Title>
                    )}
                    {route.name === Routes.PCD && (
                        <Title>
                            {IMLocalized('Do you have any type of PCD?')}
                        </Title>
                    )}
                    {route.name === Routes.CREATEPWD && (
                        <Title>
                            {IMLocalized(
                                'Now we need you to create a password',
                            )}
                        </Title>
                    )}
                    {route.name === Routes.CONFIRMPWD && (
                        <Title>
                            {IMLocalized(
                                'Good! Now can you confirm your password?',
                            )}
                        </Title>
                    )}
                    {route.name === Routes.PERSONALDATA && (
                        <Title>
                            {IMLocalized('Use of your personal data')}
                        </Title>
                    )}

                    <Description>
                        {route.name === Routes.NATIONALITY &&
                            'Lorem ipsum is placeholder text commonly used in the grapic'}
                        {route.name === Routes.FULLNAME &&
                            'Enter the code that was sent to ...saj@gmail.com. Fill in the fields below'}
                        {route.name === Routes.CPF &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.EMAIL &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.CODE &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.BIRTHDATE &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.GENDER &&
                            'We ask for this information to personalize messages and other texts and thus provide relevant and personalized content. This information will not be visible to others.'}
                        {route.name === Routes.PCD &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.CREATEPWD &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.CONFIRMPWD &&
                            'Lorem ipsum is placeholder text commonly used in the graphic'}
                        {route.name === Routes.PERSONALDATA &&
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incident ut labore et dolore magna aliqua. Ut enim ad minim veniam, I wanted nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit that cillum dolore I fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
                    </Description>
                    {route.name === Routes.NATIONALITY && (
                        <FormContainer>
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized('Brazilian')}
                                onPress={() => handleLangSelect('brazilian')}
                                icon={
                                    <Icon
                                        name={
                                            isBrazilian
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={isBrazilian}
                            />
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized(`I'm a foreigner`)}
                                onPress={() => handleLangSelect('foreigner')}
                                icon={
                                    <Icon
                                        name={
                                            !isBrazilian
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={!isBrazilian}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.FULLNAME && (
                        <FormContainer>
                            <Controller
                                name="fullname"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <StyledInput
                                        Rounded={true}
                                        label={''}
                                        errorProps={!!errors.fullname}
                                        errorMessage={errors?.fullname?.message}
                                        onChangeText={(text) => onChange(text)}
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.CPF && (
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

                    {route.name === Routes.EMAIL && (
                        <FormContainer>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <StyledInput
                                        Rounded={true}
                                        label={''}
                                        errorProps={!!errors.email}
                                        errorMessage={errors?.email?.message}
                                        onChangeText={(text) => onChange(text)}
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.CODE && (
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

                    {route.name === Routes.BIRTHDATE && (
                        <FormContainer>
                            <Controller
                                name="birthdate"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <DatePicker
                                        width={theme.main.size.innerWidth}
                                        height={theme.main.size.buttonHeight}
                                        type="textinput"
                                        mode={'date'}
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.GENDER && (
                        <FormContainer>
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized('Man')}
                                onPress={() => handleGenderSelect('Man')}
                                icon={
                                    <Icon
                                        name={
                                            gender === 'Man'
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={gender === 'Man'}
                            />
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized(`Women`)}
                                onPress={() => handleGenderSelect('Women')}
                                icon={
                                    <Icon
                                        name={
                                            gender === 'Women'
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={gender === 'Women'}
                            />
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized(`Trans man`)}
                                onPress={() => handleGenderSelect('Trans man')}
                                icon={
                                    <Icon
                                        name={
                                            gender === 'Trans man'
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={gender === 'Trans man'}
                            />
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized(`Trans woman`)}
                                onPress={() =>
                                    handleGenderSelect('Trans woman')
                                }
                                icon={
                                    <Icon
                                        name={
                                            gender === 'Trans woman'
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={gender === 'Trans woman'}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.PCD && (
                        <FormContainer>
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized('Not')}
                                onPress={() => handlePCDSelect('Not')}
                                icon={
                                    <Icon
                                        name={
                                            PCD === 'Not'
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={PCD === 'Not'}
                            />
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized(`Deafness`)}
                                onPress={() => handlePCDSelect('Deafness')}
                                icon={
                                    <Icon
                                        name={
                                            PCD === 'Deafness'
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={PCD === 'Deafness'}
                            />
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized(`Paraplegia`)}
                                onPress={() => handlePCDSelect('Paraplegia')}
                                icon={
                                    <Icon
                                        name={
                                            PCD === 'Paraplegia'
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={PCD === 'Paraplegia'}
                            />
                            <StyledIconButton
                                type="outline"
                                title={IMLocalized(`Visual impairment`)}
                                onPress={() =>
                                    handlePCDSelect('Visual impairment')
                                }
                                icon={
                                    <Icon
                                        name={
                                            PCD === 'Visual impairment'
                                                ? 'checkbox-marked-circle'
                                                : ''
                                        }
                                        size={25}
                                        color={theme.main.colors.main}
                                    />
                                }
                                iconPosition="right"
                                focus={PCD === 'Visual impairment'}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.CREATEPWD && (
                        <FormContainer>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <StyledInput
                                        value={value}
                                        Rounded={true}
                                        label={''}
                                        onChangeText={(text) => onChange(text)}
                                        secureTextEntry={showPassword}
                                        errorProps={!!errors.password}
                                        errorMessage={errors?.password?.message}
                                        rightIcon={
                                            showPassword ? (
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        setshowPassword(false)
                                                    }>
                                                    <Icon
                                                        name="eye"
                                                        size={24}
                                                        color="white"
                                                    />
                                                </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        setshowPassword(true)
                                                    }>
                                                    <Icon
                                                        name="eye-with-line"
                                                        size={24}
                                                        color="white"
                                                    />
                                                </TouchableOpacity>
                                            )
                                        }
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.CONFIRMPWD && (
                        <FormContainer>
                            <Controller
                                name="confirm"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <StyledInput
                                        value={value}
                                        Rounded={true}
                                        label={''}
                                        onChangeText={(text) => onChange(text)}
                                        secureTextEntry={showPassword}
                                        errorProps={!!errors.confirm}
                                        errorMessage={errors?.confirm?.message}
                                        rightIcon={
                                            showPassword ? (
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        setshowPassword(false)
                                                    }>
                                                    <Icon
                                                        name="eye"
                                                        size={24}
                                                        color="white"
                                                    />
                                                </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        setshowPassword(true)
                                                    }>
                                                    <Icon
                                                        name="eye-with-line"
                                                        size={24}
                                                        color="white"
                                                    />
                                                </TouchableOpacity>
                                            )
                                        }
                                    />
                                )}
                            />
                        </FormContainer>
                    )}

                    {route.name === Routes.PERSONALDATA && (
                        <FormContainer>
                            <CustomCheckBox
                                title={IMLocalized(
                                    'I agree to the terms of use',
                                )}
                                checked={termChecked}
                                onPress={() => setTermChecked(!termChecked)}
                            />
                            <CustomCheckBox
                                title={IMLocalized(
                                    'I agree with the privacy policies',
                                )}
                                checked={privacyChecked}
                                onPress={() =>
                                    setPrivacyChecked(!privacyChecked)
                                }
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
                            // disabled={_.isEmpty(dirtyFields) || !isValid}
                            onPress={onSubmit}
                        />
                    ) : (
                        <StyledCircleButton
                            type="solid"
                            // disabled={_.isEmpty(dirtyFields) || !isValid}
                            onPress={handleSubmit(onSubmit)}
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

                <BottomModal
                    lg
                    visible={modalVisible}
                    handleModal={(value) => setModalVisible(value)}>
                    <VFlexBetweenContainer>
                        <Title>{`Select a language`}</Title>

                        <Description>
                            Lorem ipsum is placeholder text commonly used in the
                            grapic
                        </Description>

                        <StyledIconButton
                            type="outline"
                            title={`Portuguese`}
                            onPress={() => handleOverLangSelect('Portuguese')}
                            icon={
                                <Icon
                                    name={
                                        overLang === 'Portuguese'
                                            ? 'checkbox-marked-circle'
                                            : ''
                                    }
                                    size={25}
                                    color={theme.main.colors.main}
                                />
                            }
                            iconPosition="right"
                            focus={overLang === 'Portuguese'}
                        />

                        <StyledIconButton
                            type="outline"
                            title={`English`}
                            onPress={() => handleOverLangSelect('English')}
                            icon={
                                <Icon
                                    name={
                                        overLang === 'English'
                                            ? 'checkbox-marked-circle'
                                            : ''
                                    }
                                    size={25}
                                    color={theme.main.colors.main}
                                />
                            }
                            iconPosition="right"
                            focus={overLang === 'English'}
                        />

                        <StyledIconButton
                            type="outline"
                            title={`Spanish`}
                            onPress={() => handleOverLangSelect('Spanish')}
                            icon={
                                <Icon
                                    name={
                                        overLang === 'Spanish'
                                            ? 'checkbox-marked-circle'
                                            : ''
                                    }
                                    size={25}
                                    color={theme.main.colors.main}
                                />
                            }
                            iconPosition="right"
                            focus={overLang === 'Spanish'}
                        />

                        <StyledIconButton
                            type="outline"
                            title={`Italian`}
                            onPress={() => handleOverLangSelect('Italian')}
                            icon={
                                <Icon
                                    name={
                                        overLang === 'Italian'
                                            ? 'checkbox-marked-circle'
                                            : ''
                                    }
                                    size={25}
                                    color={theme.main.colors.main}
                                />
                            }
                            iconPosition="right"
                            focus={overLang === 'Italian'}
                        />
                    </VFlexBetweenContainer>

                    <StyledButton
                        type="solid"
                        title={`Confirm`}
                        // disabled={_.isEmpty(dirtyFields) || !isValid}
                        onPress={() => _handleDismiss()}
                    />
                </BottomModal>
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
        lineHeight: wp(9),
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default CreateAccount;
