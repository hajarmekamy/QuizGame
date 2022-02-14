import React, { useState, useContext } from "react";
import Options from "../Components/Options";
import CountDown from "../Components/CountDown";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../Context/Providers/State";

const Quiz = ({ data }) => {
  const { state, actions } = useContext(StateContext);

  let navigate = useNavigate();
  const [index, setIndex] = useState(0);

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
    if (index < 9) {
      setIndex(index + 1);
    } else {
      navigate("/results");
    }
    resetForNextQuestion();
    if (!state.option_is_selected) {
      actions.score.noAnswers();
    }
  };

  return (
    <>
      <CountDown />
      <h3>{data[index].question}</h3>
      <div>
        {data[index].options.map((option) => {
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
