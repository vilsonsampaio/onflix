import { useState } from "react";

import { InputProps } from "./Input";

import { Wrapper } from "./styles";

export function Input(props: InputProps) {
  const { label, leftIcon, rightIcon, type, id } = props;
  
  const [value, setValue] = useState('');
  
  return (
    <Wrapper>
      {leftIcon}

      <div className="input-container">
        <input 
          type={type || 'text'} 
          id={id} 
          value={value}
          onChange={e => setValue(e.target.value)}
          {...props} 
        />

        <label htmlFor={id} className={value && 'filled'}>{label}</label>
      </div>

      {rightIcon}
    </Wrapper>
  );
}