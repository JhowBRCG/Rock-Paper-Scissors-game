import styled from "styled-components";
import { devices } from "@styles/BreakPoints";

export const BattleStage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: center;
  gap: 6rem;

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }

  @media ${devices.mobileL} {
    grid-column-gap: 3rem;
  }
`;

export const PlayerChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;

  @media ${devices.tablet} {
    flex-direction: column-reverse;
  }

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    letter-spacing: 0.3rem;

    @media ${devices.tablet} {
      font-size: 1.8rem;
    }
  }

  > div {
    width: 350px;
    height: 350px;
    cursor: auto;

    @media ${devices.laptop} {
      width: 300px;
      height: 300px;
    }

    @media ${devices.tablet} {
      width: 250px;
      height: 250px;
    }

    @media ${devices.mobileL} {
      width: 150px;
      height: 150px;
    }

    img {
      width: 100px;

      @media ${devices.mobileL} {
        width: 50px;
      }
    }

    &::before {
      width: 275px;
      height: 275px;

      @media ${devices.laptop} {
        width: 230px;
        height: 230px;
      }

      @media ${devices.tablet} {
        width: 190px;
        height: 190px;
      }

      @media ${devices.mobileL} {
        width: 110px;
        height: 110px;
      }
    }
  }
`;
