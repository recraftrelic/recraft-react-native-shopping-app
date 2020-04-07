import React from 'react';
import { View, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppTheme } from '../../../config/DefaultConfig';
import useTheme from '../../../hooks/useTheme';

interface Props {
    onPress: () => void;
    iconStyle?: any;
};

const BackButton: React.FunctionComponent<Props> = ({
    onPress,
    iconStyle
}) => {
    const theme: AppTheme = useTheme();
    
    return (
        <TouchableOpacity onPress={onPress}>
            <MaterialIcon name="arrow-left" size={30} color="#900" style={[iconStyle, style.backIcon, {color: theme.textColor}]} />
        </TouchableOpacity>
    )
};

export default BackButton;

interface Style {
    backIcon: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    backIcon: {
        fontSize: 25,
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 9,
      }
});