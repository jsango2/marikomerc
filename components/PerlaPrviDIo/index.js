import {
  LightBlueBg,
  WrapAll,
  WrapContent,
  WrapPhoto1,
  WrapPhoto2,
  WrapPhoto3,
  WrapPhoto4,
  WrapPhotos2,
  RightSide,
  PerlaLogoWrap,
  YellowArrow,
  LogoWrap,
  TextWrap,
  UpTitle,
  SubTitle,
  Title,
  ListWrap,
  ListItem,
  WrapGradovi,
  Grad,
  WrapGalebovi,
  WrapButton,
} from "./style.js";
import p1 from "../../assets/images/perla/p1.png";
import p2 from "../../assets/images/perla/p2.png";
import p3 from "../../assets/images/perla/p3.png";
import p4 from "../../assets/images/perla/p4.png";
import g1 from "../../assets/images/perla/galeb1.png";
import g2 from "../../assets/images/perla/galeb2.png";
import g3 from "../../assets/images/perla/galeb3.png";
import Logo from "../../svg/perlalogo.svg";
import Image from "next/image";
import Photos from "./photos.js";
import GreenMark from "../../svg/greenMark.svg";
import Button from "../buttonBlue/Button.js";
import useWindowSize from "../helper/usewindowsize";

function PerlaPrviDio() {
  const size = useWindowSize();
  return (
    <WrapAll>
      {size.width > 850 && <Photos />}

      <WrapContent>
        <LightBlueBg />
        <WrapPhotos2>
          <WrapPhoto1>
            <Image src={p1} alt="p1" layout="fill" objectFit="cover" />
          </WrapPhoto1>
          <WrapPhoto2>
            <Image src={p2} alt="p1" layout="fill" objectFit="cover" />
          </WrapPhoto2>
          <WrapPhoto3>
            <Image src={p3} alt="p1" layout="fill" objectFit="cover" />
          </WrapPhoto3>
          <WrapPhoto4>
            <Image src={p4} alt="p1" layout="fill" objectFit="cover" />
          </WrapPhoto4>
        </WrapPhotos2>
        <RightSide>
          <PerlaLogoWrap>
            <YellowArrow />
            <LogoWrap>
              <Logo />
            </LogoWrap>
          </PerlaLogoWrap>
          <TextWrap>
            <UpTitle>Prednosti poslovanja s nama za profesionalce</UpTitle>
            <Title>
              Trebate li naše proizvode za vaš restoran, bar ili maloprodaju?
            </Title>
            <SubTitle>Kontaktirajte nas i iskoristite naše prednosti:</SubTitle>
            <ListWrap>
              <ListItem>
                <GreenMark style={{ marginRight: "10px" }} />
                vrhunska kvaliteta proizvoda
              </ListItem>
              <ListItem>
                <GreenMark style={{ marginRight: "10px" }} />
                precizna obrada vaših zahtjeva
              </ListItem>
              <ListItem>
                <GreenMark style={{ marginRight: "10px" }} />
                brza logistika uz koju lako planirate svoje zalihe
              </ListItem>
              <ListItem>
                <GreenMark style={{ marginRight: "10px" }} />
                prilagodba proizvoda i pakrianja po vašim željama
              </ListItem>
              <ListItem>
                <GreenMark style={{ marginRight: "10px" }} />
                PERLA CHEF AKADEMIJA radionice za kuhare
              </ListItem>
            </ListWrap>
            <WrapButton>
              <Button
                bgColor="#4299C8"
                color="#FFFFFF"
                width="226px"
                text="Zatražite sastanak"
                linkTo="/o-nama"
              />
            </WrapButton>
            <WrapGradovi>
              <Grad>Zadar</Grad>
              <Grad>Dubrovnik</Grad>
              <Grad>Rijeka</Grad>
              <Grad>Zagreb</Grad>
              <Grad>Split</Grad>
            </WrapGradovi>
          </TextWrap>
        </RightSide>{" "}
      </WrapContent>
      <WrapGalebovi>
        <Image src={g1} alt="g1" width={307} height={228} objectFit="cover" />
        <Image src={g2} alt="g2" width={184} height={71} objectFit="cover" />
        <Image src={g3} alt="g3" width={172} height={195} objectFit="cover" />
      </WrapGalebovi>
    </WrapAll>
  );
}

export default PerlaPrviDio;
