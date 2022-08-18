import Logos from "../ProLogMapSection/logos.js";
import {
  WrapAll,
  Container,
  Name,
  MainLinks,
  SingleLink,
  SingleLink2,
  SubLinks,
  Column,
  SubName,
  Social,
  Copy,
  CopyLink,
} from "./style.js";
import MarikomercLogo from "../../svg/MarikomercGrupaWhite.svg";
import Instagram from "../../svg/Instagram.svg";
import Facebook from "../../svg/Facebook.svg";
import Linkedin from "../../svg/Linkedin.svg";
import Location from "../../svg/Location.svg";
import Email from "../../svg/Email.svg";
import useWindowSize from "../helper/usewindowsize";

function FooterSection() {
  const size = useWindowSize();
  return (
    <WrapAll>
      <Container>
        <MarikomercLogo />
        <Name>MARIKOMERC GRUPA</Name>
        <MainLinks>
          <SingleLink>O nama</SingleLink>
          <SingleLink>Proizvodi</SingleLink>
          <SingleLink>Novosti</SingleLink>
          <SingleLink>Kvaliteta</SingleLink>
          <SingleLink>Karijere</SingleLink>
          <SingleLink>Imate restoran?</SingleLink>
          <SingleLink>Kontakt</SingleLink>
        </MainLinks>
        <SubLinks>
          {size.width > 770 ? (
            <>
              <Column>
                <SubName>LOKACIJE</SubName>
                <SingleLink2>Zadar</SingleLink2>
                <SingleLink2>Dubrovnik</SingleLink2>
                <SingleLink2>Rijeka</SingleLink2>
                <SingleLink2>Split</SingleLink2>
                <SingleLink2>Zagreb</SingleLink2>
              </Column>
              <Column>
                <SubName>PROIZVODI</SubName>
                <SingleLink2>Glavonošci</SingleLink2>
                <SingleLink2>Perla proizvodi</SingleLink2>
                <SingleLink2>Rakovi</SingleLink2>
                <SingleLink2>Fileti i odresci</SingleLink2>
                <SingleLink2>Školjkaši</SingleLink2>
                <SingleLink2>Ribe</SingleLink2>
                <SingleLink2>Ostali proizvodi</SingleLink2>
              </Column>
            </>
          ) : (
            <Column>
              <SubName>MENI</SubName>
              <SingleLink2>O nama</SingleLink2>
              <SingleLink2>Proizvodi</SingleLink2>
              <SingleLink2>Novosti</SingleLink2>
              <SingleLink2>Kvalteta</SingleLink2>
              <SingleLink2>Karijere</SingleLink2>
              <SingleLink2>Imate restoran?</SingleLink2>
              <SingleLink2>Kontakt</SingleLink2>
            </Column>
          )}

          <Column>
            <SubName>ČLANICE GRUPE</SubName>
            <SingleLink2>Marikomerc</SingleLink2>
            <SingleLink2>PERLA</SingleLink2>
            <SingleLink2>PERLA HORECA</SingleLink2>
            <SingleLink2>DiMaris Ribarnice</SingleLink2>
            <SingleLink2>DeliMaris Fish&Chips</SingleLink2>
            <SingleLink2>MLS Logistika</SingleLink2>
          </Column>
          {size.width > 770 && (
            <Column>
              <SubName>KONTAKTIRAJTE NAS</SubName>
              <Social>
                <Instagram />
                <Facebook />
                <Linkedin />
                <Location />
                <Email />
              </Social>
            </Column>
          )}
        </SubLinks>
        {size.width < 770 && (
          <Column
            style={{
              width: "70%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Social>
              <Instagram />
              <Facebook />
              <Linkedin />
              <Location />
              <Email />
            </Social>
          </Column>
        )}
        <Copy>
          <CopyLink>MARIKOMERC</CopyLink>
          <CopyLink>Uvjeti korištenja</CopyLink>
          <CopyLink>Izjava o privatnosti</CopyLink>
          <CopyLink>
            Web design <strong>SUTRA</strong>{" "}
          </CopyLink>
        </Copy>
      </Container>
    </WrapAll>
  );
}

export default FooterSection;
