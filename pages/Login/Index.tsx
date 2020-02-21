import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet, Switch, TextStyle, StatusBar ,TextInput} from 'react-native';
import { AppTheme, lightTheme, darkTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import ImageComponent from '../../components/Base/ImageComponent';
import StyledButton from '../../components/Base/StyledButton';

interface Props {
}

const Login: React.FunctionComponent<Props> = ({
}: Props) => {
  const theme: AppTheme = useTheme();
  const constants: AppConstants = useConstants();

  return (
    <View>
      <View style={style.topContainer}>
        <View style={style.childContainer}>
          <ThemedText styleKey="textColor" style={style.title}>{constants.labelLogin}</ThemedText>
        </View>
      </View>
      <View style={style.bottomContainer}>
        <View style={style.childContainer}>
        <TextInput
          style={{height: 40, width: 200}}
          placeholder="User Name"
        />
        </View>
      </View>
      <View style={style.bottomContainer}>
      <View style={style.childContainer}>
         <TextInput
          style={{height: 40, width: 200}}
          placeholder="Password"
        />
        </View>
        </View>
        <View style={style.childContainer}>
          <ThemedText styleKey="textColor">{"Forget your password"}</ThemedText>
        </View>
        <View>
        <StyledButton
        label="Submit"
      />
        </View>
       
        {/* <View>
            <ImageComponent src={constants.recraftLogo} />
            <ImageComponent src={constants.recraftLogo} />
        </View> */}
    
    </View>
  )
};

export default Login;

interface Style {
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  bottomContainer: ViewStyle;
  title: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  topContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 250,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold"
  }
});
