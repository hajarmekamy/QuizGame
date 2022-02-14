import React from "react";

const Options = ({ handleClick, value, style, id }) => {
  return (
    <>
      <div>
        <button id={id} style={style} onClick={handleClick}>
          {value}
        </button>
      </div>
    </>
  );
};

export default Options;
