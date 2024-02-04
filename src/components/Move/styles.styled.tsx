import { styled } from "styled-components";
import { devices } from "@styles/BreakPoints";

type MoveProps = {
  $move: string;
  $gameResult?: string;
};

export const Move = styled.div<MoveProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.border_radius.full};
  width: 230px;
  height: 230px;
  background: linear-gradient(
    ${({ theme, $move }) => {
      if ($move === "paper") return theme.colors.paper_gradient;
      else if ($move === "scissors") return theme.colors.scissors_gradient;
      return theme.colors.rock_gradient;
    }}
  );
  box-shadow: inset 0px -11px 0px -1px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;

  @media ${devices.laptop} {
    width: 200px;
    height: 200px;
  }

  @media ${devices.mobileL} {
    width: 150px;
    height: 150px;
  }

  img {
    width: 70px;
    position: relative;
    z-index: 99;

    @media ${devices.mobileL} {
      width: 50px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: inset 0px 10px 0px -1px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.border_radius.full};
    width: 175px;
    height: 175px;

    @media ${devices.laptop} {
      width: 150px;
      height: 150px;
    }

    @media ${devices.mobileL} {
      width: 110px;
      height: 110px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 450px;
    height: 450px;
    z-index: -1;
    border-radius: ${({ theme }) => theme.border_radius.full};
    background: rgba(225, 225, 225, 0.02);
    border: solid rgba(225, 225, 225, 0.02) 80px;
    outline: rgba(225, 225, 225, 0.01) 50px solid;
    display: ${({ $gameResult }) => {
      if ($gameResult === "YOU WIN") return "block";
      else return "none";
    }};

    @media ${devices.tablet} {
      width: 300px;
      height: 300px;
      border: solid rgba(225, 225, 225, 0.02) 50px;
      outline: rgba(225, 225, 225, 0.02) 30px solid;
    }
  }
`;
