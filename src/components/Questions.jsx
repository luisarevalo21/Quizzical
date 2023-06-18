import { useEffect, useState } from "react";
import { fetchData } from "../axios";
import QuestionsList from "./QuestionsList";
import { decode } from "html-entities";
// import { nanoid } from "nanoid";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState("");

  useEffect(() => {
    // fetchData();

    // const fetch = async () => {
    //   const res = await fetchData();
    //   console.log("res inside of questions", res);
    //   setQuestions(res);
    // };
    fetch();
    // axios.get("https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple");
  }, []);

  const fetch = async () => {
    const res = await fetchData();
    console.log("res inside of questions", res);
    setQuestions(res);
  };

  const handlePlayAgain = () => {
    setCorrectAnswers("");

    fetch();
  };

  const handleClick = (index, id) => {
    console.log("clicked", index, id);
    console.log(questions);
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        if (question.questionId === id) {
          return { ...question, selected: index };
        } else return question;
      });
    });
  };

  const handleCheckAnswers = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      if (question.selected === question.answerIndex) {
        correctAnswers++;
      }
    });
    setCorrectAnswers(correctAnswers);
  };
  // console.log(questions);
  const questionsList = questions.map(question => {
    //adjust randomly generate insert
    //error when clicking randomize again,
    //only randomize once when receiving the data to insert the correct answer into an array
    // maybe do it on the fetch or in the questions component
    // const options = [...question.incorrect_answers];

    // options.splice((options.length + 1) * Math.random(), 0, question.correct_answer);
    return (
      <QuestionsList
        key={question.questionId}
        questionTitle={decode(question.question)}
        options={question.options}
        id={question.questionId}
        clickTriggered={handleClick}
        selected={question.selected}
      />
    );
  });

  const length = questions.length;
  return (
    <div className="container">
      <h2 className="title">Quizzical!</h2>
      {/* Questions page */}
      {questionsList}

      {correctAnswers && (
        <div className="results-container">
          <p className="results">
            You scored {correctAnswers}/{length} correct answers
          </p>
          <button className="submit" onClick={handlePlayAgain}>
            Play again
          </button>
        </div>
      )}
      {!correctAnswers && (
        <button className="submit" onClick={handleCheckAnswers}>
          Check Answers
        </button>
      )}
    </div>
  );
};

export default Questions;
