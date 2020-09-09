import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, fullWidth, ...otherProps }) => (
  <div className="group">
    <input
      className={`${fullWidth ? 'fullWidth' : ''} form-input `}
      onChange={handleChange}
      {...otherProps}
    />
    {label ? <label className={'form-input-label'}>{label}</label> : null}
  </div>
);

export default FormInput;
