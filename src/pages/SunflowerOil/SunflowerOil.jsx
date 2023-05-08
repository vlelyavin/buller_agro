import { PageBanner } from "../../components/PageBanner";
import { Header } from "../../components/Header";
import { Description } from "../../components/Description";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { CategoriesSection } from "../../components/CategoriesSection";
import { DualColumnSection } from "../../components/DualColumnSection";
import { CenteredContainer } from "../../components/CenteredContainer";
import { ContactForm } from "../../components/ContactForm";
import refinedSunflowerOilImage from "../../assets/images/categories/refinedSunflowerOil.png";
import crudeSunflowerOilImage from "../../assets/images/categories/crudeSunflowerOil.png";
import coldPressedSunflowerOilImage from "../../assets/images/categories/coldPressedSunflowerOil.png";
import cosmeticSunflowerOilImage from "../../assets/images/categories/cosmeticSunflowerOil.png";
import sunflowerOilPageBanner from "../../assets/images/banners/sunflowerOilPageBanner.png";
import containerImage from "../../assets/images/dualColumn/container.png";
import oilBotttlesImage from "../../assets/images/dualColumn/oilBotttles.png";
import { Helmet } from "react-helmet";

export const SunflowerOil = () => {
  return (
    <>
      <Helmet>
        <title>Bullet agro</title>
        <meta name="description" content="Energy and Agriculture, Investment and Shipping Firm." />
      </Helmet>
      <Header />
      <PageBanner title="Sunflower<br /> oil" background={sunflowerOilPageBanner} />
      <Container>
        <Description
          value="For several years of experience in cooperation with leading Ukrainian companies that produce sunflower oil,<strong>we have established ourselves as a reliable and trusted partner</strong>. Our team of experienced specialists makes every effort to ensure timely guaranteed supplies of sunflower oil.<br /><br /><strong>We are an export-oriented enterprise. All products of the enterprise are sold for export to EU countries.</strong><br /><br />Our <strong>main buyers</strong> of sunflower oil are <strong>first-class international companies</strong> such as ALFA TRADING LIMITED, COFCO RESOURCES S.A., Louis Dreyfus Сommodites S.A., Glencore Grain BV., ADM Germany GmbH and others.<br /><br />A large number of manufacturers of products allow <strong>the sale of large volumes of products:</strong>
          – sunflower oil (refined deodorized frozen grade P) – <strong>80,000 tons per year;</strong>– sunflower oil (raw, unrefined, first grade) – <strong>100,000 tons per year.</strong><br /><br />Shipment of finished products is possible by the following modes of transport: motor transport, railway transport, including oil loading in flexi-tanks. Loading of products in 40-foot containers installed on railway platforms."
          margin="40px 0 0 0"
        />
        <Title value="Sunflower oil" margin="80px 0 40px" />
        <CategoriesSection
          categories={[
            { id: 2, title: "Refined<br /> sunflower oil", image: refinedSunflowerOilImage, background: "orange" },
            { id: 3, title: "Crude<br /> sunflower oil", image: crudeSunflowerOilImage, background: "orange" },
            {
              id: 4,
              title: "Cold pressed<br /> sunflower oil",
              image: coldPressedSunflowerOilImage,
              background: "orange",
            },
            { id: 5, title: "Сosmetic<br /> sunflower oil", image: cosmeticSunflowerOilImage, background: "orange" },
          ]}
        />
        <Description
          value="We are glad to offer you sunflower oil both in small and large wholesale. Thanks to direct cooperation with the manufacturer, we can offer the following types of oil packaging:"
          margin="40px 0 80px"
        />
        <DualColumnSection
          firstColumn={{
            title: "Crude sunflower oil",
            description: "Flexitank, 23MT, 20ft container<br /> Flexitank, 46MT, 40ft container",
            image: containerImage,
          }}
          secondColumn={{
            title: "Refined sunflower oil",
            description:
              "PET container, volume of 1 liter (0.920 kg)<br /> PET container, volume of 3 liters (2,760 kg)<br /> PET container, volume of 5 liters (4,600 kg)<br /> Metal canister, volume of 18 liters (16,560 kg)",
            image: oilBotttlesImage,
          }}
        />
        <CenteredContainer>
          <Title value="THE COMPANY OFFERS HIGH QUALITY SUNFLOWER OIL" margin="80px 0 0 0" />
        </CenteredContainer>
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
