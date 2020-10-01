import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ChatContext } from '../../ChatContext';
import { useValidators } from '../../hooks/useValidators';

const StyledUsernameSpan = styled.span`
  font-size: 12px;
  color: #555;
  margin-right: 5px;
  cursor: ${(props) => props.isSender ? 'pointer' : 'default'};
`;
const StyledUsernameInput = styled.input`
  outline: none;
  font-size: 12px;
  color: #555;
  margin-right: 5px;
  border: ${(props) => props.hasErrors ? '1px solid red' : '1px solid black'};
`;

const Username = ({ sender }) => {
  const [state, dispatch] = useContext(ChatContext);

  const { values, errors, bindField, isValid } = useValidators({
    validations: {
      username: {
        required: true,
        pattern: {
          value: /^[a-zA-Z ]+$/,
          message: 'invalid username'
        }
      }
    },
    initialValues: {
      username: sender
    }
  });


  const [isEditingUsername, setIsEditingUsername] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isValid()) {
      e.preventDefault();
      setIsEditingUsername(false);
      dispatch.updateUsername(values.username)
    }
  }

  const isSender = sender === state.username;

  return <>
    {isEditingUsername
      ? <div>
        <StyledUsernameInput
          hasErrors={!isValid()}
          type='text'
          name='username'
          {...bindField('username')}
          onKeyDown={handleKeyDown} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      : <StyledUsernameSpan
        isSender={isSender}
        className='sender'
        onClick={() => isSender ? setIsEditingUsername(true) : null}>
        {sender}
      </StyledUsernameSpan>
    }
  </>
}
export default Username;

