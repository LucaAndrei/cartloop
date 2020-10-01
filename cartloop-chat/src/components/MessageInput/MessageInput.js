import React, { useContext } from 'react';
import styled from 'styled-components';
import api from '../../api';
import { ChatContext } from '../../ChatContext';
import { useTextarea } from '../../hooks/useTextarea';

const StyledMessageInput = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;

  .message-submit {
    color: #4a90e2;
    border: none;
    background: #fff;
    text-transform: uppercase;
    cursor: pointer;
    height: 20px;
  }
`;

const MessageInput = ({ onMessageInsert }) => {

  const [state] = useContext(ChatContext);

  const onSubmit = () => {
    api.fetch(
      api.config.addMessage(),
      api.http.post({ message: value, sender: state.username })
    ).then(res => onMessageInsert(res))
      .catch(err => console.log('onSubmit -> err', err));
  }

  const [value, textarea] = useTextarea({ onSubmit });

  return <StyledMessageInput>
    {textarea}
    <button type='submit' className='message-submit' onClick={onSubmit} >Send</button>
  </StyledMessageInput>
}
export default MessageInput;