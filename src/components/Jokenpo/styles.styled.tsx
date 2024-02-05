import styled from "styled-components";
import { devices } from "@styles/BreakPoints";

export const BoardContainer = styled.div`
  position: relative;
  margin: 15rem auto auto auto;

  @media ${devices.mobileM} {
    margin: 10rem auto auto auto;
  }
`;
