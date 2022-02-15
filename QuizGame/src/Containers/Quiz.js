import React, { useState, useContext, useEffect } from "react";
import Options from "../Components/Options";
import CountDown from "../Components/CountDown";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../Context/Providers/State";
import QuizHelpers from "../Components/QuizHelpers";

const Quiz = ({ data }) => {
  const { state, actions } = useContext(StateContext);

  let navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [helperTwoActive, setHelperTwoActive] = useState(false);
  const [helperTwoIsDisabled, setHelperTwoIsDisabled] = useState(false);

  let correctAnswer = data[index].answer;

  // function to show results page after timer is expired on last question
  useEffect(() => {
    if (index === 9 && state.time_expired) {
      navigate("/results");
    }
  }, [state.time_expired, index]);

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

  const resetForNextQuestion = () => {
    actions.options.setChosenOption(undefined);
    actions.options.setOptionIsSelected(false);
    actions.time.setTimer(15);
    actions.time.setTimeExpired(false);
    setHelperTwoIsDisabled(false);
  };

  const goToNextQuestion = () => {
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

  const removeTwoOptions = () => {
    if (!state.time_expired) {
      setHelperTwoActive(true);
      setHelperTwoIsDisabled(true);
    }
  };

  let optionsRemained = data[index].options.filter(
    (option) => !data[index].optionsToRemove.includes(option)
  );

  const optionsToChooseFrom = () => {
    if (helperTwoIsDisabled) {
      return optionsRemained;
    } else return data[index].options;
  };

  return (
    <>
      <div className="timer-lifelines-box">
        {" "}
        <CountDown />
        <QuizHelpers
          helperTwoActive={helperTwoActive}
          removeTwoOptions={removeTwoOptions}
        />
        <p style={{ color: "black", fontSize: 22, fontWeight: "bold" }}>
          Question Nr {index}
        </p>
      </div>
      <p className="question">{data[index].question}</p>
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
      <button className="next" onClick={goToNextQuestion}>
        NEXT
      </button>
    </>
  );
};

export default Quiz;
