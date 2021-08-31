import React from 'react';
import { IMLocalized } from '../../services/localization/IMLocalization';
import { TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../../app-config/theme';
import {
    Title,
    ImageGallery,
    ImageView,
    GalleryView,
    GalleryTitle,
    CardTitle,
    ImageBox,
    ImageCard,
    VerticalImageCard,
    CardTitleView,
    CardBottomTextView,
    CardBottomTextTitle,
    CardBottomTextDescription,
    MdCardBottomTextTitle,
    MdCardBottomTextDescription,
    MdCardBottomTextView,
    GalleryTitleView,
    GallerySubTitle,
    HCardBottomTextView,
    HCardBottomTextTitle,
    HCardBottomTextSubTitle,
    HImageCard,
    HCardDayMark,
    HCardMarkDayText,
    HCardMarkDayWeek,
    VerticalImageGallery,
    VerticalImageView,
    DetailVerticalImageView,
    FullImageCard,
    FullImageView,
    DetailItem,
    DetailText,
    DetailBoldText,
    ShadowContainer,
    CloseIcon,
    CardBottomButton,
    CardSecondTitle,
    CardBottomColorTextDescription,
    CardBottomColorTextDescriptionView,
} from './Layout';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    FlexBetweenContainer,
    VFlexBetweenContainer,
} from '../../layouts/globalLayout';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export const FullImageCardComponent = (props) => {
    const {
        image,
        bottomTitle,
        bottomColorTitle,
        bottomDescription,
        onNavigate,
    } = props;

    return (
        <FullImageCard>
            <TouchableOpacity onPress={onNavigate}>
                <FullImageView source={image} />
            </TouchableOpacity>
            <CardBottomTextView full>
                {bottomTitle && (
                    <CardBottomTextTitle>{bottomTitle}</CardBottomTextTitle>
                )}
                {bottomDescription && (
                    <CardBottomTextDescription opacity>
                        {bottomDescription}
                    </CardBottomTextDescription>
                )}
                {bottomColorTitle && (
                    <CardBottomColorTextDescriptionView>
                        <Icon
                            name="cards-heart"
                            size={theme.main.size.backIconSize}
                            color={theme.main.colors.pink}
                        />
                        <CardBottomColorTextDescription>
                            {bottomColorTitle}
                        </CardBottomColorTextDescription>
                    </CardBottomColorTextDescriptionView>
                )}
            </CardBottomTextView>
        </FullImageCard>
    );
};

export const VerticalImageCardComponent = (props) => {
    const {
        image,
        title,
        type,
        bottomTitle,
        bottomDescription,
        color,
        underline,
    } = props;

    return (
        <ImageBox>
            <VerticalImageCard>
                <VerticalImageView source={image} />
                {title && (
                    <CardTitleView color={color}>
                        <CardTitle>{title}</CardTitle>
                    </CardTitleView>
                )}

                <CardBottomTextView {...props}>
                    <VFlexBetweenContainer>
                        {bottomTitle && (
                            <CardBottomTextTitle
                                color={color}
                                underline={underline}>
                                {bottomTitle}
                            </CardBottomTextTitle>
                        )}
                    </VFlexBetweenContainer>
                    {bottomDescription && (
                        <FlexBetweenContainer>
                            <Icon
                                name="calendar-blank-outline"
                                color={theme.main.colors.white}
                                size={15}
                                style={{
                                    marginRight: widthPercentageToDP(
                                        theme.main.size.spacing,
                                    ),
                                }}
                            />
                            <CardBottomTextDescription>
                                {bottomDescription}
                            </CardBottomTextDescription>
                        </FlexBetweenContainer>
                    )}
                </CardBottomTextView>
            </VerticalImageCard>
        </ImageBox>
    );
};

export const SpecialImageCardComponent = (props) => {
    const { image, title, subtitle, buttonTitle, color } = props;

    return (
        <ImageBox>
            <VerticalImageCard>
                <VerticalImageView source={image} />
                {title && (
                    <CardTitleView color={color}>
                        <CardTitle color={color}>{subtitle}</CardTitle>
                        <CardSecondTitle>{title}</CardSecondTitle>
                    </CardTitleView>
                )}

                <CardBottomTextView>
                    <CardBottomButton color={color}>
                        {buttonTitle}
                    </CardBottomButton>
                </CardBottomTextView>
            </VerticalImageCard>
        </ImageBox>
    );
};

export const DetailVerticalImageCardComponent = (props) => {
    const {
        image,
        title,
        type,
        bottomTitle,
        bottomDescription,
        color,
        handleClose,
    } = props;

    return (
        <ImageBox>
            <ShadowContainer>
                <VerticalImageCard>
                    <DetailVerticalImageView source={image} />
                    {title && (
                        <CardTitleView color={color}>
                            <CardTitle>{title}</CardTitle>
                        </CardTitleView>
                    )}

                    <CloseIcon>
                        <TouchableOpacity onPress={handleClose}>
                            <Ionicon
                                name="close"
                                color={theme.main.colors.gray200}
                                size={20}
                            />
                        </TouchableOpacity>
                    </CloseIcon>

                    <CardBottomTextView full>
                        <CardBottomTextTitle color={color}>
                            {IMLocalized(bottomTitle)}
                        </CardBottomTextTitle>
                        {bottomDescription && (
                            <CardBottomTextDescription>
                                {bottomDescription}
                            </CardBottomTextDescription>
                        )}
                    </CardBottomTextView>
                </VerticalImageCard>

                <DetailItem>
                    <DetailText>Forma de pagamento</DetailText>
                    <DetailText>PIX</DetailText>
                </DetailItem>
                <DetailItem>
                    <DetailText>2x Normal</DetailText>
                    <DetailText>R$ 90,00</DetailText>
                </DetailItem>
                <DetailItem>
                    <DetailText>1x Infantil</DetailText>
                    <DetailText>R$ 30,00</DetailText>
                </DetailItem>
                <DetailItem>
                    <DetailBoldText>Total</DetailBoldText>
                    <DetailBoldText>R$ 150,00</DetailBoldText>
                </DetailItem>
            </ShadowContainer>
        </ImageBox>
    );
};

