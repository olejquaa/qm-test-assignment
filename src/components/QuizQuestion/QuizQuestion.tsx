import React, { memo, useState } from "react";
import { Question } from "types";
import {
  RadioButton,
  StyledLabel,
  StyledQuizBlock,
  StyledQuizQuestion,
  StyledQuizVariant,
} from "./styles";

export const QuizQuestion = memo(({ id, title, options, answer }: Question) => {
  const [currentOptionValue, setOptionValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionValue(e.target.value);
    answer(true);
  };

  return (
    <>
      <StyledQuizBlock>
        <StyledQuizQuestion>{title}</StyledQuizQuestion>
        {options.map((item) => (
          <StyledQuizVariant key={item}>
            <RadioButton
              type="radio"
              checked={currentOptionValue === item ? true : false}
              name={title}
              value={item}
              onChange={onChange}
              id={item}
            />
            <StyledLabel htmlFor={item}>{item}</StyledLabel>
          </StyledQuizVariant>
        ))}
      </StyledQuizBlock>
    </>
  );
});
