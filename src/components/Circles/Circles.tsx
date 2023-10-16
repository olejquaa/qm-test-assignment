import React from "react";
import { Question } from "types";
import { Circle, CirclesBlock } from "./styles";

interface Props {
  questions: Question[];
  currentQuestion: number;
}

export const Circles = ({ questions, currentQuestion }: Props) => {
  let circles = [];
  for (let i = 0; i < questions.length; i++) {
    circles.push(<Circle key={i}></Circle>);
  }
  return <CirclesBlock $id={currentQuestion}>{circles}</CirclesBlock>;
};
