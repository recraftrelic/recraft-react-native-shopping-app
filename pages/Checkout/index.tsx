import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, ScrollView, Image, ImageStyle } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from '../../components/UI/ThemedText';
import BagOption from '../../components/Base/BagOption';

interface Props extends RouteComponentProps {
  history
}

// @ts-ignore
const ImagePath = require("../../images/shopping.jpg")

const Checkout: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const goToHome = () => {
    history.goBack();
  }

  const goToPayment = () => {
    history.push('/payment')
  }

  return (
    <View style={style.mainContainer}>
      <ScrollView>
        <View style={[style.contentContainer, {borderColor: theme.lightTextColor}]}>
          <View style={[style.container, {paddingBottom: 10}]}>
            <View style={[style.childContainer, style.leftContainer]}>
              <TouchableOpacity onPress={goToHome}>
                <MaterialIcon name="arrow-left" size={30} color={theme.textColor} style={style.backIcon} />
              </TouchableOpacity>
            </View>
            <View style={[style.childContainer, style.centerContainer]}>
              <ThemedText styleKey="textColor" style={style.title}>{constants.labelCheckout}</ThemedText>
            </View>
          </View>
          <View style={[style.container, {paddingTop: 30}]}>
            <View style={[style.childContainer, style.leftContainer, {flex: 2, paddingLeft: 5, alignSelf: "flex-start"}]}>
              <ThemedText styleKey="textColor" style={style.content}>Shipping</ThemedText>
            </View>
            <View style={[style.childContainer, style.centerContainer, {flex: 4}]}>
              <ThemedText styleKey="textColor" style={[style.content, {alignSelf: 'flex-start'}]}>4582 Monroa Avenue, Tampa, Florida, 33607,</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer, {flex: 1}]}>
              <TouchableOpacity>
                <MaterialIcon name="chevron-right" size={30} color={theme.textColor} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[style.contentContainer, {borderColor: theme.lightTextColor}]}>
          <View style={[style.container, {paddingTop: 20 ,paddingBottom: 5}]}>
            <View style={[style.childContainer, style.leftContainer, {flex: 2, paddingLeft: 5}]}>
              <ThemedText styleKey="textColor" style={style.content}>Card</ThemedText>
            </View>
            <View style={[style.childContainer, style.centerContainer, {flex: 4}]}>
              <ThemedText styleKey="textColor" style={[style.content, {alignSelf: 'flex-start'}]}>**************8564</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer, {flex: 1}]}>
              <TouchableOpacity onPress={goToPayment}>
                <MaterialIcon name="chevron-right" size={30} color={theme.textColor} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[style.contentContainer, {borderColor: theme.lightTextColor}]}>
          <View style={[style.container, {paddingTop: 20}]}>
            <View style={[style.childContainer, style.leftContainer, {flex: 2, paddingLeft: 5, paddingTop: 60, justifyContent: 'flex-start'}]}>
              <ThemedText styleKey="textColor" style={style.content}>Items</ThemedText>
            </View>
            <View style={[style.childContainer, style.centerContainer, {flex: 5}]}>
              <View style={[style.container, {paddingTop: 0 ,paddingBottom: 10, paddingLeft: 0, paddingRight: 0, borderBottomWidth: 1, borderColor: '#b3b3b3'}]}>
                <View style={[style.childContainer, style.leftContainer, {flex: 2}]}>
                  <Image source={ImagePath} style={style.imageStyle}/>
                </View>
                <View style={[style.childContainer, style.centerContainer, {flex: 2, justifyContent: 'flex-start'}]}>
                  <ThemedText styleKey="textColor" style={style.smallContent}>Top Heavy Bag</ThemedText>
                  <ThemedText styleKey="textColor" style={[style.content, {alignSelf: 'flex-start'}]}>$12.99</ThemedText>
                </View>
                <View style={[style.childContainer, style.rightContainer, {flex: 1}]}>
                  <TouchableOpacity>
                    <MaterialIcon name="chevron-right" size={30} color={theme.textColor} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[style.container, {paddingTop: 10 ,paddingBottom: 10, paddingLeft: 0, paddingRight: 0}]}>
                <View style={[style.childContainer, style.leftContainer, {flex: 2}]}>
                  <Image source={ImagePath} style={style.imageStyle}/>
                </View>
                <View style={[style.childContainer, style.centerContainer, {flex: 2, justifyContent: 'flex-start'}]}>
                  <ThemedText styleKey="textColor" style={style.smallContent}>Top Heavy Bag</ThemedText>
                  <ThemedText styleKey="textColor" style={[style.content, {alignSelf: 'flex-start'}]}>$12.99</ThemedText>
                </View>
                <View style={[style.childContainer, style.rightContainer, {flex: 1}]}>
                  <TouchableOpacity>
                    <MaterialIcon name="chevron-right" size={30} color={theme.textColor} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <BagOption label={constants.labelDelivery} total="$0.0" />
        <BagOption label={constants.labelSubTotal} total="$25.98" />
        <View style={style.footerContainer}>
          <View style={[style.childContainer, style.centerContainer]}>
            <View style={[style.checkoutButton, {backgroundColor: theme.highlightColor}]}>
              <TouchableOpacity>
                <ThemedText styleKey="highlightTextColor" style={style.checkoutStyle}>{constants.labelPlace}</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Checkout;

interface Style {
    mainContainer: ViewStyle;
    contentContainer: ViewStyle;
    container: ViewStyle;
    childContainer: ViewStyle;
    leftContainer: ViewStyle;
    centerContainer: ViewStyle;
    rightContainer: ViewStyle;
    backIcon: ViewStyle;
    footerContainer: ViewStyle;
    checkoutButton: ViewStyle;
    title: TextStyle;
    content: TextStyle;
    smallContent: TextStyle;
    checkoutStyle: TextStyle;
    imageStyle: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 5,
        borderBottomWidth: 1,
    },
    container: {
        paddingLeft: 10,
        paddingRight: 10,
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
    centerContainer: {
        alignItems: "center",
        flex: 8,
    },
    rightContainer: {
        alignItems: "flex-end",
        flex: 0,
    },
    footerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 220
    },
    backIcon: {
        fontSize: 25,
        paddingTop: 20,
    },
    title: {
        fontSize: 25,
        paddingTop: 15,
    },
    content: {
        fontSize: 14,
    },
    smallContent: {
        fontSize: 12,
        alignSelf: 'flex-start',
        paddingBottom: 20,
    },
    checkoutButton: {
        borderRadius: 50,
        width: '80%',
        alignItems: 'center'
    },
    checkoutStyle: {
        fontSize: 16,
        padding: 10,
    },
    imageStyle :{
        width: 90,
        height: 90,
    },
});
