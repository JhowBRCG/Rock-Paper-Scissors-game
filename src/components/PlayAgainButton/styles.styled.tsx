import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark_text};
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.3rem;
  padding: 1.7rem 2rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.border_radius.medium};
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
