import { Circles, QuizQuestion, QuizResult, Title } from "components";

import React, { memo, useState } from "react";
import { Question } from "types";
import {
  CirclesSubtitle,
  StyledBlueButton,
  StyledQuizBlock,
  StyledWhiteButton,
} from "./styles";

interface Props {
  questions: Question[];
}

export const Quiz = memo(({ questions }: Props) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [isFinished, setFinished] = useState(false);
  const [answer, setAnswer] = useState(false);

  const handleNext = () => {
    answer === true
      ? setCurrentQuestionNumber(currentQuestionNumber + 1)
      : alert("Выберите вариант ответа");

    setAnswer(false);
  };

  const handlePrev = () => {
    setCurrentQuestionNumber(currentQuestionNumber - 1);
  };

  const handleResult = () => {
    answer === true ? setFinished(true) : alert("Выберите вариант ответа");
  };

  let { id, title, options } = questions[currentQuestionNumber - 1];

  return isFinished ? (
    <QuizResult />
  ) : (
    <>
      <Title
        title={"Онлайн-подбор средств для лица"}
        subtitle={
          "Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов"
        }
      />
      <StyledQuizBlock>
        <Circles
          questions={questions}
          currentQuestion={currentQuestionNumber}
        />
        <CirclesSubtitle>
          Вопрос {id} из {questions.length}
        </CirclesSubtitle>

        <QuizQuestion
          id={id}
          title={title}
          options={options}
          answer={setAnswer}
        />

        {currentQuestionNumber === 1 ? (
          <StyledBlueButton onClick={handleNext} id="next">
            Дальше
          </StyledBlueButton>
        ) : currentQuestionNumber === questions.length ? (
          <>
            <StyledWhiteButton onClick={handlePrev} id="prev">
              Назад
            </StyledWhiteButton>
            <StyledBlueButton type="submit" onClick={handleResult} id="result">
              Узнать результат
            </StyledBlueButton>
          </>
        ) : (
          <>
            <StyledWhiteButton onClick={handlePrev} id="prev">
              Назад
            </StyledWhiteButton>
            <StyledBlueButton onClick={handleNext} id="next">
              Дальше
            </StyledBlueButton>
          </>
        )}
      </StyledQuizBlock>
    </>
  );
});
