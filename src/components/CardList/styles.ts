import styled from "styled-components";
import { Color } from "ui";

export const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 18%);
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 1415px) {
    grid-template-columns: repeat(auto-fill, 22%);
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, 30%);
  }

  @media (max-width: 824px) {
    grid-template-columns: repeat(auto-fill, 46%);
  }

  @media (max-width: 549px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;

export const StyledPagination = styled.div`
  padding: 5px;
  > ul {
    display: flex;
    flex-direction: row;

    > li {
      padding: 5px;
    }

    > :last-child {
      display: none;
    }

    > :first-child {
      display: none;
    }

    > .disabled {
      .visually-hidden {
        display: none;
      }
    }

    > .page-item {
      a {
        color: ${Color.GRAY};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        &:hover {
          color: ${Color.LIGHT_BLUE};
        }
      }
    }

    > .active {
      color: ${Color.BLUE};
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      .visually-hidden {
        display: none;
      }
    }
  }
`;
