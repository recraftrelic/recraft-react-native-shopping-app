import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';

interface Props {
    label: string;
    onPress?: (event: GestureResponderEvent) => void,
    buttonStyle?: any,
    labelStyle?: any,
};

const RoundButton: React.FunctionComponent<Props> = ({
    onPress,
    label,
    buttonStyle,
    labelStyle,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[style.container, { borderColor: theme.lightBottomColor }, buttonStyle]}>
                <ThemedText styleKey="textColor" style={[style.userNameStyle, labelStyle]}>{label}</ThemedText>
            </View>
        </TouchableOpacity>
    );
};

export default RoundButton;

interface Style {
    container: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "center",
        borderRadius: 45,
        borderWidth: 1,
        borderColor: "#1da1f2",
        backgroundColor: "#1da1f2",
        shadowOffset: { width: 0, height: 8 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        minWidth: 230,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 10,
    },
    userNameStyle: {
        fontWeight: "bold",
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 16,
        color: "#ffffff",
    }
})
