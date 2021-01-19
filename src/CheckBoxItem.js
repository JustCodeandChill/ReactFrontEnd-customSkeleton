import React from 'react';

function CheckBoxItem({ title, name, checked, handleChange }) {
  console.log('On checked box item');
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        //onChange={handleChange}
      />
      <label>{title}</label>
    </div>
  );
}

export default CheckBoxItem;
