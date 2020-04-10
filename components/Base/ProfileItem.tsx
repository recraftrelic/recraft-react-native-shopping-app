import React from 'react';
import { StyleSheet, View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    label: string,
    iconName: string,
    color: string,
};

const ProfileItem: React.FunctionComponent<Props> = ({
    label,
    iconName,
    color,
  }: Props) => {
    const theme: AppTheme = useTheme();
    return (
        <>
          <View style={[style.contentContainer, {borderColor: theme.lightTextColor}]}>
            <View style={style.container}>
              <View style={[style.childContainer, style.leftContainer]}>
                <ThemedText styleKey="textColor" style={style.content}>{label}</ThemedText>
              </View>
              <View style={[style.childContainer, style.rightContainer]}>
                <TouchableOpacity>
                  <MaterialIcon name={iconName} size={30} color={color} style={style.icon}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
    );
};

export default ProfileItem;

interface Style {
    contentContainer: ViewStyle;
    container: ViewStyle;
    childContainer: ViewStyle;
    leftContainer: ViewStyle;
    rightContainer: ViewStyle;
    icon: ViewStyle;
    content: TextStyle;
}
  
const style: Style = StyleSheet.create<Style>({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomWidth: 1,
    },
    container: {
      paddingLeft: 15,
      paddingRight: 15,
      flexDirection: 'row',
      justifyContent: "space-between",
    },
    childContainer: {
      flex: 1,
      justifyContent: "center",
    },
    leftContainer: {
      alignItems: "flex-start",
      flex: 0,
    },
    rightContainer: {
      alignItems: "flex-end",
      flex: 0,
    },
    icon: {
      paddingTop: 5,
    },
    content: {
      fontSize: 18,
    },
});
  