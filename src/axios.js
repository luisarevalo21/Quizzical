import axios from "axios";
import { nanoid } from "nanoid";

export default axios.create({
  baseURL: "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple",
});
export const fetchData = async () => {
  return await axios.get("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple").then(res => {
    // console.log(res.data.results);
    return res.data.results.map(question => {
      // console.log(question);

      const options = [...question.incorrect_answers];

      const answerIndex = Math.floor((options.length + 1) * Math.random());
      options.splice(answerIndex, 0, question.correct_answer);
      return {
        question: question.question,
        options: options,
        answerIndex: answerIndex,
        // incorrect_answers: question.incorrect_answers,
        // correct_answer: question.correct_answer,
        questionId: nanoid(),
        selected: null,
      };
    });
  });
};
