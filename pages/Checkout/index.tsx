import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from '../../components/UI/ThemedText';
import BagOption from '../../components/Base/BagOption';

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const Checkout: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const goToHome = () => {
    history.goBack();
  }

  return (
    <View style={style.mainContainer}>
      <ScrollView>
        <View style={style.contentContainer}>
          <View style={[style.container, {paddingBottom: 10}]}>
            <View style={[style.childContainer, style.leftContainer]}>
              <TouchableOpacity onPress={goToHome}>
                <MaterialIcon name="arrow-left" size={30} color="#900" style={style.backIcon} />
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
            <View style={[style.childContainer, style.centerContainer, {flex: 5}]}>
              <ThemedText styleKey="textColor" style={style.content}>4582 Monroa Avenue, Tampa, Florida, 33607,</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer, {flex: 1}]}>
              <TouchableOpacity>
                <MaterialIcon name="chevron-right" size={30} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.contentContainer}>
          <View style={[style.container, {paddingTop: 20 ,paddingBottom: 10}]}>
            <View style={[style.childContainer, style.leftContainer, {flex: 2, paddingLeft: 5}]}>
              <ThemedText styleKey="textColor" style={style.content}>Card</ThemedText>
            </View>
            <View style={[style.childContainer, style.centerContainer]}>
              <ThemedText styleKey="textColor" style={style.content}>**************8564</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer, {flex: 1}]}>
              <TouchableOpacity>
                <MaterialIcon name="chevron-right" size={30} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.contentContainer}>
          <View style={[style.container, {paddingTop: 20 ,paddingBottom: 10}]}>
            <View style={[style.childContainer, style.leftContainer, {flex: 2, paddingLeft: 5}]}>
              <ThemedText styleKey="textColor" style={style.content}>Items</ThemedText>
            </View>
            <View style={[style.childContainer, style.centerContainer]}>
              <ThemedText styleKey="textColor" style={style.content}>**************8564</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer, {flex: 1}]}>
              <TouchableOpacity>
                <MaterialIcon name="chevron-right" size={30} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <BagOption label={constants.labelDelivery} total="$0.0" />
        <BagOption label={constants.labelSubTotal} total="$25.98" />
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
    title: TextStyle;
    content: TextStyle;
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
        borderColor: "#b3b3b3",
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
    backIcon: {
        fontSize: 25,
        paddingTop: 20,
        color: '#000',
    },
    title: {
        fontSize: 25,
        paddingTop: 15,
        color: '#000',
    },
    content: {
        fontSize: 14,
        color: '#000',
    },
});
