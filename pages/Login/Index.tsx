import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { AppConstants } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// @ts-ignore
const ImagePath = require("../../Recraftsoppify_aap_bg_effect.png")

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const Login: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();

  const backButton = () => {
    history.push('/')
  }

  return (
    <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} >
      <View style={style.container}>
        <TouchableOpacity onPress={backButton}>
          <MaterialIcon name="arrow-left" size={30} color="#900" style={style.backIcon} />
        </TouchableOpacity>
        <View style={style.topContainer}>
          <ThemedText styleKey="textColor" style={style.title}>{constants.labelLogin}</ThemedText>
        </View>
        <View style={style.childContainer}>
          <ThemedText style={style.inputLabel} styleKey="textColor">{"User Name"}</ThemedText>
        </View>
        <View style={style.childContainer}>
          <TextInput
            style={style.inputContainer}
            placeholder="User Name"
          />
        </View>
        <View style={style.childContainer}>
          <ThemedText style={style.inputLabel} styleKey="textColor">{"Password"}</ThemedText>
        </View>
        <View style={style.childContainer}>
          <TextInput
            style={style.inputContainer}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
        </View>
        <View style={style.childContainer}>
          <ThemedText style={style.forgotPassword} styleKey="textColor" onPress={() => { alert("ji") }}>{"Forget your password?"}</ThemedText>
        </View>
        <RoundButton label="SUBMIT" buttonStyle={{minWidth: 230}} onPress={() => { alert("clicked") }} />
        <View style={style.childContainer}>
          <ThemedText style={style.forgotPassword} styleKey="textColor">{"Or Login With"}</ThemedText>
        </View>
        <View style={style.childContainer}>
          <View style={[style.iconContainer, { backgroundColor: '#e3384c' }]}>
            <Icon name="google" size={30} color="#900" style={style.Icon} onPress={() => { alert("google") }} />
          </View>
          <View style={[style.iconContainer, { backgroundColor: '#39579a' }]}>
            <Icon name="facebook" size={30} color="#900" style={[style.Icon]} />
          </View>
        </View>
      </View>
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
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    backgroundColor: 'transparent'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 150,
    marginBottom: 50,
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
    color: "#aaaaaa",
    fontSize: 13
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  forgotPassword: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 16,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 10,
    borderBottomColor: "#dadada",
    borderBottomWidth: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#54afee"
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: 'black',
    shadowOpacity: 0.2,

  },
  Icon: {
    fontSize: 25,
    padding: 15,
    color: '#fff',
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 10,
    color: '#000',
  }
});
