import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import ThemeToggle from '../../components/Base/ThemeToggle';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import ImageComponent from '../../components/Base/ImageComponent';
import useConstants from '../../hooks/useConstants';
import Login from '../Login/Index';
import StyledButton from '../../components/Base/StyledButton';

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const BaseHome: React.FunctionComponent<Props> = ({
  dispatch,
  history
}: Props) => {
  const constants: AppConstants = useConstants();

  const goToBaseNext = () => {
    history.push('/base')
  }

  const updateTheme = (theme: AppTheme) => dispatch(setThemeAction(theme))

  return (
    <>
      {/* <ThemeToggle updateTheme={updateTheme} /> */}
      {/* <ImageComponent src={constants.recraftLogo}/> */}
      <Login />
      {/* <StyledButton
        label="Submit"
        onButtonPress={goToBaseNext}
      /> */}
    </>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(BaseHome);
