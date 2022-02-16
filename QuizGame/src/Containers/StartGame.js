import React from "react";
import { useNavigate } from "react-router-dom";

const StartGame = () => {
  let navigate = useNavigate();

  const handleStartGame = () => {
    navigate("./quiz");
  };
  return (
    <div className="container-start-game">
      <header className="title-quiz-start">
        WELCOME TO THE QUIZ GAME, INSPIRED BY SQUID GAME
      </header>
      <article className="text-quiz-start">
        The rules are simple, you will be presented with 10 questions and 15
        seconds time slot to answer each. As a bonus to help you out, you are
        given the possibility to use two lifelines to use once during the game.
        The <b style={{ color: "#1e546b", fontSize: 30 }}>50/50</b> to remove
        two options, and the{" "}
        <b style={{ color: "#1e546b", fontSize: 30}}>+10</b> to add 10 seconds
        to your time slot. At the end of the game, you will be presented with
        the score results. If the results show that your incorrect answers are
        more than 50% the game will be over and you will be{" "}
        <b style={{ color: "darkred", fontSize: 25 }}>ELIMINATED</b>.
      </article>
      <b style={{ color: "#494F57" }}>
        {" "}
        *disclaimers, game addictive and not recommended for a public under the
        age of 18.
      </b>
      <button className="start-game-button" onClick={handleStartGame}>
        LET'S GO!
      </button>
    </div>
  );
};

export default StartGame;
