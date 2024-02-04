import styled from "styled-components";
import { devices } from "@styles/BreakPoints";

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  letter-spacing: 0.2rem;
  border-radius: ${({ theme }) => theme.border_radius.medium};
  padding: 1.2rem 0;
  text-align: center;
  width: 150px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-family: ${({ theme }) => theme.fonts.primary_font};
  transition: box-shadow 100ms ease;

  &:hover {
    box-shadow: 0px 0px 24px -3px rgba(255, 255, 255, 0.46);
  }

  @media ${devices.laptop} {
    position: static;
    margin: 9rem auto auto auto;
  }
`;
