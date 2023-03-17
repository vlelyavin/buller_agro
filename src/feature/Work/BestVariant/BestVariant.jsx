import bestVariantImage from "../../../assets/images/workPage/bestVariant.png";
import "./BestVariant.css";

export const BestVariant = () => {
  return (
    <section className="best__variant">
      <img src={bestVariantImage} alt="bestVariantImage" className="best__variant__image" />
      <div className="best__variant__info">
        <h2 className="best__variant__info__title">Why our company is the best variant?</h2>
        <p className="best__variant__info__description">
          Our success is built on the skill set, experience and anticipation of entrepreneurs and leaders in their
          field. Our team is the fundament of everything we do and are proud of.
          <br />
          <br />
          We recruit the best and also grow our own talents. In all our offices and facilities, you will find
          outstanding individuals working to high standards as part of a powerful, worldwide team.
        </p>
      </div>
    </section>
  );
};
