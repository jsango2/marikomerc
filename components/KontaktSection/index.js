import Logos from "../ProLogMapSection/logos.js";
import {
  WrapAll,
  Container,
  BlueLine,
  Title,
  WrapColumns,
  Column,
  Name,
  Kontakt,
  Divider,
  WrapAccordionContacts,
  AccordionContact,
  AccordionContactBlock,
} from "./style.js";
import useWindowSize from "../helper/usewindowsize";
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function KontaktSection() {
  const size = useWindowSize();
  return (
    <WrapAll>
      <Container>
        <BlueLine />
        <Title>KONTAKTIRATE NAS S POVJERENJEM</Title>
        {size.width > 800 ? (
          <>
            <Logos />
            <WrapColumns>
              <Column>
                <Name>MARIKOMERC</Name>
                <Kontakt>E-mail (info)</Kontakt>
                <Kontakt>E-mail (prodaja)</Kontakt>
                <Kontakt>E-mail (financije)</Kontakt>
                <Kontakt>E-mail (nabava)</Kontakt>
                <Kontakt>E-mail (karijere)</Kontakt>
                <Kontakt>Google maps</Kontakt>

                <Divider />
                <Kontakt>Instagram</Kontakt>
                <Kontakt>Facebook</Kontakt>
                <Kontakt>Linkedin</Kontakt>
              </Column>
              <Column>
                <Name>DI MARIS</Name>
                <Kontakt>Telefon (Uprava)</Kontakt>
                <Kontakt>Kontakti poslovnica</Kontakt>
                <Kontakt>E-mail</Kontakt>
                <Kontakt>Google maps </Kontakt>
                <Divider />
                <Kontakt>Instagram</Kontakt>
                <Kontakt>Facebook</Kontakt>
                <Kontakt>Linkedin</Kontakt>
              </Column>
              <Column>
                <Name>DELI MARIS</Name>
                <Kontakt>Telefon (Uprava)</Kontakt>
                <Kontakt>Kontakti poslovnica</Kontakt>
                <Kontakt>E-mail</Kontakt>
                <Kontakt>Google maps </Kontakt>
                <Divider />
                <Kontakt>Instagram</Kontakt>
                <Kontakt>Facebook</Kontakt>
                <Kontakt>Linkedin</Kontakt>
              </Column>
              <Column>
                <Name>MLS LOGISTIKA</Name>
                <Kontakt>Telefon (Uprava)</Kontakt>
                <Kontakt>Kontakti distributivnih centara</Kontakt>
                <Kontakt>E-mail</Kontakt>
                <Kontakt>Google maps </Kontakt>
                <Divider />
                <Kontakt>Instagram</Kontakt>
                <Kontakt>Facebook</Kontakt>
                <Kontakt>Linkedin</Kontakt>
              </Column>
              <Column>
                <Name>PERLA HORECA I RETAIL</Name>
                <Kontakt>Telefon (potrošači)</Kontakt>
                <Kontakt>E-mail (prodaja)</Kontakt>
                <Kontakt>E-mail (potrošači)</Kontakt>
                <Divider />
                <Kontakt>Instagram</Kontakt>
                <Kontakt>Facebook</Kontakt>
              </Column>
            </WrapColumns>
          </>
        ) : (
          <UncontrolledAccordion defaultOpen="1">
            <AccordionItem style={{ width: "100vw" }}>
              <AccordionHeader targetId="1">MARIKOMERC</AccordionHeader>
              <AccordionBody accordionId="1">
                <WrapAccordionContacts>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                </WrapAccordionContacts>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                PERLA HORECA I RETAIL{" "}
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <WrapAccordionContacts>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                </WrapAccordionContacts>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">DI MARIS</AccordionHeader>
              <AccordionBody accordionId="3">
                <WrapAccordionContacts>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                </WrapAccordionContacts>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">DELI MARIS</AccordionHeader>
              <AccordionBody accordionId="4">
                <WrapAccordionContacts>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                </WrapAccordionContacts>
              </AccordionBody>
            </AccordionItem>{" "}
            <AccordionItem>
              <AccordionHeader targetId="5">MLS LOGISTIKA</AccordionHeader>
              <AccordionBody accordionId="5">
                <WrapAccordionContacts>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                  <AccordionContactBlock>
                    <AccordionContact>Telefon (Uprava)</AccordionContact>
                    <AccordionContact>Kontakt poslovnica</AccordionContact>
                    <AccordionContact>E-mail</AccordionContact>
                    <AccordionContact>Google maps</AccordionContact>
                  </AccordionContactBlock>
                </WrapAccordionContacts>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        )}
      </Container>
    </WrapAll>
  );
}

export default KontaktSection;
