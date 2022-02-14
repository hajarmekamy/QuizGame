import React from "react";
import { useNavigate } from "react-router-dom";

const Options = () => {
  let navigate = useNavigate();

  const handleStartGame = () => {
    console.log("heyyy");
    navigate("./quiz");
  };
  return (
    <>
      <div>START GAME</div>
      <button onClick={handleStartGame}>start</button>
    </>
  );
};

export default Options;
