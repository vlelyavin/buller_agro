import { Description } from "../../../components/Description";
import "./HorizontalDualColumnSection.css";

export const HorizontalDualColumnSection = ({ firstRow, secondRow }) => {
  return (
    <section className="horizontal__dual__column__section">
      <img src={firstRow.image} alt={firstRow.title} className="horizontal__dual__column__section__image" />
      <Description value={firstRow.description} />
      <img src={secondRow.image} alt={secondRow.title} className="horizontal__dual__column__section__image" />
      <Description value={secondRow.description} />
    </section>
  );
};
