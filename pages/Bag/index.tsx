import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from '../../components/UI/ThemedText';
import FooterNavigation from '../Footer/Index';
import BagItem from '../../components/Base/BagItem';
import BagOption from '../../components/Base/BagOption';

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const Bag: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const goToHome = () => {
    history.push('/home')
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
              <ThemedText styleKey="textColor" style={style.title}>{constants.labelBag}</ThemedText>
            </View>
          </View>
          <BagItem size="M" color="#b3b3b3"/>
        </View>
        <View style={style.contentContainer}>
          <BagItem size="L" color="red"/>
        </View>
        <BagOption label={constants.labelDelivery} total="Standard - Free" />
        <BagOption label={constants.labelTotal} total="$25.98" />
        <View style={style.footerContainer}>
          <View style={[style.childContainer, style.centerContainer]}>
            <View style={style.checkoutButton}>
              <TouchableOpacity>
                <ThemedText styleKey="textColor" style={style.checkoutStyle}>PROCEED TO SHIPPING</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <FooterNavigation history={history} />
    </View>
  );
};

export default Bag;

interface Style {
  mainContainer: ViewStyle;
  contentContainer: ViewStyle;
  container: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  footerContainer: ViewStyle;
  checkoutButton: ViewStyle;
  backIcon: ViewStyle;
  title: TextStyle;
  checkoutStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
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
  centerContainer: {
    alignItems: "center",
    flex: 8,
  },
  footerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 300
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
  checkoutButton: {
    backgroundColor: 'grey',
    borderRadius: 50,
    paddingLeft: 50,
    paddingRight: 50
  },
  checkoutStyle: {
    fontSize: 16,
    color: '#fff',
    padding: 10,
  },
});
