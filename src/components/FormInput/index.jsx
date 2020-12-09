import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  InputLabel,
} from './FormInput.style';

function FormInput({ label, handleChange, ...props }) {
  return (
    <GroupContainer>
      <FormInputContainer
        className={props.value.length ? 'shrink' : ''}
        onChange={handleChange}
        {...props}
      />
      {label ? <InputLabel>{label}</InputLabel> : null}
    </GroupContainer>
  );
}

export default FormInput;
