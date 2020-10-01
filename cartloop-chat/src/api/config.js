export const config = {
  apiPort: process.env.REACT_APP_API_PORT,
  protocol: process.env.REACT_APP_PROTOCOL,
  pollingTimeout: 1000 // millis
};

const localApiServerUrl = `${config.protocol}://${window.location.hostname}:${config.apiPort}`;

export default {
  addMessage: () => `${localApiServerUrl}/api/messages/`,
  getMessage: () => `${localApiServerUrl}/api/messages/`
};
