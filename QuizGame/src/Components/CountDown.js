import React, { useEffect } from "react";

const Options = ({ countdown, setCountDown, setTimeExpired }) => {
  useEffect(() => {
    let interval;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    }
    if (countdown === 0) {
      clearInterval(interval);
      setTimeExpired(true);
      console.log("time expired");
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [countdown]);
  return (
    <>
      <h4>{countdown} </h4>
    </>
  );
};

export default Options;
