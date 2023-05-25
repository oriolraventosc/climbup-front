import React from "react";

interface LabelProps {
  color: string;
  text: string;
}

const Label = ({ color, text }: LabelProps): JSX.Element => {
  return <div style={{ color: color }}>{text}</div>;
};

export default Label;
