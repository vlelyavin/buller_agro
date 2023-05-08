import payingTerms from "../../../assets/images/benefits/payingTerms.png";
import individualApproach from "../../../assets/images/benefits/individualApproach.png";
import expressDelivery from "../../../assets/images/benefits/expressDelivery.png";
import withoutIntermediaries from "../../../assets/images/benefits/withoutIntermediaries.png";
import volumeGuarantee from "../../../assets/images/benefits/volumeGuarantee.png";
import yearsOfExperience from "../../../assets/images/benefits/yearsOfExperience.png";
import noDowntime from "../../../assets/images/benefits/noDowntime.png";
import qualityGoods from "../../../assets/images/benefits/qualityGoods.png";
import { BenefitsListItem } from "../BenefitsListItem";
import { BenefitsSummaryItem } from "../BenefitsSummaryItem/BenefitsSummaryItem";
import "./Benefits.css";

export const Benefits = () => {
  const benefits = [
    { id: 1, title: "Comfortable<br /> payment terms", image: payingTerms },
    { id: 2, title: "Individual<br /> approach", image: individualApproach },
    { id: 3, title: "Express<br /> delivery", image: expressDelivery },
    { id: 4, title: "Without<br /> intermediaries", image: withoutIntermediaries },
    { id: 5, title: "Volume<br /> guarantee", image: volumeGuarantee },
    { id: 6, title: "Years of<br /> experience", image: yearsOfExperience },
    { id: 7, title: "No<br /> downtime", image: noDowntime },
    { id: 8, title: "Quality<br /> goods", image: qualityGoods },
  ];
  const benefitsDescriptions = [
    "One of the <strong>largest companies</strong> in Ukraine.",
    "<strong>Work experience - more than 3 years.</strong> During this time, the company managed to become a confident competitor inthe wholesale market of petroleum products.",
    "<strong>Product quality control.</strong> We cooperate only with trusted suppliers, and therefore we can guarantee the high quality of the offered product. All oil products meet the standards, are stored and transported in accordance with the requirements.",
    "<strong>Established logistics.</strong> When ordering from us, you are guaranteed to receive the products within the agreedtime.",
    "<strong>A selection of products of all kinds and in different volumes.</strong> We supply both small wholesale and large wholesale",
    "<strong>Affordable prices.</strong> We carry out the delivery of products in modern ways, which allows us to offer potential buyers the most attractive prices.",
  ];
  const keyBenefits = [
    {
      id: 1,
      title: "Our<br /> Mission",
      description:
        "To built trust-full relationships with our clients, strategically using our expertise in global trade to add unique value to their business via bridging energy and agriculture trading legs",
      background: "green",
    },
    {
      id: 2,
      title: "Vision",
      description:
        "We see international trading as a business of people, we build business with partners to open new horizons.",
      background: "purple",
    },
    {
      id: 3,
      title: "Values",
      description:
        "We are convinced that global trade is about trust, flexibility, joy of communication and networking, team efforts and constant self improvement",
      background: "orange",
    },
    {
      id: 4,
      title: "Purpose",
      description:
        "Connect markets with surplus and deficit of energy & agri via our shipping fleet and expertise in reshaping world of new order",
      background: "green",
    },
  ];
  return (
    <section className="benefits">
      <div className="benefits__list">
        {benefits.map((benefit) => (
          <BenefitsListItem benefit={benefit} key={benefit.id} />
        ))}
      </div>
      <ol className="benefits__description">
        {benefitsDescriptions.map((text, id) => (
          <li key={id} dangerouslySetInnerHTML={{ __html: text }}></li>
        ))}
      </ol>
      <div className="benefits__summary">
        {keyBenefits.map((benefit) => (
          <BenefitsSummaryItem benefit={benefit} key={benefit.id} />
        ))}
      </div>
    </section>
  );
};
