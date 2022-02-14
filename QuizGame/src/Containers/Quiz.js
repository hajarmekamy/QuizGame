import React, { useState, useContext } from "react";
import Options from "../Components/Options";
import CountDown from "../Components/CountDown";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../Context/Providers/State";
import QuizHelpers from "../Components/QuizHelpers";

const Quiz = ({ data }) => {
  const { state, actions } = useContext(StateContext);

  let navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [nextQuestionActive, setNextQuestionActive] = useState(false);
  const [helperTwoActive, setHelperTwoActive] = useState(false);

  let correctAnswer = data[index].answer;

  const handleClick = (el) => {
    actions.options.setOptionIsSelected(true);
    actions.options.setChosenOption(el);

    //incrementing score of correctAnswers
    if (el === correctAnswer) {
      actions.score.correctAnswers();
    }

    // //incrementing score of wrongAnswers
    if (el !== correctAnswer) {
      actions.score.wrongAnswers();
    }
  };

  console.log(state);

  const resetForNextQuestion = () => {
    actions.options.setChosenOption(undefined);
    actions.options.setOptionIsSelected(false);
    actions.time.setTimer(15);
    actions.time.setTimeExpired(false);
  };

  const goToNextQuestion = () => {
    setNextQuestionActive(true);
    resetForNextQuestion();
    if (index < 9) {
      setIndex(index + 1);
    } else {
      navigate("/results");
    }
    if (!state.option_is_selected) {
      actions.score.noAnswers();
    }
  };

  let optionsRemained = data[index].options.filter(
    (option) => !data[index].optionsToRemove.includes(option)
  );

  const optionsToChooseFrom = () => {
    if (helperTwoActive && !nextQuestionActive) {
      return optionsRemained;
    } else return data[index].options;
  };

  return (
    <>
      <CountDown />
      <QuizHelpers
        helperTwoActive={helperTwoActive}
        setHelperTwoActive={setHelperTwoActive}
      />
      <h3>{data[index].question}</h3>
      <div>
        {optionsToChooseFrom().map((option) => {
          return (
            <div key={option}>
              <Options
                element={option}
                correctAnswer={correctAnswer}
                value={option}
                handleClick={() => handleClick(option)}
              />
            </div>
          );
        })}
      </div>
      <button onClick={goToNextQuestion}>Next question</button>
    </>
  );
};

export default Quiz;
