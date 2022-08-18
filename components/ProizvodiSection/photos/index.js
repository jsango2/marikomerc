import { WrapAll, WrapImage } from "./style.js";
import Image from "next/image";
import p1 from "../../../assets/images/p1.png";
import p2 from "../../../assets/images/p2.png";
import p3 from "../../../assets/images/p3.png";
import p4 from "../../../assets/images/p4.png";
import p5 from "../../../assets/images/p5.png";
import p6 from "../../../assets/images/p6.png";
import p7 from "../../../assets/images/p7.png";
import { ContentWrap, HeroTitle, HeroWrap } from "./style.js";
import useWindowSize from "../../helper/usewindowsize";

const photos = [p1, p2, p3, p4, p5, p6, p7];

function PhotosRow() {
  const size = useWindowSize();
  return (
    <WrapAll>
      {(size.width < 1000 ? photos.slice(0, 5) : photos).map((photo, index) => (
        <WrapImage key={index}>
          <Image src={photo} alt="index" layout="fill" objectFit="cover" />
        </WrapImage>
      ))}
    </WrapAll>
  );
}

export default PhotosRow;
