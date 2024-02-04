import styled from "styled-components";
import { devices } from "@styles/BreakPoints";

export const GameResult = styled.div`
  width: 240px;

  @media ${devices.tablet} {
    grid-row: 2;
    grid-column: 1 / 3;
    width: 60%;
    margin: auto;
  }

  h2 {
    text-align: center;
    font-size: 6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};

    @media ${devices.mobileL} {
      font-size: 4rem;
    }
  }
`;
