import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import Button from '../../components/Base/ButtonItem';
import ThemeToggle from '../../components/Base/ThemeToggle';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import { AppTheme } from '../../config/DefaultConfig';

interface Props extends RouteComponentProps {
  dispatch: Dispatch
}

const BaseHome: React.FunctionComponent<Props> = ({
  dispatch,
  history
}: Props) => {

  const goToBaseNext = () => {
    history.push('/base')
  }

  const updateTheme = (theme: AppTheme) => dispatch(setThemeAction(theme))

  return (
    <>
      <ThemeToggle updateTheme={updateTheme} />
      <Button
        label="Next"
        onButtonPress={goToBaseNext}
      />
    </>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(BaseHome);
