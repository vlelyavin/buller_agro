import { Header } from "../../components/Header";
import { PageBanner } from "../../components/PageBanner";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { CategoriesSection } from "../../components/CategoriesSection";
import { DualColumnSection } from "../../components/DualColumnSection";
import { ContactForm } from "../../components/ContactForm";
import codeOfConductPageBanner from "../../assets/images/banners/codeOfConductPageBanner.png";
import geographicalExpansionImage from "../../assets/images/dualColumn/geographicalExpansion.png";
import marketplaceImage from "../../assets/images/dualColumn/marketplace.png";
import tradingImage from "../../assets/images/categories/trading.png";
import decisivenessImage from "../../assets/images/categories/decisiveness.png";
import analysisImage from "../../assets/images/categories/analysis.png";

export const CodeOfConduct = () => {
  return (
    <>
      <Header />
      <PageBanner background={codeOfConductPageBanner} title="Code of conduct" />
      <Container>
        <Title value="Principles" margin="40px 0" />
        <CategoriesSection
          categories={[
            {
              id: 2,
              title: "Trading",
              description:
                "We do believe that trading is done by humans and for humans. We are team of highly dedicated, experienced experts in trading with our own professional style and signature. Our vision is that nowadays personality and individual approach matter a lot. ",
              image: tradingImage,
              background: "white",
              color: "black",
            },
            {
              id: 3,
              title: "Modernity and<br /> decisiveness",
              description:
                "We always “feel the heartbeat” of each situation and see it as it is, make our forecasts and act with confidence. We avoid risks and do not sign any unreliable agreements, at the same time making quick decisions and never missing time to benefit from selling or buying a product demanded on the market.",
              image: decisivenessImage,
              background: "white",
              color: "black",
            },
            {
              id: 4,
              title: "Deep analysis",
              description:
                "We analyze information in detail, considering past and current data and foreseeing possible changes on the market. We understand how to seize the moment for a profitable sale or purchase. We not only track the conditions and actions inside foreign markets, but also understand the global picture. This allows us to think more open-minded and to be ahead of other traders.",
              image: analysisImage,
              background: "white",
              color: "black",
            },
          ]}
        />
        <Title value="Priorities" margin="40px 0" />
        <DualColumnSection
          firstColumn={{
            title: "Experience and reliability",
            description:
              "Our team has a wide-ranging work experience on foreign markets.<br /><br />They are highly qualified and confident in their skills, possessing necessary knowledge of dealing with different products and clients from around the globe. We guarantee the reliability of every agreement.",
            image: geographicalExpansionImage,
          }}
          secondColumn={{
            title: "Efficiency for all our clients",
            description:
              "We value our reputation, therefore we offer the most convenient conditions for every client – buyer, seller or investor.<br /><br />Our priority is a lasting, efficient and comfortable partnership.<br /><br />This can be seen behind the range of services provided by Bullet Agro trading company: we do everything for Your comfort, calm and financial prosperity.",
            image: marketplaceImage,
          }}
        />
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
