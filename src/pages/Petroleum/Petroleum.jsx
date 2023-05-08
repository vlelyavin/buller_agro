import { CategoriesSection } from "../../components/CategoriesSection";
import { Container } from "../../components/Container";
import { Description } from "../../components/Description";
import { Header } from "../../components/Header";
import { PageBanner } from "../../components/PageBanner";
import { Title } from "../../components/Title";
import { QuestionsSection } from "../../components/QuestionsSection";
import { DualColumnSection } from "../../components/DualColumnSection";
import { HorizontalDualColumnSection } from "../../feature/Petrouleum/HorintalDualColumnSection";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import gearOilImage from "../../assets/images/categories/gearOil.png";
import engineOilImage from "../../assets/images/categories/engineOil.png";
import fuelImage from "../../assets/images/categories/fuel.png";
import dieselImage from "../../assets/images/dualColumn/diesel.png";
import gasolineImage from "../../assets/images/dualColumn/gasoline.png";
import gearOilFirst from "../../assets/images/horizontalDualColumn/gearOilFirst.png";
import gearOilSecond from "../../assets/images/horizontalDualColumn/gearOilSecond.png";
import engineOilFirst from "../../assets/images/horizontalDualColumn/engineOilFirst.png";
import engineOilSecond from "../../assets/images/horizontalDualColumn/engineOilSecond.png";
import petroleumPageBanner from "../../assets/images/banners/petroleumPageBanner.png";
import { CenteredContainer } from "../../components/CenteredContainer";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Petroleum = () => {
  return (
    <>
      <Header />
      <PageBanner
        title="Petroleum
          <br />products"
        background={petroleumPageBanner}
      />
      <Container>
        <Description
          value="<strong>Substances obtained by processing the petroleum raw materials</strong> are one of the most popular commodities in the world. If your company needs to use <strong>special equipment, vehicles, generators,</strong> or <strong>any other devices</strong> that consume petroleum products, you must ensure its uninterrupted supply in the right quantities.<br /><br />Depending on the scale of the business and the number of orders, you may require <strong>different volumes of oil products.</strong> You can order fuels and lubricants (gasoline, diesel fuel) <strong>in bulk in any volume from us.</strong><br /><br />We specialize in the <strong>wholesale of light and dark petroleum products.</strong> We can organize <strong>the delivery of any fuel type, on any scale and in any form</strong> (from a one-time transaction to regular supply on agreed dates).<br /><br />Firstly, it is needed by <strong>construction companies, industrial enterprises, the agro-industrial sector, transport companies, and gas stations.</strong>
          In addition to these enterprises, oil products may also be needed by companies from other areas (from shopping centers and warehouses to management companies of cottage settlements and residential complexes). The most common reason is power generators."
          margin="40px 0 0 0"
        />
        <Title value="Categories" margin="80px 0 40px" />
        <CategoriesSection
          categories={[
            { id: 2, title: "Gear oil", background: "dimgray", image: gearOilImage },
            { id: 3, title: "Engine oil", background: "dimgray", image: engineOilImage },
            { id: 4, title: "Fuel", background: "dimgray", image: fuelImage },
          ]}
        />
        <Description value="The company offers high quality petroleum product" margin="80px 0 40px" />
        <QuestionsSection
          columns={[
            {
              id: 1,
              title: "Individual prices for<br /> good clients",
              description:
                "We value our clients and are ready to<br /> individually discuss all possible options<br /> for mutually beneficial cooperation.",
            },
            {
              id: 2,
              title: "How to make an<br /> order?",
              description: "Give us a call, or write an email, or leave<br /> your contacts for communication.",
            },
          ]}
        />
        <Title value="Fuel" margin="80px 0 40px" />
        <DualColumnSection
          firstColumn={{
            title: "Diesel",
            description:
              "<strong>Diesel fuel is one of the products of oil refining</strong>. It is basic for the following <strong>types of transport:</strong> railway locomotives;trucks;water transport;agricultural machinery;passenger cars with diesel engines.In addition to transport, diesel fuel is also used for electric generators of various capacities - from household ones, which are enough for a garage or summer cottage, to industrial ones - for manufacturing enterprises.<br /><br />Compared to gasoline generators, <strong>diesel generators have a wide range of power, higher efficiency, better resistance to constant high loads, and economy.</strong> Therefore, they are more often chosen for large objects, which means that they require a large amount of diesel fuel.",
            image: dieselImage,
          }}
          secondColumn={{
            title: "Gasoline",
            description:
              "Among all refined petroleum products, <strong>gasoline is one of the most massively demanded</strong>. On a huge scale, the population and business need it - <strong>for refueling vehicles</strong> (this is the main scope of its application).<br /><br />In addition to refueling cars, different grades of gasoline are used: <strong>for construction work</strong> - as a solvent for paints and varnishes;<strong>for the chemical industry</strong> - for technological purposes, <strong>to produce vegetable oils, paints, varnishes, mastics,</strong>as fuel for electric generators running on gasoline;as a <strong>degreaser and cleaner for electrical equipment,</strong> aircraft engines, parts.The average consumer can buy gasoline in small quantities at a gas station. But if you need wholesale deliveries, we can arrange them.<br /><br />You can make both a large wholesale order and order a small batch, both in the form of a one-time deal, and conclude a contract for the regular supply of your enterprise with the right amount of fuel and on the right dates.",
            image: gasolineImage,
          }}
        />
        <CenteredContainer margin="30px 0 0 0">
          <Link to={ROUTES.contact}>
            <Button width="270px" backgroundColor="var(--black)" fontSize="var(--font-m)" />
          </Link>
        </CenteredContainer>
        <Title value="Gear oil" margin="40px 0" />
        <HorizontalDualColumnSection
          firstRow={{
            image: gearOilFirst,
            description:
              "<strong>Gear oil is a lubricant</strong> that is actively used in many vehicles. <strong>To maintain the performance of any mechanism</strong> and <strong>reduce the wear rate of rubbing surfaces</strong>, automakers recommend the use of lubricants. The transmission of a car, which includes a gearbox, steering gears, gear / chain drives, connects the engine to the wheels, transmits torque to them, changes the speed and direction of movement. For efficient operation of the transmission unit, a special oil is used.",
          }}
          secondRow={{
            image: gearOilSecond,
            description:
              "Currently, <strong>there are several classification systems</strong> that define the performance characteristics that characterize a particular gear oil: <strong>SAE</strong> (viscosity class), <strong>API</strong> (types of additives, load level, transmission type: spiral bevel, hypoid, unsynchronized, worm). On domestic roads, you can find cars with <strong>different types of transmission </strong>: mechanical, electric, hydraulic, combined (hydromechanical, electromechanical), so you should choose the right oil for the gearbox (transmission) used in the car, taking into account the approval of the car manufacturer and the mileage of the car.",
          }}
        />
        <Title value="Engine oil" margin="80px 0 40px" />
        <HorizontalDualColumnSection
          firstRow={{
            image: engineOilFirst,
            description:
              "Engine oil is a lubricant that reduces friction in the moving parts of a car. In addition, the oil performs a cooling and cleaning function, and also prevents corrosion.",
          }}
          secondRow={{
            image: engineOilSecond,
            description:
              "Types of motor oils: Engine oil plays a key role in the proper operation of the engine. Using a quality product, the owner of the vehicle will not worry about problems that may suddenly arise on the road. Since engine oil becomes a consumable item, it should be changed after a certain mileage, but before that you should familiarize yourself with the classification. Universal motor oil is a loose concept, since the manufacturer recommends a specific type of product for each device. In order to determine what you need, you can contact us and we will select the type of engine oil for you.",
          }}
        />
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
