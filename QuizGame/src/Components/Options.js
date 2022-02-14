import React from "react";

const Options = ({ handleClick, value }) => {
  return (
    <>
      <div>
        <button onClick={handleClick}>
          {value}
        </button>
      </div>
    </>
  );
};

export default Options;
