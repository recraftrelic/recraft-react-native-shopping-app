import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, ImageBackground, Text } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import FooterNavigation from '../Footer/Index';
import useTheme from "../../hooks/useTheme";
import HomePageProducts from '../Home/HomePageProducts';
import MyCarousel from '../../components/common/Carousel';


interface Props extends RouteComponentProps {
    dispatch: Dispatch,
    history
}

// @ts-ignore
const ImagePath = require("../../shopping.jpg")

const ProductDetails: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();

    return (
        <View style={style.mainContainer}>
            <View style={style.fistView}>
                <MyCarousel >
                    <View style={style.fistViewList}>
                        <View >
                            <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} />
                        </View>
                    </View>
                    <View style={style.fistViewList}>
                        <View >
                            <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} />
                        </View>
                    </View>
                    <View style={style.fistViewList}>
                        <View >
                            <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} />
                        </View>
                    </View>
                </MyCarousel>
            </View>
            <HomePageProducts />
            <FooterNavigation history={history} />
        </View>
    )
};

export default ProductDetails;

interface Style {
    mainContainer: ViewStyle;
    fistView: ViewStyle;
    fistViewButton: ViewStyle;
    fistViewText: TextStyle;
    fistViewContent: ViewStyle;
    fistViewList: TextStyle
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
    },
    fistViewList: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    fistView: {
        flex: 3,
        height: '100%',
    },
    fistViewText: {
        fontSize: 35,
        fontWeight: '900',
    },
    fistViewButton: {
        maxWidth: 180,
        textAlign: 'center',
        minWidth: 230,
    },
    fistViewContent: {
        position: 'absolute',
        bottom: 30,
        left: 20,
    },
});
