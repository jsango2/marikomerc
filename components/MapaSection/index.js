import { WrapAll } from "./style.js";
import Mapa from "./mapa.js";
import TextContent from "./textContent.js";
import Photos from "./photos.js";

function MapaSection() {
  return (
    <WrapAll>
      <Mapa />
      <TextContent />
      <Photos />
    </WrapAll>
  );
}

export default MapaSection;
