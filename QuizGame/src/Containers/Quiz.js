import React, { useState } from "react";
import Options from "../Components/Options";

const Quiz = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [chosenOption, setChosenOption] = useState();

  let correctAnswer = data[index].answer;

  const handleClick = (el) => {
    setChosenOption(el);
  };

  const resetForNextQuestion = () => {
    setChosenOption(undefined);
  };

  const goToNextQuestion = () => {
    if (index < 10) {
      setIndex(index + 1);
    }
    resetForNextQuestion();
  };

  return (
    <>
      <h3>{data[index].question}</h3>
      <div>
        {data[index].options.map((option) => {
          return (
            <div key={option}>
              <Options
                element={option}
                chosenOption={chosenOption}
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
