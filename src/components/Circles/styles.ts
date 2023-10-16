import styled from "styled-components";
import { Color } from "ui";

export const CirclesBlock = styled.div<{ $id?: number }>`
  display: flex;

  :nth-child(${(props) => props.$id}) {
    background-color: ${Color.LIGHT_BLUE};
  }

  :last-child {
    margin-right: 0px;
  }
`;

export const Circle = styled.div`
  height: 20px;
  width: 20px;

  margin-right: 10px;

  border-radius: 50%;
  background-color: ${Color.BLUE};
`;
