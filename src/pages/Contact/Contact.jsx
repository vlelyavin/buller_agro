import { PageBanner } from "../../components/PageBanner";
import { Container } from "../../components/Container";
import { ContactForm } from "../../components/ContactForm";
import { Title } from "../../components/Title";
import { Header } from "../../components/Header";
import { ContactInfo } from "../../feature/Contact/ContactInfo";
import contactPageBanner from "../../assets/images/banners/contactPageBanner.png";
import { ContactLocation } from "../../feature/Contact/ContactLocation";

export const Contact = () => {
  return (
    <>
      <Header />
      <PageBanner background={contactPageBanner} title="Contact us" />
      <Container>
        <Title value="We are waiting for your message" margin="40px 0" />
        <ContactForm />
        <ContactInfo />
        <ContactLocation />
      </Container>
    </>
  );
};
