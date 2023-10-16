import styled from "styled-components";
import { Color } from "ui";

export const StyledTitle = styled.h1`
  max-width: 700px;
  color: ${Color.BLACK};

  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 549px) {
    font-size: 25px;
  }
`;

export const StyledSubtitle = styled.h2`
  max-width: 600px;
  color: ${Color.BLACK};

  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 549px) {
    font-size: 14px;
  }
`;
