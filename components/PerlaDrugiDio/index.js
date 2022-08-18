import {
  WrapAll,
  RedLine,
  WrapLogo,
  WrapLogoPerla,
  Title,
  Text,
  Proizvodi,
  Proizvod,
  Overlay,
  WrapProizvod,
  WrapProizvodImage,
  ProizvodName,
  ProizvodWeight,
  Button,
  BlueLine,
  WrapLinks,
  LinkTo,
  LinkTo2,
  Meals,
  Meal,
  Up,
  Down,
  WrapLogos,
  WrapTime,
} from "./style.js";
import p1 from "../../assets/images/perla/perla1.png";
import l1 from "../../assets/images/perla/logo1.png";
import l2 from "../../assets/images/perla/logo2.png";
import l3 from "../../assets/images/perla/logo3.png";
import l4 from "../../assets/images/perla/logo4.png";
import l5 from "../../assets/images/perla/logo5.png";
import l6 from "../../assets/images/perla/logo6.png";
import meal4 from "../../assets/images/perla/meal4.png";
import { IoMdTime } from "react-icons/io";

import Logo from "../../svg/PerlaBiserMora.svg";
import Image from "next/image";
import useWindowSize from "../helper/usewindowsize";

const proizvod = [
  "Škampi",
  "Tuna",
  "Temeljac",
  "Bakalar",
  "Sipa",
  "Lignja",
  "Plodovi mora",
];
const jelo = [
  "Brzi ručak",
  "Zdrava večera",
  "Za sportaše",
  "Rižoto",
  "Tjestenina",
  "Grill tava",
  "Pećnica",
];
const meals = [
  {
    photo: meal4,
    text: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
  },
  {
    photo: meal4,
    text: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
  },
  {
    photo: meal4,
    text: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
  },
  {
    photo: meal4,
    text: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
  },
];

function PerlaDrugiDio() {
  const size = useWindowSize();

  return (
    <WrapAll>
      <RedLine>
        <WrapLogoPerla>
          <Image
            src="/PerlaBiserMora.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
            // objectFit="cover"
          />
        </WrapLogoPerla>
      </RedLine>
      <Title>S NAMA, SVATKO MOŽE PRIPREMITI DOBRO JELO S OKUSOM MORA</Title>
      <Text>
        Vrhunski plodovi mora su našu strast i obaveza prema potrošačima. To je
        ono što znamo raditi i radimo godinama. Izuzetno smo ponosni na
        proizvode koje razvijamo za profesionalni segment, stoga nam je užitak
        to podijeliti sa svima. Zato smo kreirali Perla liniju proizvoda, s
        kojom je priprema maštovitih jela jednostavna i zabavna.
      </Text>
      <Proizvodi>
        <WrapProizvod>
          <Proizvod>
            <Overlay />
            <WrapProizvodImage>
              <Image
                src={p1}
                // width={157}
                // height={244}
                // layout="fill"
                alt="p1"
                objectFit="cover"
              />
            </WrapProizvodImage>
          </Proizvod>
          <ProizvodName>Hobotnica (Argentina)</ProizvodName>
          <ProizvodWeight>500G</ProizvodWeight>
        </WrapProizvod>
        <WrapProizvod>
          <Proizvod>
            <Overlay />
            <WrapProizvodImage>
              <Image
                src={p1}
                // width={157}
                // height={244}
                alt="p1"
                objectFit="cover"
              />
            </WrapProizvodImage>
          </Proizvod>
          <ProizvodName>Hobotnica (Argentina)</ProizvodName>
          <ProizvodWeight>500G</ProizvodWeight>
        </WrapProizvod>{" "}
        <WrapProizvod>
          <Proizvod>
            <Overlay />
            <WrapProizvodImage>
              <Image
                src={p1}
                // width={157}
                // height={244}
                alt="p1"
                objectFit="cover"
              />
            </WrapProizvodImage>
          </Proizvod>
          <ProizvodName>Hobotnica (Argentina)</ProizvodName>
          <ProizvodWeight>500G</ProizvodWeight>
        </WrapProizvod>{" "}
        <WrapProizvod>
          <Proizvod>
            <Overlay />
            <WrapProizvodImage>
              <Image
                src={p1}
                // width={157}
                // height={244}
                alt="p1"
                objectFit="cover"
              />
            </WrapProizvodImage>
          </Proizvod>
          <ProizvodName>Hobotnica (Argentina)</ProizvodName>
          <ProizvodWeight>500G</ProizvodWeight>
        </WrapProizvod>
      </Proizvodi>
      <Button>SVI PROIZVODI</Button>
      <BlueLine />
      <Title>Naši recepti su jednostavni i jasni, provjerite zašto</Title>
      <div style={{ height: "50px" }} />
      <WrapLinks>
        {proizvod.map((proizvod) => (
          <LinkTo>{proizvod}</LinkTo>
        ))}
      </WrapLinks>
      <div style={{ height: "10px" }} />

      <WrapLinks>
        {" "}
        {jelo.map((jelo) => (
          <LinkTo2>{jelo}</LinkTo2>
        ))}
      </WrapLinks>
      <Meals>
        {((size.width < 1500 && size.width > 850) || size.width < 395
          ? meals.slice(0, 3)
          : meals
        ).map((meal, index) => (
          <Meal key={index}>
            <Up>
              <WrapTime>
                <IoMdTime /> 45min
              </WrapTime>
              <Image
                src={meal.photo}
                layout="fill"
                alt="p1"
                objectFit="cover"
              />
            </Up>
            <Down>{meal.text}</Down>
          </Meal>
        ))}
      </Meals>
      <Button>PRONAĐI RECEPT</Button>
      <BlueLine />
      <Title>GDJE KUPITI?</Title>
      <Text>
        Perla proizvode trenutno možete kupiti u trgovinama Kauflanda, Tommya,
        Plodina, Dijela, Jadranke, Peme, kao i u ribarnicama Di Maris, Fisheria
        (Zagreb) i ribarnica Brač (Split).
      </Text>
      <WrapLogos>
        <WrapLogo>
          <Image
            src={l1}
            width={size.width < 1300 ? 58 : 100}
            height={size.width < 1300 ? 58 : 100}
            alt="p1"
            objectFit="cover"
          />{" "}
        </WrapLogo>
        <WrapLogo>
          <Image
            src={l2}
            width={size.width < 1300 ? 58 : 100}
            height={size.width < 1300 ? 58 : 100}
            alt="p1"
            objectFit="cover"
          />{" "}
        </WrapLogo>
        <WrapLogo>
          <Image
            src={l3}
            width={size.width < 1300 ? 117 : 201}
            height={size.width < 1300 ? 58 : 100}
            alt="p1"
            objectFit="cover"
          />{" "}
        </WrapLogo>
        <WrapLogo>
          <Image
            src={l4}
            width={size.width < 1300 ? 222 : 382}
            height={size.width < 1300 ? 58 : 100}
            alt="p1"
            objectFit="cover"
          />
        </WrapLogo>
        <WrapLogo>
          <Image
            src={l5}
            width={size.width < 1300 ? 58 : 100}
            height={size.width < 1300 ? 58 : 100}
            alt="p1"
            objectFit="cover"
          />
        </WrapLogo>
        <WrapLogo>
          <Image
            src={l6}
            width={size.width < 1300 ? 122 : 210}
            height={size.width < 1300 ? 58 : 100}
            alt="p1"
            objectFit="cover"
          />
        </WrapLogo>
      </WrapLogos>
    </WrapAll>
  );
}

export default PerlaDrugiDio;
