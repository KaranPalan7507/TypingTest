import React, { useState } from "react";
import Dropdown from "./../../components/Dropdown";

export default function TestSelection({ startTest }) {
  const [selectedTime, setSelectedTime] = useState(60);
  const testTimeOptions = [60, 90, 120, 180];
  const onDropdownChange = (time) => {
    setSelectedTime(parseInt(time));
  };
  return (
    <div>
      <div>
        <h4>Select Typing Test Duration</h4>
        <Dropdown options={testTimeOptions} onChange={onDropdownChange} />
      </div>
      <button onClick={() => startTest(selectedTime)}>Start</button>
    </div>
  );
}
