/* eslint-disable react/prop-types */
import { decode } from "html-entities";
import { nanoid } from "nanoid";
const QuestionsList = ({ questionTitle, options, id, clickTriggered, selected, correct, answerIndex }) => {
  const handleClick = index => {
    clickTriggered(index, id);
  };

  console.log("correct", correct);
  // console.log(options);
  const opt = options.map((option, index) => {
    // console.log("options", option);
    return (
      <p
        key={nanoid()}
        onClick={() => handleClick(index)}
        className={`option-paragraph ${index === selected ? "selected" : ""} ${
          correct && answerIndex === index && "correct"
        }
          ${correct && selected === index && "incorrect"}
        `}
      >
        {decode(option)}
      </p>
    );
  });
  return (
    <div className="question-container">
      <h2 className="question-title"> {questionTitle} </h2>

      <div className="option-container">{opt}</div>
    </div>
  );
};

export default QuestionsList;
