import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, ImageBackground, Text, Dimensions, TouchableOpacity } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import useTheme from "../../hooks/useTheme";
import CarouselComponent from '../../components/common/Carousel';
import BackButton from '../../components/common/BackButton';
import CommonModal from '../../components/Modal/CommonModal';

var screenWidth = Dimensions.get('window').width; //full width

interface Props extends RouteComponentProps {
    dispatch: Dispatch,
    history
}

// @ts-ignore
const ImagePath = require("../../images/shopping.jpg")
// @ts-ignore
const ImageShopping = require("../../shoppingGirl.jpg")

const productData = {
    name: "Colorfull Styles Top",
    price: "$20",
    images: [ImagePath, ImageShopping, ImagePath, ImageShopping],
    idealFor: 'woman',
    color: ['red', 'blue', 'black', 'green'],
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
}

const ProductDetails: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();
    const [open, setOpen] = useState(false);

    const backButton = () => {
        history.push('/shopping/')
    }

    const checkout = () => {
        history.push('/checkout/')
    }

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    const selectColors = (color: any[]) => {
        return (<View style={style.productColorRow}>
            {color.map((color, index) => {
                return <TouchableOpacity key={index} style={[style.productColor, { backgroundColor: color }]}></TouchableOpacity>
            })}
        </View>)
    }

    const selectSizes = (size: any[]) => {
        return (<View style={style.productSizesRow}>
            {size.map((size, index) => {
                return <TouchableOpacity key={index}><Text style={[style.productSize]}>{size}</Text></TouchableOpacity>
            })}
        </View>)
    }

    const renderImageList = (images: any[]) => {
        return (images.map((img, index) => {
            return (<View key={index} style={style.carouselRow}>
                    <ImageBackground source={img} style={{ width: '100%', height: '100%', opacity: 0.7}} />
                </View>
            )
        }))
    }



    return (
        <View style={style.mainContainer}>
            <BackButton onPress={backButton} />
            <View style={style.row1}>
                <CarouselComponent>
                    {renderImageList(productData.images)}
                </CarouselComponent>
            </View>
            <View style={style.row2}>
                <View style={style.row2_Child}>
                    <Text style={style.productName}>{productData.name}</Text>
                    <Text style={style.productPrice}>{productData.price}</Text>
                    {selectColors(productData.color)}
                    {selectSizes(productData.size)}
                </View>

            </View>
            <View style={style.row3}>
                <RoundButton label={constants.labelAddToCard} buttonStyle={[style.productButton, {backgroundColor: theme.highlightColor}]} onPress={openModal}/>
                <RoundButton label={constants.labelBuyNow} buttonStyle={[style.productButton, {backgroundColor: theme.highlightColor}]} onPress={checkout}/>
            </View>
            <CommonModal 
                isOpen={open}
                hideModal={closeModal}
                submit={checkout}
            />
        </View>
    )
};

export default ProductDetails;

interface Style {
    mainContainer: ViewStyle;
    row1: ViewStyle;
    row2: ViewStyle;
    carouselRow: TextStyle;
    row2_Child: ViewStyle;
    productName: TextStyle;
    productPrice: TextStyle;
    productColorRow: ViewStyle;
    productColor: ViewStyle;
    productSizesRow: ViewStyle;
    productSize: ViewStyle;
    row3: ViewStyle;
    productButton: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
        zIndex: -1,
    },
    row1: {
        flex: 4,
        zIndex: -1,
    },
    row2: {
        flex: 3,
    },
    carouselRow: {
        width: screenWidth,
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
    },
    row2_Child: {
        marginLeft: 12,
        marginRight: 12,
        overflow: 'hidden',
    },
    productName: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 2,
    },
    productPrice: {
        fontSize: 18,
        paddingTop: 2,
        paddingBottom: 12,
    },
    productColorRow: {
        flexDirection: 'row',
    },
    productColor: {
        height: 20,
        width: 20,
        borderRadius: 50,
        marginRight: 15,
        marginBottom: 20,

    },
    productSizesRow: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    productSize: {
        padding: 8,
        marginTop: 10,
        borderWidth: 1,
        marginRight: 15,
        minWidth: 80,
        textAlign: 'center',
    },
    row3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 25,
        position: 'absolute',
        bottom: 15,
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    productButton: {
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 140,
    }
});
