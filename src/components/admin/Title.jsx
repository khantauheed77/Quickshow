import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <h2 className="font-medium text-2xl" >
      {text1} <span className="underline text-red-500">{text2}</span>
    </h2>
  );
};

export default Title;
