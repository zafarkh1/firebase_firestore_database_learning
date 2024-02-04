import React from "react";

const Colors = ({ color }) => {
  const style = {
    width: 25,
    height: 25,
    borderRadius: "50%",
    display: "inline-block",
    margin: "0px 10px",
    backgroundColor: color,
  };
  return <span style={style}></span>;
};

export default Colors;
