import React, { useState } from "react";
import TestSelection from "./Pages/TestSelection";
import TypingTest from "./Pages/TypingTest";
import TestEnd from "./Pages/TestEnd";
import RandomParagraph from "random-paragraph";

import "./App.css";

function App() {
  const [testStarted, setTestStarted] = useState(false);
  const [testEnd, setTestEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const sourceText = RandomParagraph();

  const startTest = (time) => {
    setTestStarted(true);
    setSelectedTime(time);
  };
  return (
    <div className="App">
      {testEnd ? (
        <TestEnd
          score={score}
          restart={() => {
            setTestEnd(false);
            setTestStarted(false);
          }}
        />
      ) : testStarted ? (
        <TypingTest
          testDuration={selectedTime}
          sourceText={sourceText}
          afterTimeEnd={(score) => {
            setTestEnd(true);
            setScore(score);
          }}
        />
      ) : (
        <TestSelection startTest={startTest} />
      )}
    </div>
  );
}

export default App;
