import PhotosRow from "./photos/index.js";
import { WrapAll, WrapImage2, Overlay, WrapBg, Title, Text } from "./style.js";
import Image from "next/image";
import p1 from "../../assets/images/gradient.png";
import overlay from "../../assets/images/overlay.png";
import ProizvodiCLoud from "./proizvodiCloud/index.js";
function ProizvodiSection() {
  return (
    <WrapAll>
      <PhotosRow />
      <WrapImage2>
        <Overlay>
          <Image src={overlay} alt="overlay" layout="fill" objectFit="cover" />
        </Overlay>
        <WrapBg>
          <Image src={p1} alt="bg" layout="fill" objectFit="cover" />
        </WrapBg>
        <Title>PROIZVODI</Title>
        <Text>
          Nudimo širok izbor smrznutih, svježih, dimljenih, sušenih, mariniranih
          i usoljenih morskih proizvoda. Također, u ponudi imamo McCain program,
          smrznuto povrće, tjesteninu, meso i veganske supstituta za meso.
        </Text>
        <ProizvodiCLoud />
      </WrapImage2>
    </WrapAll>
  );
}

export default ProizvodiSection;
