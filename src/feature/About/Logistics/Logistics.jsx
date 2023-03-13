import { LogisticsItem } from "../LogisticsItem";
import "./Logistics.css";

export const Logistics = ({ vessels }) => {
  return (
    <section className="logistics">
      {vessels.map((vessel) => (
        <LogisticsItem vessel={vessel} key={vessel.id} />
      ))}
    </section>
  );
};
