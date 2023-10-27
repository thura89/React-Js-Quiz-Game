import React from "react";
import Option from "./Option";

const Question = ({ question, dispatch, yourAnswer }) => {
  return (
    <>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} yourAnswer={yourAnswer} />
    </>
  );
};

export default Question;
