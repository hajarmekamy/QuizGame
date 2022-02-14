import React, { useState } from "react";
import Options from "../Components/Options";
import CountDown from "../Components/CountDown";

const Quiz = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [chosenOption, setChosenOption] = useState();
  const [time, setTime] = useState(15);
  const [timeExpired, setTimeExpired] = useState();

  let correctAnswer = data[index].answer;

  const handleClick = (el) => {
    setChosenOption(el);
  };

  const resetForNextQuestion = () => {
    setChosenOption(undefined);
    setTime(15);
  };

  const goToNextQuestion = () => {
    if (index < 10) {
      setIndex(index + 1);
    }
    resetForNextQuestion();
  };

  return (
    <>
      <CountDown
        setTimeExpired={setTimeExpired}
        countdown={time}
        setCountDown={setTime}
      />
      <h3>{data[index].question}</h3>
      <div>
        {data[index].options.map((option) => {
          return (
            <div key={option}>
              <Options
                element={option}
                chosenOption={chosenOption}
                timeExpired={timeExpired}
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
