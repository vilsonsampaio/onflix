import { InputProps } from "./Input";

import { Wrapper } from "./styles";

export function Input({ label, leftIcon, rightIcon, type, id, value, ...props } : InputProps) {
  const labelClass = !!value ? 'filled' : '';

  return (
    <Wrapper>
      {leftIcon}

      <div className="input-container">
        <input 
          type={type || 'text'} 
          id={id}
          value={value} 
          {...props} 
        />

        <label htmlFor={id} className={labelClass}>{label}</label>
      </div>

      {rightIcon}
    </Wrapper>
  );
}