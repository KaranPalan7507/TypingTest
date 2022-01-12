import React, { useState } from "react";
import "./style.css";
export default function InputText({ firstChange, validateWord, disabled }) {
  let isFirstOnChange = true;
  const onChange = (e) => {
    if (isFirstOnChange) {
      firstChange();
      isFirstOnChange = false;
    }
    const value = e.target.value;
    const lastChar = value.slice(-1);
    if (lastChar === " ") {
      const words = value.split(" ");
      validateWord(words[words.length - 2]);
      console.log(words[words.length - 2]);
    }
  };

  return (
    <div className="input-text-container">
      <div>Type text shown above in below space</div>
      <textarea
        className="input-textarea"
        onChange={onChange}
        rows="5"
        disabled={disabled}
      ></textarea>
    </div>
  );
}
