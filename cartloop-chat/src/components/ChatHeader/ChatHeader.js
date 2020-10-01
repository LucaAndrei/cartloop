import React from 'react';
import styled from 'styled-components';
import { boxShadow, circleImage, coverBgImage, flexColumnCenter } from '../../styles';

const StyledChatHeader = styled.div`
  ${flexColumnCenter}

  width: 100%;
  min-height: 80px;
  position: relative;

  img {
    ${boxShadow}
    ${coverBgImage}
    ${circleImage}
    display: block;
    width: 80px;
    height: 80px;
    margin: 1em auto;
    border: 2px solid #fff;
    position: absolute;
    top: -50px;
  }

  .chat-title {
    width: 100%;
    border-bottom: 1px solid #ccc;
    color: #777;
    padding-bottom: 5px;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    bottom: 0;

    h1{
      font-weight: normal;
      font-size: 14px;
      margin: 0;
      padding: 0;
    }
  }
  @media only screen and (max-device-width: 667px), screen and (max-width: 450px) {
    min-height: 120px;
    img {
      top: -10px;
    }
  }
`;

const ChatHeader = () => {

  return <StyledChatHeader>
    <img src='http://askavenue.com/img/17.jpg' alt='Jesse Tino' />
    <div className='chat-title'>
      <h1>Jane Doe</h1>
    </div>
  </StyledChatHeader>
}
export default ChatHeader;