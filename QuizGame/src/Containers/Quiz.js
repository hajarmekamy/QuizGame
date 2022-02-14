import React, { useState } from "react";
import Options from "../Components/Options";

const Quiz = ({ data }) => {
  const [index, setIndex] = useState(0);

  const goToNextQuestion = () => {
    if (index < 10) {
      setIndex(index + 1);
      console.log(index);
    }
  };

  return (
    <>
      <h3>{data[index].question}</h3>
      <div>
        {data[index].options.map((option) => {
          return (
            <div key={option}>
              <Options value={option} />
            </div>
          );
        })}
      </div>
      <button onClick={goToNextQuestion}>Next question</button>
    </>
  );
};

export default Quiz;
