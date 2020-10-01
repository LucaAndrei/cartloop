import React from 'react';
import useRetext from './hooks/useRetext';

const initialState = {
  username: 'John Doe',
  messages: []
};

const store = {
  state: initialState,
  reducers: {
    updateUsername: (state, newUsername) => {
      return {
        messages: state.messages.map(msg => {
          return {
            ...msg,
            sender: msg.sender === state.username ? newUsername : msg.sender
          }
        }),
        username: newUsername
      }
    },
    addMessage: (state, message) => {
      return {
        ...state,
        messages: [...state.messages, message]
      }
    }
  }
};

const ChatContext = React.createContext([{}, () => { }]);

const ChatProvider = props => {
  const [state, dispatch] = useRetext(store);
  return <ChatContext.Provider value={[state, dispatch]}>{props.children}</ChatContext.Provider>;
};

export { ChatContext, ChatProvider };
