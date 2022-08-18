import Link from "next/link";

import React from "react";
import { WrapButton } from "./styles.js";

const Button = ({ text, color, bgColor, width, linkTo }) => {
  return (
    <WrapButton color={color} bgColor={bgColor} width={width}>
      <a href={linkTo}> {text}</a>
    </WrapButton>
  );
};

export default Button;
