import React from "react";
import Slider from "react-slick";
import {
  Title,
  SubTitle,
  WrapText,
  WrapSliderContent,
  WrapImage,
  Broj,
  Linija,
} from "../style.js";
import Image from "next/image";

import Livo from "../../../svg/prevArrow.svg";
import Desno from "../../../svg/nextArrow.svg";
import LivoMob from "../../../svg/LivoMob.svg";
import DesnoMob from "../../../svg/DesnoMob.svg";
import Button from "../../buttonBlue/Button.js";
import useWindowSize from "../../helper/usewindowsize";

const data = [
  {
    naslov:
      "NAŠA JE MISIJA PODIJELITI ZDRAVU, PRAVU I UKUSNU KULTURU HRANE SA SVIMA",
    podNaslov:
      "Iza nas je 30 godina rada s našim partnerima u ugostiteljstvu, a pred nama su ciljevi koji će nas učiniti bitnim prerađivačem i distributerom smrznute hrane i pouzdanim partnerom u logistici.",
    foto: "https://marence53.files.wordpress.com/2019/04/kosarka-lopta01.jpg",
  },
  {
    naslov: "NAJMODERNIJI ČLAN MLS FLOTE VOZILA - SCANIA 23 SE ",
    podNaslov:
      "Iza nas je 30 godina rada s našim partnerima u ugostiteljstvu, a pred nama su ciljevi koji će nas učiniti bitnim prerađivačem i distributerom smrznute hrane i pouzdanim partnerom u logistici.",
    foto: "https://basketball.hr/storage/app/files/623/9e1/c71/thumb_41789_1095x560_0_0_crop.jpg",
  },
];
const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Desno />
  </div>
);
const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Livo />
  </div>
);
const NextArrowMob = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <DesnoMob />
  </div>
);
const PrevArrowMob = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <LivoMob />
  </div>
);
function Content() {
  const size = useWindowSize();

  const settings = {
    // arrows: false,
    dots: false,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 6000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: size.width > 850 ? <NextArrow /> : <NextArrowMob />,
    prevArrow: size.width > 850 ? <PrevArrow /> : <PrevArrowMob />,

    // responsive: [
    //   {
    //     breakpoint: 450,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: false,
    //       speed: 500,
    //     },
    //   },
    // ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((slide, index) => {
          return (
            <WrapSliderContent key={slide.naslov}>
              <WrapText>
                <Broj>
                  <Linija></Linija> 0{index + 1}
                </Broj>
                <Title>{slide.naslov}</Title>
                <SubTitle>{slide.podNaslov}</SubTitle>
                <Button
                  bgColor="#4299C8"
                  color="#FFFFFF"
                  width="178px"
                  text="Kontaktirajte nas"
                  linkTo="/o-nama"
                />
              </WrapText>
              <WrapImage>
                <Image
                  src={slide.foto}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                />
              </WrapImage>
            </WrapSliderContent>
          );
        })}{" "}
      </Slider>
    </div>
  );
}

export default Content;
