import quote from "../../../assets/images/quote.png";
import "./MainQuote.css";

export const MainQuote = () => {
  return (
    <div className="main__quote__container">
      <img src={quote} alt="quoteImage" className="main__quote" />
    </div>
  );
};
