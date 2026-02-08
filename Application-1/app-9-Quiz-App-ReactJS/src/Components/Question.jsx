import React from "react";
import Options from "./Option";

export default function Question({
  question,
  onOptionChange,
  selectedOption,
  onSubmit,
}) {
  console.log(question, selectedOption);
  return (
    <div className="">
      <h3>Question {question.id}</h3>
      <h5 className="mt-2">{question.question}</h5>
      <form onSubmit={onSubmit} className="mt-2 mb-2">
        <option value={selectedOption} />
        <button type="submit" className="btn btn-primary mt-2">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
