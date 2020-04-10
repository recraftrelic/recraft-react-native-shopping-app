import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, Image, ImageStyle } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme, AppConstants } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    size: string,
    color: string,
};

// @ts-ignore
const ImagePath = require("../../images/shopping.jpg")

const BagItem: React.FunctionComponent<Props> = ({
    size,
    color
  }: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();

    return (
        <>
          <View style={[style.container, {paddingTop: 20}]}>
            <View style={[style.childContainer, style.leftContainer]}>
              <Image source={ImagePath} style={style.imageStyle}/>
            </View>
            <View style={[style.childContainer, style.rightContainer, style.extraStyle, {justifyContent: "flex-start"}]}>
              <View style={[style.container, {paddingRight: 0}]}>
                <View style={[style.childContainer, style.leftContainer, style.extraStyle]}>
                  <ThemedText styleKey="textColor" style={style.content}>Top Heavy Bag</ThemedText>
                </View>
                <View style={[style.childContainer, style.rightContainer ,{flex: 1}]}>
                  <TouchableOpacity>
                    <MaterialIcon name="trash-can-outline" size={20} color={theme.lightTextColor} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[style.container, {paddingTop: 20}]}>
                <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
                  <ThemedText styleKey="lightTextColor" style={[style.content]}>Size</ThemedText>
                </View>
                <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
                  <ThemedText styleKey="lightTextColor" style={[style.content]}>Color</ThemedText>
                </View>
                <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
                  <ThemedText styleKey="lightTextColor" style={[style.content]}>Qty</ThemedText>
                </View>
              </View>
              <View style={style.container}>
                <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
                  <ThemedText styleKey="textColor" style={[style.content, { paddingLeft: 7}]}>{size}</ThemedText>
                </View>
                <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
                  <MaterialIcon name="circle" size={15} color={color} style={{paddingLeft: 10}}/>
                </View>
                <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
                  <ThemedText styleKey="textColor" style={[style.content, { paddingLeft: 7}]}>1</ThemedText>
                </View>
              </View>
              <View style={[style.container, {paddingTop: 20, paddingRight: 0}]}>
                <View style={[style.childContainer, style.rightContainer, style.extraStyle]}>
                  <ThemedText styleKey="lightTextColor" style={[style.strike]}>$20.90</ThemedText>
                </View>
              </View>
              <View style={[style.container, {paddingRight: 0}]}>
                <View style={[style.childContainer, style.rightContainer, style.extraStyle]}>
                  <ThemedText styleKey="textColor" style={style.content}>$12.99</ThemedText>
                </View>
              </View>
            </View>
          </View>
        </>
    );
};

export default BagItem;

interface Style {
    container: ViewStyle;
    childContainer: ViewStyle;
    leftContainer: ViewStyle;
    rightContainer: ViewStyle;
    title: TextStyle;
    content: TextStyle;
    strike: TextStyle;
    imageStyle: ImageStyle;
    extraStyle: ViewStyle;
  }
  
  const style: Style = StyleSheet.create<Style>({
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
    title: {
      fontSize: 25,
      paddingTop: 15,
    },
    content: {
      fontSize: 14,
    },
    strike: {
      fontSize: 12,
      textDecorationLine: 'line-through',
    },
    imageStyle :{
      width: 140,
      height: 140,
    },
    extraStyle: {
      flex: 3
    },
  });
  