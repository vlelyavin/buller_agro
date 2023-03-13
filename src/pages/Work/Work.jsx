import { Header } from "../../components/Header";
import { PageBanner } from "../../components/PageBanner";
import { Container } from "../../components/Container";
import { ContactForm } from "../../components/ContactForm";
import { BestVariant } from "../../feature/Work/BestVariant";
import { TripleColumnSection } from "../../feature/Work/TripleColumnSection";
import workWithUsImage from "../../assets/images/workPage/workWithUs.png";
import workPageBanner from "../../assets/images/banners/workPageBanner.png";

export const Work = () => {
  return (
    <>
      <Header />
      <PageBanner background={workPageBanner} title="Work with us" />
      <Container>
        <BestVariant />
        <img src={workWithUsImage} alt="workWithUsImage" />
        <TripleColumnSection />
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
