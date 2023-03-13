import "./LogisticsItem.css";

export const LogisticsItem = ({ vessel }) => {
  return (
    <div className="logistics__item">
      <img src={vessel.image} alt={`${vessel.title}`} className="logistics__item__image" />
      <div className="logistics__item__info">
        <h3 className="logistics__item__info__title">{vessel.title}</h3>
        <p className="logistic__item__info__location">{vessel.location}</p>
        <div className="logistics__row">
          <div className="logistics__column">
            <div className="logistics__column__item">
              <h4 className="logistics__column__item__title">Dimensionals:</h4>
              <p
                className="logistics__column__item__text"
                dangerouslySetInnerHTML={{ __html: vessel.dimensionals }}
              ></p>
            </div>
          </div>
          <div className="logistics__column">
            <div className="logistics__column__item inline">
              <h4 className="logistics__column__item__title">Year of built:</h4>
              <p className="logistics__column__item__text">{vessel.year}</p>
            </div>
            <div className="logistics__column__item">
              <h4 className="logistics__column__item__title">Ex-name(s):</h4>
              <p className="logistics__column__item__text">{vessel.exnames}</p>
            </div>
          </div>
        </div>
        <div className="logistics__description">
          <h4 className="logistics__column__item__title">Short vessel description:</h4>
          <p className="logistics__column__item__text" dangerouslySetInnerHTML={{ __html: vessel.description }}></p>
        </div>
      </div>
    </div>
  );
};
