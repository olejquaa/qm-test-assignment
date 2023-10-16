import styled from "styled-components";

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
