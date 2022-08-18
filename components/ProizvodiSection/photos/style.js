import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 221px;
  background: grey;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const WrapImage = styled.div`
  position: relative;
  z-index: 10;
  width: 276px;
  height: 100%;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
