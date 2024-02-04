import styled from "styled-components";
import { devices } from "@styles/BreakPoints";

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  width: 150px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border_radius.medium};

  @media ${devices.mobileL} {
    padding: 1rem 0;
  }
`;

export const ScoreText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: ${({ theme }) => theme.colors.score_text};

  @media ${devices.mobileL} {
    font-size: 1.6rem;
  }
`;

export const ScoreNumber = styled.p`
  font-weight: 700;
  font-size: 7rem;
  color: ${({ theme }) => theme.colors.dark_text};

  @media ${devices.mobileL} {
    font-size: 6rem;
  }
`;
