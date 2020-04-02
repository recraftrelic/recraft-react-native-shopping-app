import React from 'react';
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme, AppConstants } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';
import useConstants from '../../hooks/useConstants';

interface Props {
    label: string,
    total: string,
};

const BagOption: React.FunctionComponent<Props> = ({
    label,
    total
  }: Props) => {
    const constants: AppConstants = useConstants();
    return (
        <>
          <View style={style.contentContainer}>
            <View style={style.container}>
              <View style={[style.childContainer, style.leftContainer]}>
                <ThemedText styleKey="textColor" style={[style.content, {color: 'grey'}]}>{label}</ThemedText>
              </View>
              <View style={[style.childContainer, style.rightContainer]}>
                <ThemedText styleKey="textColor" style={style.content}>{total}</ThemedText>
              </View>
            </View>
          </View>
        </>
    );
};

export default BagOption;

interface Style {
    contentContainer: ViewStyle;
    container: ViewStyle;
    childContainer: ViewStyle;
    leftContainer: ViewStyle;
    rightContainer: ViewStyle;
    content: TextStyle;
  }
  
  const style: Style = StyleSheet.create<Style>({
    contentContainer: {
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: "#b3b3b3",
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
    content: {
      fontSize: 14,
      paddingTop: 10,
      color: '#000',
    },
  });
  