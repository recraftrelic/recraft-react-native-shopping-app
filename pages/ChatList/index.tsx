import React from 'react';
import { ScrollView } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import ChatItem from '../../components/Chat/ChatItem';
import ChatTitleBar from '../../components/Chat/ChatTitleBar';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import { ApplicationConfig, AppTheme } from '../../config/DefaultConfig';

interface Props extends RouteComponentProps {
  dispatch: Dispatch
}

const ChatList: React.FunctionComponent<Props> = ({
  dispatch,
  history
}: Props) => {

  const goToChatDetails = () => {
    history.push('/chat')
  }

  const updateTheme = (theme: AppTheme) => dispatch(setThemeAction(theme))

  return (
    <>
      <ChatTitleBar updateTheme={updateTheme} />
      <ScrollView>
        <ChatItem
          userName="Next"
          onChatPress={goToChatDetails}
        />
      </ScrollView>
    </>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(ChatList);
