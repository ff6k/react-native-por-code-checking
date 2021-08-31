//import liraries
import React, { useEffect, useState } from 'react';
import { Image, StatusBar, TouchableOpacity } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import Icon from 'react-native-vector-icons/Entypo';
import _ from 'lodash';
import { useForm, Controller } from 'react-hook-form';
import {
    Container,
    Description,
    FlexBetweenContainer,
    StyledButton,
    StyledInput,
    Title,
} from '../../../layouts/globalLayout';
import {
    FormContainer,
    ForgotButton,
    ForgotText,
    SignupButton,
    SignupText,
    NotAccountText,
    SocialButton,
    InputArea,
} from './Layout';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { ScrollView } from 'react-native';
import { theme } from '../../../app-config/theme';
import { fbImg, googleImg, appleImg } from '../../../assets/images';

const defaultValues = {
    email: '',
    password: '',
};

// create a component
const LoginScreen = ({ navigation }) => {
    StatusBar.setBarStyle('dark-content');

    const [showPassword, setshowPassword] = useState(true);
    const { control, formState, handleSubmit, setError } = useForm({
        mode: 'onChange',
        defaultValues,
        // resolver: yupResolver(loginSchema),
    });

    const { isValid, dirtyFields, errors } = formState;

    const onSubmit = async (model) => {
        navigation.navigate(Routes.EXPLORE);
    };

    const goSignup = () => {
        navigation.navigate(Routes.NATIONALITY);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container
                full
                noHeader
                under
                display="flex"
                justify="space-between">
                <FlexBetweenContainer>
                <Title noFull>{IMLocalized('Welcome!')}</Title>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.EXPLORE)}>
                <Description noFull noMargin>Pular login</Description>
                </TouchableOpacity>
                </FlexBetweenContainer>

                <FormContainer>
                    <InputArea>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <StyledInput
                                    Rounded={true}
                                    label={IMLocalized('Email or cell phone')}
                                    errorProps={!!errors.email}
                                    errorMessage={errors?.email?.message}
                                    onChangeText={(text) => onChange(text)}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <StyledInput
                                    value={value}
                                    Rounded={true}
                                    label={IMLocalized('Password')}
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
                    </InputArea>

                    <ForgotButton
                        onPress={() => navigation.navigate(Routes.WHATCPF)}>
                        <ForgotText>
                            {IMLocalized('Forgot password?')}
                        </ForgotText>
                    </ForgotButton>

                    <StyledButton
                        type="outline"
                        title={IMLocalized('Access')}
                        // disabled={_.isEmpty(dirtyFields) || !isValid}
                        onPress={handleSubmit(onSubmit)}
                    />

                    <NotAccountText>
                        {IMLocalized('or access with your social networks')}
                    </NotAccountText>
                    <FlexBetweenContainer full>
                        <SocialButton icon={<Image source={fbImg} />} />
                        <SocialButton icon={<Image source={googleImg} />} />
                        <SocialButton icon={<Image source={appleImg} />} />
                    </FlexBetweenContainer>

                    <SignupButton onPress={goSignup}>
                        <NotAccountText>
                            {IMLocalized('Not have an account yet?')}
                        </NotAccountText>
                        <SignupText>
                            {IMLocalized('Register now for free!')}
                        </SignupText>
                    </SignupButton>
                </FormContainer>
            </Container>
        </ScrollView>
    );
};

//make this component available to the app
export default LoginScreen;
