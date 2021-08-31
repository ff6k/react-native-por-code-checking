//import liraries
import React from 'react';
import _ from 'lodash';
import {
    Container,
    StyledButton,
    StyledInput,
} from '../../../layouts/globalLayout';
import {
    VictorContainer,
    Content,
    Title,
    Description,
    VictorImage,
    CloseIconBar,
    TextContent,
} from '../../../components/SuccessScreen';
import { imoticImg } from '../../../assets/images';
import { Routes } from '../../../app-config/constants';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../../app-config/theme';

// create a component
const CopyCode = ({ navigation }) => {
    const go = () => {
        navigation.navigate(Routes.TICKETSDASHBOARD);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.main }}>
            <Container main display="flex" justify="flex-start">
                <Content>
                    <CloseIconBar>
                        <TouchableOpacity onPress={go}>
                            <Icon
                                color={theme.main.colors.white}
                                name="close"
                                size={20}
                            />
                        </TouchableOpacity>
                    </CloseIconBar>
                    <TextContent>
                        <VictorContainer>
                            <VictorImage source={imoticImg} />
                        </VictorContainer>
                        <Title>{`Estamos só aguardando seu pagamento!`}</Title>
                        <Description>
                            {`Copie o código abaixo e utilize o Pix Copia e Cola no aplicativo que você vai fazer o pagamento.`}
                        </Description>
                    </TextContent>
                    
                    <StyledInput Rounded={true} label={''} />
                    <Description>{`Pague até: 02/08/2021`}</Description>

                    <StyledButton
                        type="solid"
                        title={`Continuar`}
                        onPress={go}
                    />

<Description>{`Compartihlar código`}</Description>
                </Content>
            </Container>
        </ScrollView>
    );
};

//make this component available to the app
export default CopyCode;
