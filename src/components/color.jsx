import React from "react";

const Color = ({ color }) => {
  const style = {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: color,
    display: "inline-block",
    margin: "0px 10px",
  };
  return <span style={style}></span>;
};

export default Color;