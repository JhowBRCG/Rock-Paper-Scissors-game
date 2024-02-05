import styled from "styled-components";
import triangle from "/bg-triangle.svg";
import { devices } from "@styles/BreakPoints";

export const Moves = styled.div`
  margin: 15rem auto auto auto;
  position: relative;
  width: 400px;
  min-height: 400px;
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media ${devices.laptop} {
    width: 330px;
    min-height: 330px;
  }

  @media ${devices.mobileL} {
    width: 220px;
    min-height: 220px;
  }

  > div {
    position: absolute;
    inset: 0;
    transition: transform 100ms ease;

    &:nth-child(1) {
      margin: 0 auto auto 0;
      transform: translate(-60px, -60px);

      &:hover {
        transform: scale(1.1) translate(-60px, -60px);
      }
    }
    &:nth-child(2) {
      margin: 0 0 auto auto;
      transform: translate(60px, -60px);

      &:hover {
        transform: scale(1.1) translate(60px, -60px);
      }
    }
    &:nth-child(3) {
      margin: auto auto -40px auto;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
