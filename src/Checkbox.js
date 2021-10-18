import React from 'react';

const Checkbox = ({ label, value, onChange }) => (
  <div>
    <label>
      <input type='checkbox' checked={value} onChange={onChange} />
      {label}
    </label>
  </div>
);

export default Checkbox;
