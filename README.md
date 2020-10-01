# Cartloop chat

Steps to run this project after cloning it:

1. cd server
2. npm run dev

# How it works

The frontend part is made entirely with React Hooks and functional components.

All messages are stored on the client side in the store (useReducer hook was used here).

The client tries to get new messages by long-polling on a set interval.

The user can change his username by clicking on his own username in a chat message. Custom validators are being applied to user's input and he receives visual feedback if the entered input is not valid. Upon entering a valid value all his messages will be updated.


Whenever the client sends a message, a POST request is being sent. The server will reply with a random message after a predefined timeout.
