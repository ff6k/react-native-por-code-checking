//import liraries
import React, { useState } from 'react';
import { PointPropType, ScrollView, StyleSheet, Text } from 'react-native';
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
    StyledIconButton,
    ModalContainer,
    VFlexBetweenContainer,
} from '../../../layouts/globalLayout';
import { IMLocalized } from '../../../services/localization/IMLocalization';
import { theme } from '../../../app-config/theme';
import { Routes } from '../../../app-config/constants';
import { ListItem, TextListItem } from '../../../components/ListItem';
import { visaImg } from '../../../assets/images';
import { Paragrah } from '../../../layouts/DetailsLayout';
import BottomModal from '../../../components/BottomModal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 3;

const Component = ({ route, navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [visible, setVisible] = useState(false);
    const [codeModalVisible, setCodeModalVisible] = useState(false);
    const [type, setType] = useState(0);

    const onBtnPressed = () => {
        setCodeModalVisible(true);
    };

    const onItemPressed = () => {
        setVisible(true);
    };

    const onPaymentTypeSelected = (type) => {
        setType(type);
    };

    const onModalBtnPressed = () => {
        setVisible(false);
    };

    const onCodeModalBtnPressed = () => {
        setCodeModalVisible(false);
        navigation.navigate(Routes.SUBSCRIPTIONSUCCESS);
    };

    return (
        <ScrollView style={{ backgroundColor: theme.main.colors.white }}>
            <Container under display="flex" justify="center">
                <Title>{`Informações sobre o pagamento`}</Title>
                <Description>
                    Lorem ipsum is placeholder text commonly used in the graphic
                </Description>

                <Description>Forma de pagamento</Description>
                <ListItem
                    image={visaImg}
                    text="Final 5468"
                    onPress={onItemPressed}
                />

                <Paragrah>
                    <Description>Cupom de desconto</Description>
                    <StyledInput Rounded={true} />
                </Paragrah>

                <TextListItem leftText="Sub-total" rightText="R$ 250,00" />
                <TextListItem
                    leftText="Desconto progressivo"
                    rightText="- R$ 10,00"
                />
                <TextListItem
                    leftText="Cupom de desconto"
                    rightText="-  R$ 50,00"
                />
                <TextListItem
                    leftText="Total"
                    rightText="R$ 190,00"
                    size={16}
                    color={theme.main.colors.gray400}
                    noLine
                />

                <Paragrah>
                    <StyledButton
                        title="Realizar pagamento"
                        onPress={onBtnPressed}
                    />
                </Paragrah>
            </Container>

            <BottomModal
                modal85
                visible={visible}
                handleModal={(value) => setVisible(value)}>
                <VFlexBetweenContainer>
                    <Title>Selecione a forma de pagamento</Title>
                    <Description>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic
                    </Description>
                    <StyledIconButton
                        type="outline"
                        title={`Cartão - Final 5468`}
                        onPress={() => onPaymentTypeSelected(0)}
                        icon={
                            <Icon
                                name={
                                    type === 0 ? 'checkbox-marked-circle' : ''
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
                        title={`Cartão - Final 5468`}
                        onPress={() => onPaymentTypeSelected(1)}
                        icon={
                            <Icon
                                name={
                                    type === 1 ? 'checkbox-marked-circle' : ''
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
                        title={`Cartão - Final 5468`}
                        onPress={() => onPaymentTypeSelected(2)}
                        icon={
                            <Icon
                                name={
                                    type === 2 ? 'checkbox-marked-circle' : ''
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
                        title={`PIX`}
                        onPress={() => onPaymentTypeSelected(3)}
                        icon={
                            <Icon
                                name={
                                    type === 3 ? 'checkbox-marked-circle' : ''
                                }
                                size={25}
                                color={theme.main.colors.main}
                            />
                        }
                        iconPosition="right"
                        focus={type === 3}
                    />
                    <StyledIconButton
                        type="outline"
                        title={`Boleto bancário`}
                        onPress={() => onPaymentTypeSelected(4)}
                        icon={
                            <Icon
                                name={
                                    type === 4 ? 'checkbox-marked-circle' : ''
                                }
                                size={25}
                                color={theme.main.colors.main}
                            />
                        }
                        iconPosition="right"
                        focus={type === 4}
                    />
                </VFlexBetweenContainer>

                <StyledButton title="Salvar" onPress={onModalBtnPressed} />
            </BottomModal>

            <BottomModal
                modal5
                visible={codeModalVisible}
                handleModal={(value) => setCodeModalVisible(value)}>
                <VFlexBetweenContainer>
                    <Title>Qual é o código de segurança do cartão?</Title>

                    <Description>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic
                    </Description>

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
                </VFlexBetweenContainer>

                <StyledButton
                    title="Confirmar pagamento"
                    onPress={onCodeModalBtnPressed}
                />
            </BottomModal>
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

export default Component;
