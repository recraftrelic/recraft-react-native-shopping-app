import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Image, ImageStyle, ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from '../../components/UI/ThemedText';
import FooterNavigation from '../Footer/Index';
import ProfileItem from '../../components/Base/ProfileItem';
import { setThemeAction } from '../../store/reducers/config';
import ThemeToggle from '../../components/Base/ThemeToggle';

interface Props extends RouteComponentProps {
    dispatch: Dispatch
    history
}  

// @ts-ignore
const ImagePath = require("../../images/shopping.jpg")

const Profile: React.FunctionComponent<Props> = ({
    dispatch,
    history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const goToHome = () => {
    history.push('/home')
  }

  const updateTheme = (theme: AppTheme) => {
    dispatch(setThemeAction(theme))
  }

  return (
    <View style={style.mainContainer}>
      <ScrollView>
        <View style={style.contentContainer}>
          <View style={[style.container, {paddingBottom: 10, paddingLeft: 10}]}>
            <View style={[style.childContainer, style.leftContainer]}>
              <TouchableOpacity onPress={goToHome}>
                <MaterialIcon name="arrow-left" size={30} color={theme.textColor} style={style.backIcon} />
              </TouchableOpacity>
            </View>
            <View style={[style.childContainer, style.centerContainer]}>
              <ThemedText styleKey="textColor" style={style.title}>{constants.labelProfile}</ThemedText>
            </View>
          </View>
        </View>
        <View style={[style.contentContainer, {paddingBottom: 10}]}>
          <View style={[style.container, {paddingBottom: 10, paddingLeft: 10}]}>
            <View style={[style.childContainer, style.leftContainer]}>
                <Image source={ImagePath} style={[style.imageStyle, {borderRadius: 10}]}/>
            </View>
            <View style={[style.childContainer, style.centerContainer, style.extraContainer]}>
              <ThemedText styleKey="textColor" style={{fontSize: 24, paddingTop: 10}}>Yogesh Kapoor</ThemedText>
              <View style={[style.buttonStyle, {backgroundColor: theme.highlightColor}]}>
                <TouchableOpacity>
                  <ThemedText styleKey="highlightTextColor" style={{fontSize: 18}}>Edit Account</ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ProfileItem label="My Orders" iconName="chevron-right" color={theme.textColor} />
        <ProfileItem label="Shipping Addresses" iconName="chevron-right" color={theme.textColor} />
        <ProfileItem label="My Review" iconName="chevron-right" color={theme.textColor} />
        <View style={[style.contentContainer, {borderColor: theme.lightTextColor, borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20}]}>
          <View style={style.container}>
            <View style={[style.childContainer, style.leftContainer]}>
            <ThemedText styleKey="textColor" style={{fontSize: 18}}>Default Language</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer]}>
            </View>
          </View>
        </View>
        <View style={[style.contentContainer, {borderColor: theme.lightTextColor, borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20}]}>
          <View style={style.container}>
            <View style={[style.childContainer, style.leftContainer]}>
            <ThemedText styleKey="textColor" style={{fontSize: 18}}>Dark Theme</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer]}>
              <ThemeToggle updateTheme={updateTheme} />
            </View>
          </View>
        </View>
        <View style={[style.contentContainer, {paddingTop: 10, paddingBottom: 10}]}>
          <View style={style.container}>
            <View style={[style.childContainer, style.leftContainer]}>
            <ThemedText styleKey="textColor" style={{fontSize: 18}}>Sign Out</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer]}>
              <TouchableOpacity>
                <MaterialIcon name="exit-to-app" size={30} color={theme.dangerColor} style={{paddingTop: 5}}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <FooterNavigation history={history} />
    </View>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(Profile);

interface Style {
  mainContainer: ViewStyle;
  contentContainer: ViewStyle;
  container: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  rightContainer: ViewStyle;
  extraContainer: ViewStyle;
  backIcon: ViewStyle;
  buttonStyle: ViewStyle;
  imageStyle: ImageStyle;
  title: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 30,
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
  rightContainer: {
    alignItems: "flex-end",
    flex: 0,
  },
  extraContainer: {
    flex: 2, 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  buttonStyle: {
    borderRadius: 30, 
    marginTop: 10, 
    paddingLeft: 30, 
    paddingRight: 30, 
    padding: 7
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    paddingTop: 15,
  },
  imageStyle :{
    width: 100,
    height: 100,
  },
});
