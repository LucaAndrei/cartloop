import React, { useContext } from 'react';
import styled from 'styled-components';
import api from '../../api';
import { config } from '../../api/config';
import { ChatContext } from '../../ChatContext';
import { useInterval } from '../../hooks/useInterval';
import { flexColumnCenter } from '../../styles';
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageInput from '../MessageInput/MessageInput';
import Messages from '../Messages/Messages';

const StyledChat = styled.section`
  border-radius: 20px;
  height: calc(100% - 60px);
  max-height: 460px;
  min-height: 220px;
  width: 320px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  box-shadow: 2px 10px 40px rgba(22, 20, 19, 0.4);
  ${flexColumnCenter}

  @media only screen and (max-device-width: 667px), screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
    max-height: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background: #fff;
}
`;

const Chat = () => {
  const [state, dispatch] = useContext(ChatContext);

  useInterval(() => {
    api.fetch(
      api.config.getMessage(),
      api.http.get()
    ).then(res => {
      if (res.message) {
        dispatch.addMessage(res)
      }
    })
      .catch(err => console.log('App -> err', err))
  }, config.pollingTimeout);

  return <StyledChat>
    <ChatHeader />
    <Messages messages={state.messages} />
    <MessageInput onMessageInsert={msg => dispatch.addMessage(msg)} />
  </StyledChat>
}
export default Chat;