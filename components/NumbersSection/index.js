import Image from "next/image";
import {
  WrapAll,
  WrapContent,
  Left,
  Right,
  Title,
  Text,
  SingleFact,
  Number,
  TextFact,
  Line,
  Wrap,
  Overlay,
  BlueLine,
  Elipse,
} from "./style.js";
import bg from "../../assets/images/bgNumbers.png";

function NumbersSection() {
  return (
    <WrapAll>
      <Image src={bg} alt="overlay" layout="fill" objectFit="cover" />
      <Overlay />
      <WrapContent>
        <Left>
          <BlueLine />
          <Title>POGON ZA PRERADU I SKLADIŠNI PROSTORI</Title>
          <Text>
            2021. godine smo dovršili projekt izgradnje novog pogona za preradu
            i skladištenje koji je temelj našeg budućeg rasta i osiguranje
            visokog standarda prerade i skladištenja.
          </Text>
        </Left>
        <Right>
          <SingleFact>
            <Wrap>
              <Number>874</Number>
              <TextFact>Ukupni kapacitet u n° paleta - 25°C</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>467</Number>
              <TextFact>Ukupni kapacitet u n° paleta + 4°C</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>122</Number>
              <TextFact>Kapacitet prijema kamiona u jednom danu</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>335</Number>
              <TextFact>
                Volumen prerađenih proizvoda godišnje u tonama
              </TextFact>
            </Wrap>
          </SingleFact>
        </Right>
      </WrapContent>
      <Elipse />
    </WrapAll>
  );
}

export default NumbersSection;
