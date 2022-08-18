import {
  WrapAll,
  Container,
  Title,
  Text,
  Datum,
  ViseInfo,
  BlueLine,
} from "./style.js";
import ArrowRight from "../../svg/arrowRight.svg";

function NewsCard({ datum, naslov, text }) {
  return (
    <WrapAll>
      <BlueLine />
      <Datum>{datum}</Datum>
      <Title>{naslov}</Title>
      <Text>{text}</Text>
      <ViseInfo>
        Vise informacija <ArrowRight />
      </ViseInfo>
    </WrapAll>
  );
}

export default NewsCard;
