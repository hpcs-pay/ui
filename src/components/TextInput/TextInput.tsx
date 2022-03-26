import React from 'react';
import { useRandomId } from '../../hooks/useRandomId';

import './TextInput.css';

export type TextInputProps = {
    placeholder?: string;
    label?: string;
}

export const TextInput = function TextInput({ label, placeholder }: TextInputProps) {
  const id = useRandomId('text-input');

  return (
    <div className="input--group">
      <label className="input--label" htmlFor={id}>{label}</label>
      <input className="input" id={id} placeholder={placeholder} />
    </div>
  );
};
