import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChatContext } from '../../ChatContext';
import Username from '../Username/Username';

const StyledMessage = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 10px 0;
  flex-direction: ${(props) => props.isSender ? 'row-reverse' : 'row'};

  .msg {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    margin-left: ${(props) => props.isSender ? '0px' : '5px'};
    text-align: ${(props) => props.isSender ? 'right' : 'left'};
    background: ${(props) => props.isSender ? '#fff' : '#eee'};
    border-radius: ${(props) => props.isSender ? '20px 20px 0 20px' : '20px 20px 20px 0'};
    padding: 10px;
  }

  .message-info {
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.isSender ? 'flex-end' : 'flex-start'};
    margin-top: 10px;
  }
`;

const Message = ({ message, sender }) => {
  const [state] = useContext(ChatContext);
  const isSender = sender === state.username;

  return <StyledMessage isSender={isSender}>
    <div className='msg'>
      {message}
      <div className='message-info'>
        <Username sender={sender} />
      </div>
    </div>
  </StyledMessage>
}
export default Message;