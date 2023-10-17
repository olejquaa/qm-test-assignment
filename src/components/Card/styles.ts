import styled from "styled-components";
import { Color } from "ui";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  width: 100%;
  height: 342px;
  min-width: 240px;

  cursor: pointer;
`;

export const CardTitle = styled.p`
  display: -webkit-box;
  min-height: 45px;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */
  text-align: left;

  margin-top: 22px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 549px) {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

export const CardPrice = styled.p<{ $oldPrice?: string }>`
  margin-top: 15px;
  margin-bottom: 0px;
  font-size: 27px;
  font-style: normal;
  font-weight: 600;
  line-height: 36.963px;

  @media (max-width: 549px) {
    font-size: 18px;
    margin-top: 0px;
  }

  &:after {
    content: "руб.";

    margin-left: 5px;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 136.9%;

    @media (max-width: 549px) {
      font-size: 16px;
    }
  }

  &::before {
    content: "${(props) => props.$oldPrice}";

    color: ${Color.GRAY};

    margin-right: 5px;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 136.9%;
    text-decoration: line-through;

    @media (max-width: 549px) {
      font-size: 16px;
    }
  }
`;

export const CardImage = styled.div<{ $imageUrl?: string }>`
  position: relative;
  border-radius: 6.75px;
  border: 1px solid ${Color.LIGHT_GRAY};

  height: 100%;
  background-image: url(${(props) => props.$imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FavoritesImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
