import React from "react";
export default function Dropdown({ options, onChange }) {
  return (
    <select onChange={onChange ? (e) => onChange(e.target.value) : null}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
