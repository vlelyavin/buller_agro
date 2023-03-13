import { InfrastructureItem } from "../InfrastructureItem";
import "./Infrastructure.css";

export const Infrastructure = ({ items }) => {
  return (
    <section className="infrastructure">
      {items.map((item) => (
        <InfrastructureItem item={item} key={item.id} />
      ))}
    </section>
  );
};
