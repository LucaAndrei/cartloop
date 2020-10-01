import React from 'react';
import { ChatProvider } from './ChatContext';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
}

export default App;
