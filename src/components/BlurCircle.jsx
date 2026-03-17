import React from "react";

 const BlurCircle = ({top="auto", left ="auto", right="auto", bottom="auto"}) => {
  return (
    <div className="absolute -z-50 w-58 h-58 aspect-square rounded-full bg-red-500/30 blur-3xl"
    style={{top:top, right:right, left:left, bottom:bottom}}></div>
  );
};

export default BlurCircle;
