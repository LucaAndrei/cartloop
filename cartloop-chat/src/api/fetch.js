const checkStatus = async (response) => {
  if (response.ok) {
    return response;
  }

  const { body } = response;
  const reader = body.getReader();
  const text = await reader.read();

  const message = String.fromCharCode.apply(null, text.value);

  throw new Error(message || response.statusText);
};

const parseJSON = (response) => {
  let json;
  try {
    json = response.json();
  } catch (e) {
    throw new Error(e);
  }
  return json;
};

const request = (url, payload) => {
  return fetch(url, payload)
    .then(checkStatus)
    .then(parseJSON)
    .then(res => res)
    .catch(err => {
      console.log('request -> err', err);
      throw new Error(err);
    });
}

export default request;
