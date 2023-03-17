import agarthaImage from "../../../assets/images/logistics/agartha.png";
import lisaImage from "../../../assets/images/logistics/lisa.png";
import amigoImage from "../../../assets/images/logistics/amigo.png";
import agarthaMobileImage from "../../../assets/images/logistics/mobile/agarthaMobile.png";
import lisaMobileImage from "../../../assets/images/logistics/mobile/lisaMobile.png";
import amigoMobileImage from "../../../assets/images/logistics/mobile/amigoMobile.png";
import { LogisticsItem } from "../LogisticsItem";

import "./Logistics.css";

export const Logistics = () => {
  const vessels = [
    {
      id: 1,
      title: "M/T 'Agartha'",
      location: "Ceksan Shipyard, Turkey",
      dimensionals: "Lenght (m) : 99.90<br />Width (m) : 15.00<br />Height (m) : 7.40<br />Loaded draught (m) : 5.97",
      year: "2003",
      exnames: "HACI HABIB BAYRAK, CONCORDE",
      description:
        "4692.5 DWT typical oil/chemical tanker with double hull design with side/bottom ballast tanks. Cargo is carried in 10 cargo tanks plus 1 slop tank. The tanks are of Marineline tank coated steel construction, provided with thermal oil heating coils internal to the tank.",
      image: agarthaImage,
      mobileImage: agarthaMobileImage,
    },
    {
      id: 2,
      title: "Lisa Logistik LLC",
      location: "Shipyard J.J. Sietas, Freie und Hansestadt Hamburg, Germany",
      dimensionals: "- Length (m) : 99,99<br />- Width (m) : 8,99<br />- Draught (m) : 2,45<br />- High (m) : 4,53 ",
      year: "1974",
      description:
        "Type  : 1383 DWT motor tanker, equipped for the transport of edible oils. Loading capacity details : 1,326.189 tons at a max. draft of 2.77 m 1,125,053 tons at a draft of 2.60m 865,598 tons at a draft of 2.20m. Number of cargo tanks: 12.",
      image: lisaImage,
      mobileImage: lisaMobileImage,
    },
    {
      id: 3,
      title: "M/T 'Amigo'",
      location: "Dorpsstraat 213A,  2995 XG Heerjansdam",
      dimensionals: "Lenght (m) : 79.9<br />Width (m) : 9.09<br />Height (m) : 4.80<br />Loaded draught (m) : 2.77",
      year: "1964",
      exnames: "MARINE / ALGORAFT 19 / PIZ CALABRIA / CALABRIA",
      description:
        "Type  : 1383 DWT motor tanker, equipped for the transport of edible oils. Loading capacity details : 1,326.189 tons at a max. draft of 2.77 m 1,125,053 tons at a draft of 2.60m 865,598 tons at a draft of 2.20m. Number of cargo tanks: 12.",
      image: amigoImage,
      mobileImage: amigoMobileImage,
    },
  ];
  return (
    <section className="logistics">
      {vessels.map((vessel) => (
        <LogisticsItem vessel={vessel} key={vessel.id} />
      ))}
    </section>
  );
};
