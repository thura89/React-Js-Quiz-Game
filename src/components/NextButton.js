import React from "react";

const NextButton = ({ dispatch, yourAnswer, index, numQuestions }) => {
  if (yourAnswer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finishQuestion" })}
      >
        Finish!
      </button>
    );
};

export default NextButton;
