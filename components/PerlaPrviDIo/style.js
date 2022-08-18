import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  background: white;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  /* overflow: hidden; */
  padding-bottom: 70px;
  @media only screen and (max-width: 1500px) {
  }
`;
export const WrapPhotos = styled.div`
  position: relative;
  top: -100px;
  z-index: 10;
  width: 1317px;
  height: 533px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;
export const Photo1 = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: 100%;
  background-color: gray;
  top: -20px;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: calc(92% / 5);
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapPhoto1 = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: 541px;
  background-color: red;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */

  @media only screen and (max-width: 1500px) {
    width: calc(92% / 3);
  }
  @media only screen and (max-width: 850px) {
    height: 70%;
  }
`;
export const WrapPhoto2 = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: 541px;
  background-color: green;
  top: 70px;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */

  @media only screen and (max-width: 1500px) {
    width: calc(92% / 3);
  }
  @media only screen and (max-width: 850px) {
    height: 82vw;
  }
`;
export const WrapPhoto3 = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: 717px;
  top: 60px;
  /* color: black;
display: flex;
justify-content: center;
align-items: center; */
  /* overflow: hidden; */

  @media only screen and (max-width: 1500px) {
    width: calc(92% / 3);
  }
  @media only screen and (max-width: 850px) {
    height: 82vw;
  }
`;
export const WrapPhoto4 = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: 239px;
  top: -140px;
  /* color: black;
display: flex;
justify-content: center;
align-items: center; */
  /* overflow: hidden; */

  @media only screen and (max-width: 1500px) {
    width: calc(92% / 3);
  }
  @media only screen and (max-width: 850px) {
    top: unset;
    height: 25%;
    /* margin-top: 150px; */
  }
  @media only screen and (max-width: 520px) {
    /* margin-top: 120px; */
  }
  @media only screen and (max-width: 420px) {
    /* margin-top: 130px; */
  }
`;
export const Photo2 = styled.div`
  position: relative;
  z-index: 10;
  width: 293px;
  height: 384px;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: calc(92% / 4);
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const Photo3 = styled.div`
  position: relative;
  z-index: 10;
  width: 390px;
  height: 512px;
  top: 100px;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: calc(92% / 3.2);
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const Photo4 = styled.div`
  position: relative;
  z-index: 10;
  width: 315px;
  height: 384px;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: calc(92% / 3.8);
  }
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  width: 1478px;
  height: auto;
  margin: 150px auto 0 auto;
  padding-top: 69px;
  padding-bottom: 40px;
  padding-left: 105px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1500px) {
    padding-left: 0;

    width: 100%;
    overflow: hidden;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    margin: 0px auto 0 auto;
    flex-direction: column;
    padding-top: 0;
    overflow: unset;
  }
`;
export const TextWrap = styled.div`
  position: relative;
  z-index: 10;
  width: 559px;
  height: 314px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1300px) {
    width: 57%;
  }
  @media only screen and (max-width: 850px) {
    height: auto;
    width: 90%;
    margin: 0 auto;
    align-items: center;
  }
`;
export const UpTitle = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  /* MK Plava */

  color: #1c2640;
  @media only screen and (max-width: 1300px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  /* MK Plava */

  color: #1c2640;
  width: 600px;
  @media only screen and (max-width: 1300px) {
    font-size: 30px;
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;
export const SubTitle = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* MK Plava */

  color: #1c2640;
  margin-bottom: 10px;
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;
export const WrapGradovi = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;

  margin-top: 46px;
  width: 350px;
  height: auto;
  @media only screen and (max-width: 1300px) {
    margin-top: 29px;
    width: 80%;
  }
  @media only screen and (max-width: 850px) {
    margin-top: 29px auto 0 auto;
    width: 80%;
    justify-content: center;
  }
`;
export const WrapGalebovi = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1015px;
  height: 224px;
  margin: 83px auto 0 auto;
  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
`;
export const WrapButton = styled.div`
  @media only screen and (max-width: 850px) {
    margin: 0 auto;
  }
`;
export const Grad = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1c2640;
  border-radius: 6px;
  background-color: white;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 142.5%;
  /* or 20px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  padding: 4px 25px;
  margin: 7px 6px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
export const ListWrap = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  width: 90%;
  @media only screen and (max-width: 600px) {
  }
`;
export const ListItem = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* MK Plava */

  color: #1c2640;
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapPhotos2 = styled.div`
  position: relative;
  z-index: 10;
  min-width: 652px;
  height: 806px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1500px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    top: -120px;
    height: 110vw;
    min-width: unset;
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 650px) {
  }
  @media only screen and (max-width: 550px) {
    min-height: unset;
  }
`;
export const PerlaLogoWrap = styled.div`
  position: relative;
  z-index: 10;
  width: 770px;
  height: 120px;

  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;
export const YellowArrow = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  background-color: #e9b73f;
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 1% 51%, 0% 0%);
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    clip-path: none;
  }
`;
export const LogoWrap = styled.div`
  position: absolute;
  top: -55px;
  left: 30px;
  z-index: 11;
  width: 300px;
  height: 200px;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
  }
`;

export const RightSide = styled.div`
  position: relative;
  z-index: 10;
  width: 750px;
  height: 672px;
  margin-left: 60px;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1300px) {
    width: 54%;
  }
  @media only screen and (max-width: 850px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const LightBlueBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 685px;
  height: 481px;
  background-color: #f5faff;

  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
