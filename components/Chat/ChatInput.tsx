import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, TextInput, TouchableOpacity, StyleSheet, ViewStyle, KeyboardAvoidingViewProps } from "react-native";
import {KeyboardAvoidingView} from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import { isIOS } from "../../utils";

let keyboardAvoidingViewProps: KeyboardAvoidingViewProps = {}

if (isIOS()) {
    keyboardAvoidingViewProps.behavior = "padding"
}

interface Props {
  placeHolder: string
}

const ChatInput: React.FunctionComponent<Props> = ({
  placeHolder
}: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <KeyboardAvoidingView {...keyboardAvoidingViewProps} enabled>
        <View style={[style.searchContainer, { borderBottomColor: theme.lightBottomColor }]}>
            <TouchableOpacity>
                <MaterialIcon name="plus-circle-outline" size={40} color={theme.lightTextColor} />
            </TouchableOpacity>  
            <View style={style.textContainer}>
                <TextInput
                    placeholder={placeHolder}
                    placeholderTextColor={theme.lightTextColor}
                    style={{ color: theme.textColor }}
                />
            </View>
            <View style={style.iconContainer}>
                <TouchableOpacity>
                    <Icon name="md-send" size={35} color={theme.lightTextColor} />
                </TouchableOpacity>  
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default ChatInput;

interface Style {
  searchContainer: ViewStyle;
  iconContainer: ViewStyle;
  textContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  textContainer: {
    flex: 9
  },
  searchContainer: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end"
  }
});
