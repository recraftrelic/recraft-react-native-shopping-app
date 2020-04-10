import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import RoundButton from '../../components/Base/RoundButton';
import { View, ViewStyle, StyleSheet, TextStyle, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../components/UI/ThemedText';

// @ts-ignore
const ImagePath = require("../../images/Recraftsoppify_app_dashboard.jpg");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const BaseHome: React.FunctionComponent<Props> = ({
  dispatch,
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const goToSignUp = () => {
    history.push('/createAccount')
  }

  const goToLogin = () => {
    history.push('/login')
  }

  const updateTheme = (theme: AppTheme) => dispatch(setThemeAction(theme))

  return (
    <View style={style.mainContainer}>
      {/* <ThemeToggle updateTheme={updateTheme} /> */}
      {/* <ImageComponent src={constants.recraftLogo}/> */}
        <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} >
            <View style={style.topContainer}> 
              <Image source={constants.recraftLogo} style={[style.logoImage ,{width: 300, height: 300}]}/>
            </View>
            <View style={style.secondContainer}>
              <RoundButton buttonStyle={style.button} label="LOGIN" onPress={goToLogin} />
              <RoundButton buttonStyle={style.button} label="SIGN UP" onPress={goToSignUp} />
              <View style={style.childContainer}>
                <ThemedText style={style.footerText} styleKey="textColor">{"Or Sign Up With"}</ThemedText>
              </View>
              <View style={style.childContainer}>
                <View style={[style.iconContainer, { shadowColor: theme.labelBgColor, backgroundColor: theme.googleColor }]}>
                  <Icon name="google" size={30} color={theme.highlightTextColor} style={style.Icon} />
                </View>
                <View style={[style.iconContainer, { shadowColor: theme.labelBgColor, backgroundColor: theme.facebookColor }]}>
                  <Icon name="facebook" size={30} color={theme.highlightTextColor} style={[style.Icon]} />
                </View>
              </View>
            </View>
        </ImageBackground>
    </View>
  );
};

export default connect(({ dispatch }) => ({ dispatch }))(BaseHome);

interface Style {
  mainContainer : ViewStyle;
  container: ViewStyle;
  topContainer: ViewStyle;
  secondContainer: ViewStyle;
  childContainer: ViewStyle;
  inputContainer: TextStyle;
  footerText: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  containerBg: ViewStyle;
  containerImage: ViewStyle;
  button: ViewStyle;
  logoImage: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 16,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  logoImage: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  button: {
    marginTop: 15,
    marginBottom: 22,
    minWidth: 230,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  footerText: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: "center",
  },
});