export const ImageCardComponent = (props) => {
    const { image, title, type, bottomTitle, bottomDescription, color } = props;

    return (
        <ImageCard>
            <ImageView source={image} />

            <CardTitleView color={color}>
                <CardTitle>{title}</CardTitle>
            </CardTitleView>

            <CardBottomTextView>
                <CardBottomTextTitle>{bottomTitle}</CardBottomTextTitle>
                <CardBottomTextDescription>
                    {bottomDescription}
                </CardBottomTextDescription>
            </CardBottomTextView>
        </ImageCard>
    );
};

export const MDImageCardComponent = (props) => {
    const { image, bottomTitle, bottomDescription } = props;

    return (
        <ImageCard>
            <ImageView source={image} />
            <MdCardBottomTextView>
                <MdCardBottomTextTitle>{bottomTitle}</MdCardBottomTextTitle>
                <MdCardBottomTextDescription>
                    {bottomDescription}
                </MdCardBottomTextDescription>
            </MdCardBottomTextView>
        </ImageCard>
    );
};

export const SMImageCardComponent = (props) => {
    const { image, day, month, bottomTitle, bottomDescription } = props;

    return (
        <HImageCard>
            <ImageCard>
                <ImageView source={image} />
                <HCardDayMark>
                    <HCardMarkDayText>{day}</HCardMarkDayText>
                    <HCardMarkDayWeek>{month}</HCardMarkDayWeek>
                </HCardDayMark>
            </ImageCard>
            <HCardBottomTextView>
                <HCardBottomTextTitle>{bottomTitle}</HCardBottomTextTitle>
                <FlexBetweenContainer>
                    <Ionicon
                        name="location-outline"
                        size={20}
                        color={theme.main.colors.red}
                    />
                    <HCardBottomTextSubTitle>
                        {bottomDescription}
                    </HCardBottomTextSubTitle>
                </FlexBetweenContainer>
            </HCardBottomTextView>
        </HImageCard>
    );
};

export const ImageGalleryComponent = (props) => {
    const { title, subtitle, data, type, onNavigate, divide, scroll } = props;

    return (
        <GalleryView>
            {type !== 'lg' && (
                <GalleryTitleView>
                    <GalleryTitle>{title}</GalleryTitle>
                    {subtitle && <GallerySubTitle>{subtitle}</GallerySubTitle>}
                </GalleryTitleView>
            )}
            {scroll ? (
                <ScrollView horizontal={true}>
                    <ImageGallery divide={divide}>
                        {data.map((d, index) => (
                            <TouchableOpacity onPress={onNavigate}>
                                {type === 'lg' && (
                                    <ImageCardComponent
                                        {...d}
                                        type={props.type}
                                    />
                                )}

                                {type === 'md' && (
                                    <MDImageCardComponent
                                        {...d}
                                        type={props.type}
                                    />
                                )}

                                {type === 'sm' && (
                                    <SMImageCardComponent
                                        {...d}
                                        type={props.type}
                                    />
                                )}
                            </TouchableOpacity>
                        ))}
                    </ImageGallery>
                </ScrollView>
            ) : (
                <ImageGallery divide={divide}>
                    {data.map((d, index) => (
                        <TouchableOpacity onPress={onNavigate}>
                            {type === 'lg' && (
                                <ImageCardComponent {...d} type={props.type} />
                            )}

                            {type === 'md' && (
                                <MDImageCardComponent
                                    {...d}
                                    type={props.type}
                                />
                            )}

                            {type === 'sm' && (
                                <SMImageCardComponent
                                    {...d}
                                    type={props.type}
                                />
                            )}
                        </TouchableOpacity>
                    ))}
                </ImageGallery>
            )}
        </GalleryView>
    );
};

export const VerticalImageGalleryComponent = (props) => {
    const { title, subtitle, data, type, onNavigate } = props;

    return (
        <GalleryView>
            {title && <Title gray>{IMLocalized(title)}</Title>}
            <ScrollView>
                {props.scroll ? (
                    <VerticalImageGallery>
                        {data.map((d, index) => (
                            <TouchableOpacity onPress={() => onNavigate(d)}>
                                {
                                    <VerticalImageCardComponent
                                        {...d}
                                        type={props.type}
                                    />
                                }
                            </TouchableOpacity>
                        ))}
                    </VerticalImageGallery>
                ) : (
                    <>
                        {data.map((d, index) => (
                            <TouchableOpacity onPress={() => onNavigate(d)}>
                                {
                                    <VerticalImageCardComponent
                                        {...d}
                                        type={props.type}
                                    />
                                }
                            </TouchableOpacity>
                        ))}
                    </>
                )}
            </ScrollView>
        </GalleryView>
    );
};

export const DetailVerticalImageGalleryComponent = (props) => {
    const { title, subtitle, data, type, onNavigate, scroll } = props;

    return (
        <GalleryView>
            {title && <Title gray>{IMLocalized(title)}</Title>}
            <ScrollView>
                <VerticalImageGallery>
                    {data.map((d, index) => (
                        <TouchableOpacity onPress={onNavigate}>
                            {
                                <DetailVerticalImageCardComponent
                                    {...d}
                                    {...props}
                                />
                            }
                        </TouchableOpacity>
                    ))}
                </VerticalImageGallery>
            </ScrollView>
        </GalleryView>
    );
};
