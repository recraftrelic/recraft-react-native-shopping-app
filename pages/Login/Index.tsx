import React from 'react';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput } from 'react-native';
import { AppConstants } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';

interface Props {
}

const Login: React.FunctionComponent<Props> = ({
}: Props) => {
  const constants: AppConstants = useConstants();

  return (
    <View style={style.container}>
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
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={style.childContainer}>
        <ThemedText style={style.forgotPassword} styleKey="textColor">{"Forget your password?"}</ThemedText>
      </View>
      {/* <RoundButton label="Submit" /> */}
    </View>
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
  forgotPassword: TextStyle
  title: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 180,
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
    width: 300,
    color: "#aaaaaa",
    fontSize: 12
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  forgotPassword : {
    marginTop: 20
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: 300,
    marginBottom: 10,
    borderColor: "#ffffff",
    borderBottomColor: "#dadada",
    borderWidth: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#54afee"
  }
});
