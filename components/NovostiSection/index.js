import NewsCard from "../newsCard/index.js";
import {
  WrapAll,
  Container,
  WrapTitleSubTitle,
  Title,
  SubTitle,
  WrapCards,
} from "./style.js";

const news = [
  {
    datum: "1.9.2022",
    naslov: "NASLOV NOVOSTI PRIMJER UVOĐENJA CERTIFIKATA",
    text: "U kategorijama svježih, smrznutih i rashlađenih proizvoda...",
  },
  {
    datum: "3.9.2022",
    naslov: "NASLOV NOVOSTI PRIMJER UVOĐENJA CERTIFIKATA2",
    text: "U kategorijama svježih, smrznutih i rashlađenih proizvoda...",
  },
  {
    datum: "6.9.2022",
    naslov: "NASLOV NOVOSTI PRIMJER UVOĐENJA CERTIFIKATA3",
    text: "U kategorijama svježih, smrznutih i rashlađenih proizvoda...",
  },
];

function NovostiSection({ background }) {
  return (
    <WrapAll background={background}>
      <Container>
        <WrapTitleSubTitle>
          <Title>Novosti</Title>
          <SubTitle>/ Arhiva novosti</SubTitle>
        </WrapTitleSubTitle>
        <WrapCards>
          {news.map((card) => (
            <NewsCard
              key={card.naslov}
              datum={card.datum}
              naslov={card.naslov}
              text={card.text}
            />
          ))}
        </WrapCards>
      </Container>
    </WrapAll>
  );
}

export default NovostiSection;
