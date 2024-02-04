import styled from "styled-components";
import { devices } from "@styles/BreakPoints";

export const Modal = styled.dialog`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border_radius.medium};
  padding: 4rem 5rem;
  width: 450px;
  border: none;

  &:modal {
    inset: 0;
    margin: auto;
  }

  &::backdrop {
    background: hsl(0 0% 0% / 50%);
  }

  @media ${devices.mobileL} {
    min-width: 100vw;
    min-height: 100vh;
    border-radius: 0;
  }
`;

export const RulesImg = styled.div`
  @media ${devices.mobileL} {
    position: absolute;
    inset: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
  }

  img {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media ${devices.mobileL} {
    justify-content: center;
    margin-top: 5rem;
  }

  h3 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.dark_text};
  }

  button {
    cursor: pointer;

    @media ${devices.mobileL} {
      position: absolute;
      inset: 0;
      margin: auto auto 5rem auto;
      width: fit-content;
      height: fit-content;
    }
  }
`;
