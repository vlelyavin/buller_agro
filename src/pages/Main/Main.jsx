import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProductList } from "../../feature/Main/ProductsList";
import { DualColumnSection } from "../../components/DualColumnSection/DualColumnSection";
import { Title } from "../../components/Title";
import { Benefits } from "../../feature/Main/Benefits";
import { QuestionsSection } from "../../components/QuestionsSection";
import { ContactForm } from "../../components/ContactForm";
import { MainBanner } from "../../feature/Main/MainBanner";
import { MainQuote } from "../../feature/Main/MainQuote";
import byLand from "../../assets/images/tradeDirections/byLand.png";
import byShip from "../../assets/images/tradeDirections/byShip.png";

export const Main = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Container>
        <MainQuote />
        <Title value="Company offers products" margin="0 0 40px 0" />
        <ProductList />
        <Title value="Most popular trade directions" margin="70px 0 40px" />
        <DualColumnSection
          firstColumn={{ image: byLand, description: "Sunflower oil trade from Ukraine to EU countries" }}
          secondColumn={{ image: byShip, description: "Diesel fuel trade from Turkey to Ukraine" }}
        />
        <Title value="Why choose us" margin="160px 0 40px" />
        <Benefits />
        <Title value="FAQ" margin="80px 0 40px" />
        <QuestionsSection
          columns={[
            {
              id: 1,
              title: "Individual prices for<br /> good clients",
              description:
                "We value our clients and are ready to individually discuss all possible options for mutually beneficial cooperation.",
            },
            {
              id: 2,
              title: "How to make an<br /> order?",
              description: "Give us a call, or write an email,<br /> or leave your contacts for communication.",
            },
            {
              id: 3,
              title: "Interested in regular<br /> deliveries?",
              description: "We can provide both single order and<br /> regular deliveries of petroleum products.",
            },
          ]}
        />
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
