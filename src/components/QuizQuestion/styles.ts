import styled from "styled-components";
import { Color } from "ui";

export const StyledQuizQuestion = styled.h2`
  color: ${Color.BLACK};

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 0px;
  margin-bottom: 32px;
`;

export const StyledQuizBlock = styled.ul`
  min-height: 250px;
`;

export const StyledQuizVariant = styled.li`
  color: ${Color.BLACK};

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-bottom: 15px;
`;

export const RadioButton = styled.input`
  vertical-align: middle;
  margin: -3px 0 0 0;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const StyledLabel = styled.label``;
