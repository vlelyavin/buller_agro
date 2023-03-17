import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ImageWithDescription } from "../../components/ImageWithDescription";
import { PageBanner } from "../../components/PageBanner";
import { Title } from "../../components/Title";
import { ContactForm } from "../../components/ContactForm";
import { Infrastructure } from "../../feature/About/Infrastructure";
import { Logistics } from "../../feature/About/Logistics";
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
        <Infrastructure />
        <Title value="Logistics" margin="90px 0 40px" />
        <Logistics />
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
