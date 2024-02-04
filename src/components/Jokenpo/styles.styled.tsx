import styled from "styled-components";
import triangle from "@assets/imgs/bg-triangle.svg";
import { devices } from "@styles/BreakPoints";

export const BoardContainer = styled.div`
  position: relative;
  margin: 15rem auto auto auto;

  @media ${devices.mobileM} {
    margin: 10rem auto auto auto;
  }
`;

export const MovesContainer = styled.div`
  position: relative;
  max-width: 400px;
  min-height: 400px;
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  > div {
    position: absolute;
    inset: 0;
    &:nth-child(1) {
      margin: 0 auto auto 0;
      transform: translate(-60px, -60px);
    }
    &:nth-child(2) {
      margin: 0 0 auto auto;
      transform: translate(60px, -60px);
    }
    &:nth-child(3) {
      margin: auto auto -40px auto;
    }
  }
`;
