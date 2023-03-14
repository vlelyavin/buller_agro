import "./TripleColumnSection.css";

export const TripleColumnSection = () => {
  return (
    <section className="triple__column__section">
      <div className="triple__column__section__item">
        <h3 className="triple__column__section__item__title bg-green">
          Working at
          <br /> Bullet Agro
        </h3>

        <p className="triple__column__section__item__description">Load yor CV here</p>
        <button className="triple__column__section__item__button">Select a file</button>
      </div>
      <div className="triple__column__section__item">
        <h3 className="triple__column__section__item__title">Graduates</h3>
        <p className="triple__column__section__item__description">Load yor CV here</p>
        <button className="triple__column__section__item__button">Select a file</button>
      </div>
      <div className="triple__column__section__item">
        <h3 className="triple__column__section__item__title bg-dimgray">Vacancies</h3>
        <p className="triple__column__section__item__description">
          Click on the button to see
          <br /> vacancies for Bullet Agroholding
        </p>
        <button className="triple__column__section__item__button inverted">Go to vacancies</button>
      </div>
    </section>
  );
};
