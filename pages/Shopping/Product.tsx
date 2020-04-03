import React from 'react';
import { View, ViewStyle, StyleSheet, TextStyle, Image, Text, TouchableOpacity } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";

interface Props {
    productLabel?: string,
    imageUrl: string,
    key?: number,
    goToDetails?: () => void,
}

const Product: React.FunctionComponent<Props> = ({
    productLabel,
    imageUrl,
    key,
    goToDetails
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <TouchableOpacity key={key} style={style.newItemBox} onPress={goToDetails}>
            <Image style={[style.newItem]} source={imageUrl} />
            {productLabel ? 
            <View style={[style.itemTitleView, { backgroundColor: theme.labelBgColor }]}>
                <Text style={[style.itemTitleText, { color: theme.highlightTextColor }]}>{productLabel}</Text>
            </View>: null}
        </TouchableOpacity>
    )
};

export default Product;

interface Style {
    itemTitleView: ViewStyle;
    itemTitleText: TextStyle;
    newItemBox: ViewStyle;
    newItem: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    newItemBox: {
        flexDirection: 'row',
        fontSize: 25,
        fontWeight: '900',
        marginTop: 5,
        borderRadius: 15,
        overflow: 'hidden',
        height: 120
    },
    newItem: {
        marginLeft: 6,
        marginRight: 6,
        width: 150,
        height: 120,
        borderRadius: 15
    },
    itemTitleView: {
        position: 'absolute',
        top: 15,
        left: 15,
        borderRadius: 15,
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    itemTitleText: {
        fontWeight: '700',
    },
});