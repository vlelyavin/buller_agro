import { Container } from "../../components/Container";
import { CenteredContainer } from "../../components/CenteredContainer";
import { Header } from "../../components/Header";
import { PageBanner } from "../../components/PageBanner";
import { Title } from "../../components/Title";
import { ImageWithDescription } from "../../components/ImageWithDescription";
import { DualColumnSection } from "../../components/DualColumnSection";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import tradingImage from "../../assets/images/imageWithDescription/trading.png";
import geographicalExpansionImage from "../../assets/images/dualColumn/geographicalExpansion.png";
import marketplaceImage from "../../assets/images/dualColumn/marketplace.png";
import processPageBanner from "../../assets/images/banners/processPageBanner.png";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Process = () => {
  return (
    <>
      <Header />
      <PageBanner title="Process" background={processPageBanner} />
      <Container>
        <Title value="Trading" margin="40px 0" />
        <ImageWithDescription
          image={tradingImage}
          description=" <strong>Our strategy is to combine energy and agri markets via effective and smooth logistics </strong>, being very active in gasoil and vegoils niche to optimize logistic flows and provide best service to our clients.<br /><br /> <strong>Our experienced traders </strong> are situated in our offices throughout the globe -  <strong>Geneva, Kyiv, Cannes</strong>; industry specialists who count gas, crude oil, light and middle distillates, as well as bitumen, as their specialities. <strong>These trading experts are supported by a highly skilled team of operations, shipping and finance crew, concentrated in Kyiv</strong>. With challenges consistently facing the energy industry, we are constantly evolving, using advanced systems, procedures and processes to provide the best answers for our clients"
        />
        <Title value="Where we do" margin="40px 0" />
        <DualColumnSection
          firstColumn={{
            title: "Georgaphical expansion",
            image: geographicalExpansionImage,
            description:
              "While we are determined to maintain a leading position in the key markets where we historically trade - Black Sea, our goal is to fuel further growth through geographical diversification in new markets for petroleum products and vegoils to East Med, Northern Africa and West Med.<br /><br /><strong>We strongly believe in boost of flows via Danube river to the Central Europe</strong>, which will build new effective commodities flows, while trading in the Black Sea is reshuffling.",
          }}
          secondColumn={{
            title: "Marketplace",
            image: marketplaceImage,
            description:
              "In a marketplace where we see commodities growing ever more interrelated, <strong>Bullet Agro is global, multi-commodity and asset-backed</strong>. We source, we ship, we store, we blend and we transact<br /><br />As a participant in the futures and commodity benchmark markets, <strong>we offer the pricing structures and service excellence that create value for our customers throughout the supply chain.</strong>",
          }}
        />
        <CenteredContainer margin="15px 0 -20px 0">
          <Link to={ROUTES.contact}>
            <Button width="270px" backgroundColor="var(--black)" fontSize="var(--font-m)" />
          </Link>
        </CenteredContainer>
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
