import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Message from '../Message/Message';

const StyledMessages = styled.div`
  overflow-y: auto;
  padding: 10px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Messages = ({ messages }) => {

  const containerRef = useRef(null);
  useEffect(() => {
    const chatAreaElement = containerRef.current;
    if (chatAreaElement) {
      const shouldScroll = chatAreaElement.scrollTop + chatAreaElement.clientHeight !== chatAreaElement.scrollHeight;
      if (shouldScroll) {
        chatAreaElement.scrollTop = chatAreaElement.scrollHeight;
      }
    } else {
      containerRef.current = true;
    }
  });

  return <StyledMessages ref={containerRef}>
    {messages.filter(msg => msg && msg.message).map((msg, index) => (
      <Message key={index} message={msg.message} sender={msg.sender} />
    ))}

  </StyledMessages>
}
export default Messages;
