import styled from "styled-components";
import { Color } from "ui";

export const StyledQuizBlock = styled.div`
  max-width: 846px;
  padding: 35px;
  border-radius: 10px;
  background-color: ${Color.BACKGROUND_BLUE};
`;

export const CirclesSubtitle = styled.span`
  display: flex;
  margin-top: 16px;
  margin-bottom: 38px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${Color.GRAY};
`;

export const StyledBlueButton = styled.button`
  color: ${Color.WHITE};

  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: ${Color.BLUE};

  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 65px;

  &:hover {
    box-shadow: 2px 2px 2px ${Color.GRAY};
  }
`;

export const StyledWhiteButton = styled.button`
  color: ${Color.BLACK};

  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
  margin-bottom: 65px;

  border-radius: 5px;
  background: ${Color.WHITE};

  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    box-shadow: 2px 2px 2px ${Color.GRAY};
  }
`;
