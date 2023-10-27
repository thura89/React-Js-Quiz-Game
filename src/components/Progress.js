import React from "react";

const Progress = ({
  maxPossiblePoints,
  points,
  index,
  numQuestions,
  yourAnswer,
}) => {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(yourAnswer !== null)}
      ></progress>
      <p>
        Question
        <strong> {index + 1} </strong> / {numQuestions}
      </p>
      <p>
        <strong>{points} </strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
