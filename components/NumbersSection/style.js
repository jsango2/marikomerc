import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 887px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* top: -10px; */
  @media only screen and (max-width: 850px) {
    height: auto;
    padding: 80px 0 160px 0;
  }
`;

export const WrapContent = styled.div`
  position: relative;
  z-index: 11;
  width: 1162px;
  height: 396px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* overflow: hidden; */
  @media only screen and (max-width: 1200px) {
    width: 93%;
  }
  @media only screen and (max-width: 850px) {
    height: auto;
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  position: relative;
  z-index: 11;
  width: 425px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    width: 58%;
    padding-right: 20px;
  }
  @media only screen and (max-width: 850px) {
    margin-top: 120px;
    padding-right: 0;
    align-items: center;
    width: 90%;
  }
`;
export const BlueLine = styled.div`
  position: absolute;
  top: 10px;
  left: -30px;
  width: 6px;
  height: 100px;

  z-index: 11;
  background-color: #4299c8;
  @media only screen and (max-width: 850px) {
    top: -50px;
    left: 50%;
    z-index: 11;

    transform: translate(-50%, 0);
    width: 116px;
    height: 5px;
  }
`;
export const Right = styled.div`
  position: relative;
  top: -20px;
  z-index: 11;
  width: 590px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    width: 500px;
  }

  @media only screen and (max-width: 850px) {
    width: 90%;
  }
`;
export const SingleFact = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const Wrap = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  align-items: center;
  height: 77px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const Title = styled.h3`
  position: relative;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */
  margin-bottom: 10px;
  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    text-align: center;
    font-size: 14px;
  }
`;
export const Text = styled.p`
  position: relative;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 850px) {
    font-weight: 700;
    font-size: 21px;
    line-height: 120%;
    font-size: 21px;

    text-align: center;
  }
`;

export const Number = styled.h2`
  position: relative;
  width: 120px;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  /* identical to box height, or 77px */
  margin-right: 33px;
  margin-top: 0px;
  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    width: 70px;

    font-size: 44px;
  }
  @media only screen and (max-width: 850px) {
    width: 45px;

    font-size: 34px;
  }
`;

export const TextFact = styled.p`
  position: relative;
  width: 300px;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    font-size: 14px;
    width: 75%;
  }
  @media only screen and (max-width: 600px) {
  }
`;

export const Line = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  height: 1px;
  background-color: white;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 11;
  width: 100%;
  height: 100%;
  background: #1c2640;
  opacity: 0.7;
  @media only screen and (max-width: 600px) {
  }
`;

export const Elipse = styled.div`
  position: absolute;
  width: 120%;
  height: 800px;
  bottom: -400px;
  z-index: 22;
  clip-path: ellipse(50% 10% at 50% 50%);
  background-color: white;
  @media screen and (max-width: 750px) {
    /* width: 151%;
    top: -95px; */
  }
  @media screen and (max-width: 440px) {
    /* top: -80px; */
  }
`;
