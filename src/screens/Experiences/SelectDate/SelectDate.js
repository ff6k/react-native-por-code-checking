//import liraries
import React, { useState } from 'react';
import _ from 'lodash';
import {
    Container,
    StyledButton,
    Title,
    VFlexBetweenContainer,
} from '../../../layouts/globalLayout';
import { Bottom, BottomPrice } from '../../../layouts/DetailsLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { ScrollView } from 'react-native';
import { theme } from '../../../app-config/theme';
import BottomModal from '../../../components/BottomModal';
import { Routes } from '../../../app-config/constants';
import { DateInfo } from '../../../components/DateInfo';
import { PriceInfo } from '../../../components/PriceInfo';

// create a component
const TicketsDetail = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const onItemPressed = () => {
        setVisible(true);
    };

    const onAdvanceBtnPressed = () => {
        setVisible(false);
        navigation.navigate(Routes.EXPERIENCESADDCART);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container display="flex" justify="flex-start">
                <Title>Escolha a data perfeita para você!</Title>

                <DateInfo
                    date={'Sábado, 17 de abril'}
                    time={`09:00 am`}
                    price={`R$ 100 / pessoa`}
                    count={`Ainda temos 4 vagas restantes`}
                    onPress={onItemPressed}
                />
                <DateInfo
                    date={'Sábado, 17 de abril'}
                    time={`09:00 am`}
                    price={`R$ 100 / pessoa`}
                    count={`Ainda temos 4 vagas restantes`}
                    onPress={onItemPressed}
                />
                <DateInfo
                    date={'Sábado, 17 de abril'}
                    time={`09:00 am`}
                    price={`R$ 100 / pessoa`}
                    count={`Ainda temos 4 vagas restantes`}
                    onPress={onItemPressed}
                />
            </Container>

            <BottomModal
                modal4
                visible={visible}
                handleModal={(value) => setVisible(value)}>
                <VFlexBetweenContainer>
                    <Title>Selecione seus ingressos</Title>
                    <PriceInfo
                        type="Normal"
                        price={`R$ 150,00`}
                        totalPrice={''}
                        number={2}
                    />
                </VFlexBetweenContainer>

                <Bottom>
                    <BottomPrice>{`R$ 300,00`}</BottomPrice>
                    <StyledButton
                        sm
                        title="Avançar"
                        onPress={onAdvanceBtnPressed}
                    />
                </Bottom>
            </BottomModal>
        </ScrollView>
    );
};

//make this component available to the app
export default TicketsDetail;
