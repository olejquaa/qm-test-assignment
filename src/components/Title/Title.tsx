import React from "react";
import { StyledSubtitle, StyledTitle } from "./styles";

interface Props {
  title: string;
  subtitle: string;
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </>
  );
};
