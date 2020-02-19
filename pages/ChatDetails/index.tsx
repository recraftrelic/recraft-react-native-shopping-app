import React from 'react';
import { ScrollView } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import ChatItem from '../../components/Chat/ChatItem';
import ChatTitleBar from '../../components/Chat/ChatTitleBar';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';

const ChatDetails: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToChatList = () => {
        history.push('/')
    }   
    const constants: AppConstants = useConstants(); 

    return (
        <>
        <ScrollView>
        <ChatItem
          userImageSource={{ uri: "https://picsum.photos/200" }}
          userName="Back"
          lastMessage={""}
          onChatPress={goToChatList}
        />
      </ScrollView>
        </>
    );
}

export default ChatDetails;
