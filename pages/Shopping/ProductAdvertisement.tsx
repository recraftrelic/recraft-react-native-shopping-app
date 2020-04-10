import React from 'react';
import { View, ViewStyle, StyleSheet, TextStyle, Image, Text, TouchableOpacity } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";

interface Props {
    label1?: string,
    label2?: string,
    imageUrl: string,
    key?: number,
    labelBuy?: string,
    onPress?: () =>  void,
}

const ProductAdvertisement: React.FunctionComponent<Props> = ({
    label1,
    label2,
    imageUrl,
    key,
    labelBuy,
    onPress,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View key={key} style={[style.newItemBox, {shadowColor: theme.labelBgColor, backgroundColor: theme.appColor}]}>
            <Image style={[style.newItem]} source={imageUrl} />
            {(label1 || label2) ? 
            <View style={[style.itemTitleLabel]}>
                <Text style={[style.itemTitleText, { color: theme.labelBgColor }]}>{label1}</Text>
                <Text style={[style.itemTitleText, { color: theme.labelBgColor }]}>{label2}</Text>
            </View> : null}
            {labelBuy ? 
                <TouchableOpacity style={[style.itemTitleView, {backgroundColor: theme.buyButtonLink}]} onPress={onPress}>
                        <Text style={[style.linkText, { color: theme.highlightTextColor }]}>{labelBuy}</Text>
                </TouchableOpacity>
            : null}
        </View>
    )
};

export default ProductAdvertisement;

interface Style {
    itemTitleView: ViewStyle;
    itemTitleText: TextStyle;
    newItemBox: ViewStyle;
    newItem: ViewStyle;
    itemTitleLabel: ViewStyle;
    linkText: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    newItemBox: {
        flex:1,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 15,
        overflow: 'hidden',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.2,
        borderWidth: 0.1,
        elevation: 4,
    },
    newItem: {
        marginLeft: 6,
        marginRight: 6,
        height: 120,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemTitleLabel: {
        position: 'absolute',
        top: 15,
        left: 15,
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    itemTitleView: {
        position: 'absolute',
        left: 25,
        bottom: 12,
        borderRadius: 15,
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    itemTitleText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    linkText: {
        fontWeight: '700',
        fontSize: 16,
    },
});