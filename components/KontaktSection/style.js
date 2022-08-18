import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(234, 234, 234, 0.68) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 1400px;
  height: 100%;

  /* display: flex;
  justify-content: space-between; */
  /* overflow: hidden; */
  padding-bottom: 65px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    padding-bottom: 0;
  }
`;

export const BlueLine = styled.div`
  position: relative;
  z-index: 10;
  height: 3px;
  width: 146px;
  background-color: #4299c8;
  margin: 85px auto 25px auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  margin: 0 auto 90px auto;
  @media only screen and (max-width: 1200px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 26px;
    margin: 0 auto 70px auto;
  }
`;
export const Name = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  height: 90px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapColumns = styled.div`
  position: relative;
  z-index: 10;
  width: 1190px;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px auto 0 auto;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;
export const Column = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    width: 149px;
  }
`;
export const Divider = styled.div`
  position: relative;
  z-index: 10;
  width: 147px;
  height: 2px;
  background-color: #b5d3e3;
  margin: 5px auto;
  @media only screen and (max-width: 600px) {
  }
`;

export const Kontakt = styled.p`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapAccordionContacts = styled.div`
  position: relative;
  z-index: 10;
  padding-left: 10px;
  display: flex;
  @media only screen and (max-width: 600px) {
  }
`;
export const AccordionContact = styled.div`
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
  margin: 5px 0;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
export const AccordionContactBlock = styled.div`
  position: relative;
  z-index: 10;
  margin-right: 30px;
  @media only screen and (max-width: 600px) {
  }
`;
