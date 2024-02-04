import styled from "styled-components";
import { devices } from "@styles/BreakPoints";

export const ScoreContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-radius: ${({ theme }) => theme.border_radius.default};
  border: solid 3px ${({ theme }) => theme.colors.header_outline};
  padding: 2rem 3rem;
  gap: 5rem;
`;

export const Logo = styled.div`
  width: 200px;
  @media ${devices.mobileL} {
  }

  img {
    display: block;
    width: 100%;
  }
`;
