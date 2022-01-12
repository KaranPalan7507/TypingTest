import React, { useState } from "react";
import Timer from "./../../components/Timer";
import InputText from "./../../components/InputText";
import SourceText from "./../../components/SourceText";

export default function TypingTest({ testDuration, sourceText, afterTimeEnd }) {
  const [startTimer, setStartTimer] = useState(null);
  const [timeEnd, setTimeEnd] = useState(false);
  let startIndex = 0;
  let score = 0;
  const sourceWords = sourceText.split(" ");
  const validateWord = (word) => {
    if (sourceWords[startIndex] === word) {
      console.log("valid");
      score += 10;
    } else {
      console.log("invalid");
      score -= 5;
    }
    startIndex++;
  };
  return (
    <div>
      <SourceText sourceText={sourceText} />
      <InputText
        firstChange={() => setStartTimer(testDuration)}
        validateWord={validateWord}
        disabled={timeEnd}
      />
      <div>Time Remaining: </div>
      {startTimer ? (
        <Timer
          seconds={startTimer}
          timerEnded={() => {
            afterTimeEnd(score);
          }}
        />
      ) : (
        <div>
          <h1>{testDuration}</h1>
        </div>
      )}
    </div>
  );
}
