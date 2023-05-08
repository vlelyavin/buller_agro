import reniLisImage from "../../../assets/images/infrastructure/reniLis.png";
import falconTerminalImage from "../../../assets/images/infrastructure/falconTerminal.png";
import danubeAgroTerminalImage from "../../../assets/images/infrastructure/danubeAgroTerminal.png";
import reniLisMobileImage from "../../../assets/images/infrastructure/mobile/reniLisMobile.png";
import falconTerminalMobileImage from "../../../assets/images/infrastructure/mobile/falconTerminalMobile.png";
import danubeAgroTerminalMobileImage from "../../../assets/images/infrastructure/mobile/danubeAgroTerminalMobile.png";
import { InfrastructureItem } from "../InfrastructureItem";
import "./Infrastructure.css";

export const Infrastructure = () => {
  const infrastructureItems = [
    {
      id: 1,
      title: "Reni LIS",
      description:
        "<strong>Transshipment of oil products, mineral fertilizers, liquefied hydrocarbon gases.</strong> Tank for storage of oil products up to 8000m3 The total area of warehouses is more than 10,000 m2, which allow to receive up to 2,000 tons of bulk and up to 10,000 tons of packaged goods. Covered storage for up to 2000 tons of bulk products, with segregation of 3-4 different types of goods. Covered storage of up to 10,000 tons of packaged products (25-50 kg bags, 500-2000 kg big bags, sling bags, etc. containers, general cargo). Open storage for up to 10,000 tons of packaged or bulk products.",
      image: reniLisImage,
      mobileImage: reniLisMobileImage,
    },
    {
      id: 2,
      title: "Falcon terminal.",
      description:
        "<strong>Transshipment of grain, vegoils.</strong> Only Warehouses, no containers. There is a possibility to accumulate grain up to 1000T in one open area. Oil loading conditions : direct loading method into trucks. <br /><strong>Loading speed:</strong><br />- grain 1500-2000t/day for bulk barge and 2000-3000t/day per ship<br />- vegoil 80t/hour",
      image: falconTerminalImage,
      mobileImage: falconTerminalMobileImage,
    },
    {
      id: 3,
      title: "Reni LIS",
      description:
        "<strong>Transshipment of oil products, mineral fertilizers, liquefied hydrocarbon gases.</strong> Tank for storage of oil products up to 8000m3 The total area of warehouses is more than 10,000 m2, which allow to receive up to 2,000 tons of bulk and up to 10,000 tons of packaged goods. Covered storage for up to 2000 tons of bulk products, with segregation of 3-4 different types of goods. Covered storage of up to 10,000 tons of packaged products (25-50 kg bags, 500-2000 kg big bags, sling bags, etc. containers, general cargo). Open storage for up to 10,000 tons of packaged or bulk products.",
      image: danubeAgroTerminalImage,
      mobileImage: danubeAgroTerminalMobileImage,
    },
  ];
  return (
    <section className="infrastructure">
      {infrastructureItems.map((item) => (
        <InfrastructureItem item={item} key={item.id} />
      ))}
    </section>
  );
};
