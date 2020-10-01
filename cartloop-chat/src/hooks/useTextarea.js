import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  color: #444;
  height: 20px;
  overflow: hidden;
`;

export function useTextarea({ onSubmit }) {
  const [value, setValue] = useState('');
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey === false && e.target.value.trim() !== '') {
      e.preventDefault();
      setValue('');
      onSubmit();
    }
  }
  const textarea =
    <StyledTextarea
      value={value}
      placeholder='Type message...'
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown} />;

  return [value, textarea];
}