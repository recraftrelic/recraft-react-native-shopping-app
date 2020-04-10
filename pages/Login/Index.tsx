import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';

// @ts-ignore
const ImagePath = require("../../images/Recraftsoppify_aap_bg_effect.png")

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const Login: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/')
  }

  const submitButton = () => {
    history.push('/home/')
  }

  return (
    <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} >
      <TouchableOpacity onPress={backButton}>
        <MaterialIcon name="arrow-left" size={30} color={theme.textColor} style={style.backIcon}/>
      </TouchableOpacity>
      <ScrollView>
        <View style={style.container}>
          <View style={style.topContainer}>
            <ThemedText styleKey="appColor" style={style.title}>{constants.labelLogin}</ThemedText>
          </View>
          <View style={style.childContainer}>
            <ThemedText style={style.inputLabel} styleKey="inputColor">{constants.labelUser}</ThemedText>
          </View>
          <View style={style.childContainer}>
            <TextInput
              style={[style.inputContainer, {borderBottomColor: theme.inputBorderColor, color: theme.textColor}]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={constants.userPlaceholder}
            />
          </View>
          <View style={style.childContainer}>
            <ThemedText style={style.inputLabel} styleKey="inputColor">{constants.labelPass}</ThemedText>
          </View>
          <View style={style.childContainer}>
            <TextInput
              style={[style.inputContainer, {borderBottomColor: theme.inputBorderColor, color: theme.textColor}]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={constants.passPlaceholder}
              secureTextEntry={true}
            />
          </View>
          <View style={style.childContainer}>
            <ThemedText style={style.forgotPassword} styleKey="textColor" onPress={() => { alert("ji") }}>{constants.labelForget}</ThemedText>
          </View>
          <RoundButton label={constants.labelSubmit} buttonStyle={{minWidth: 230}} onPress={submitButton} />
          <View style={style.childContainer}>
            <ThemedText style={style.forgotPassword} styleKey="textColor">{constants.labelChoice}</ThemedText>
          </View>
          <View style={style.childContainer}>
            <View style={[style.iconContainer, { shadowColor: theme.labelBgColor, backgroundColor: theme.googleColor }]}>
              <Icon name="google" size={30} color={theme.highlightTextColor} style={style.Icon} onPress={() => { alert("google") }} />
            </View>
            <View style={[style.iconContainer, { shadowColor: theme.labelBgColor, backgroundColor: theme.facebookColor }]}>
              <Icon name="facebook" size={30} color={theme.highlightTextColor} style={[style.Icon]} onPress={() => { alert("google") }}/>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
};

export default Login;

interface Style {
  container: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  bottomContainer: ViewStyle;
  inputContainer: TextStyle;
  inputLabel: TextStyle;
  forgotPassword: TextStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  containerBg: ViewStyle;
  containerImage: ViewStyle;
  backIcon: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  inputLabel: {
    width: "100%",
    fontSize: 13
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  forgotPassword: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    elevation: 6,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  }
});
