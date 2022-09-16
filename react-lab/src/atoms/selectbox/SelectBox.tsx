import React, { useState } from 'react';

export const SelectBox = () => {
  const [color, setColor] = useState('灰');
  const currentColor = (c: any) => {
    setColor(c.target.value);
  };
  return (
    <>
      <p>選択中の色:{color}</p>
      <select value={color} onChange={currentColor}>
        <option value="赤">赤</option>
        <option value="緑">緑</option>
        <option value="白">白</option>
        <option value="青">青</option>
        <option value="黄">黄</option>
        <option value="灰">灰</option>
      </select>
    </>
  );
};
