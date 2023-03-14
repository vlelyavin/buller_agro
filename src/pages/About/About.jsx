import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ImageWithDescription } from "../../components/ImageWithDescription";
import { PageBanner } from "../../components/PageBanner";
import { Title } from "../../components/Title";
import { ContactForm } from "../../components/ContactForm";
import { Infrastructure } from "../../feature/About/Infrastructure";
import { Logistics } from "../../feature/About/Logistics";
import agarthaImage from "../../assets/images/logistics/agartha.png";
import lisaImage from "../../assets/images/logistics/lisa.png";
import amigoImage from "../../assets/images/logistics/amigo.png";
import reniLisImage from "../../assets/images/infrastructure/reniLis.png";
import falconTerminalImage from "../../assets/images/infrastructure/falconTerminal.png";
import danubeAgroTerminalImage from "../../assets/images/infrastructure/danubeAgroTerminal.png";
import portfolioImage from "../../assets/images/imageWithDescription/portfolio.png";
import processPageBanner from "../../assets/images/banners/processPageBanner.png";

export const About = () => {
  return (
    <>
      <Header />
      <PageBanner title="How we do" text="process" background={processPageBanner} />
      <Container>
        <Title value="Portfolio" margin="40px 0" />
        <ImageWithDescription
          title="Portfolio"
          description="Our portfolio of midstream assets creates flexibility for storage and product flow management in support of our trading activities, including inland storage sun the area we operate and proper fleet to carry liquid cargoes, suitable both for vegoils and gasoil."
          image={portfolioImage}
        />
        <Title value="Infrastructure" margin="40px 0 60px" />
        <Infrastructure
          items={[
            {
              id: 1,
              title: "Reni LIS",
              description:
                "Transshipment of oil products, mineral fertilizers, liquefied hydrocarbon gases. Tank for storage of oil products up to 8000m3 The total area of warehouses is more than 10,000 m2, which allow to receive up to 2,000 tons of bulk and up to 10,000 tons of packaged goods. Covered storage for up to 2000 tons of bulk products, with segregation of 3-4 different types of goods. Covered storage of up to 10,000 tons of packaged products (25-50 kg bags, 500-2000 kg big bags, sling bags, etc. containers, general cargo). Open storage for up to 10,000 tons of packaged or bulk products.",
              image: reniLisImage,
            },
            {
              id: 2,
              title: "Falcon terminal.",
              description:
                "Transshipment of grain, vegoils. Only Warehouses, no containers. There is a possibility to accumulate grain up to 1000T in one open area. Oil loading conditions : direct loading method into trucks. Loading speed:<br />- grain 1500-2000t/day for bulk barge and 2000-3000t/day per ship<br />- vegoil 80t/hour",
              image: falconTerminalImage,
            },
            {
              id: 3,
              title: "Reni LIS",
              description:
                "Transshipment of oil products, mineral fertilizers, liquefied hydrocarbon gases. Tank for storage of oil products up to 8000m3 The total area of warehouses is more than 10,000 m2, which allow to receive up to 2,000 tons of bulk and up to 10,000 tons of packaged goods. Covered storage for up to 2000 tons of bulk products, with segregation of 3-4 different types of goods. Covered storage of up to 10,000 tons of packaged products (25-50 kg bags, 500-2000 kg big bags, sling bags, etc. containers, general cargo). Open storage for up to 10,000 tons of packaged or bulk products.",
              image: danubeAgroTerminalImage,
            },
          ]}
        />
        <Title value="Logistics" margin="90px 0 40px" />
        <Logistics
          vessels={[
            {
              id: 1,
              title: "M/T 'Agartha'",
              location: "Ceksan Shipyard, Turkey",
              dimensionals:
                "Lenght (m) : 99.90<br />Width (m) : 15.00<br />Height (m) : 7.40<br />Loaded draught (m) : 5.97",
              year: "2003",
              exnames: "HACI HABIB BAYRAK, CONCORDE",
              description:
                "4692.5 DWT typical oil/chemical tanker with double hull design with side/bottom ballast tanks. Cargo is carried in 10 cargo tanks plus 1 slop tank. The tanks are of Marineline tank coated steel construction, provided with thermal oil heating coils internal to the tank.",
              image: agarthaImage,
            },
            {
              id: 2,
              title: "Lisa Logistik LLC",
              location: "Shipyard J.J. Sietas, Freie und Hansestadt Hamburg, Germany",
              dimensionals:
                "- Length (m) : 99,99<br />- Width (m) : 8,99<br />- Draught (m) : 2,45<br />- High (m) : 4,53 ",
              year: "1974",
              description:
                "Type  : 1383 DWT motor tanker, equipped for the transport of edible oils. Loading capacity details : 1,326.189 tons at a max. draft of 2.77 m 1,125,053 tons at a draft of 2.60m 865,598 tons at a draft of 2.20m. Number of cargo tanks: 12.",
              image: lisaImage,
            },
            {
              id: 3,
              title: "M/T 'Amigo'",
              location: "Dorpsstraat 213A,  2995 XG Heerjansdam",
              dimensionals:
                "Lenght (m) : 79.9<br />Width (m) : 9.09<br />Height (m) : 4.80<br />Loaded draught (m) : 2.77",
              year: "1964",
              exnames: "MARINE / ALGORAFT 19 / PIZ CALABRIA / CALABRIA",
              description:
                "Type  : 1383 DWT motor tanker, equipped for the transport of edible oils. Loading capacity details : 1,326.189 tons at a max. draft of 2.77 m 1,125,053 tons at a draft of 2.60m 865,598 tons at a draft of 2.20m. Number of cargo tanks: 12.",
              image: amigoImage,
            },
          ]}
        />
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
