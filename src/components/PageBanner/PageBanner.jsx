import { Container } from "../Container/Container";
import "./PageBanner.css";

export const PageBanner = ({ title, text, background }) => {
  return (
    <section className="page__banner" style={{ background: `url(${background}) no-repeat center center / cover` }}>
      <Container>
        <div className="page__banner__info">
          <h2 className="page__banner__info__text">{text}</h2>
          <h1 className="page__banner__info__title" dangerouslySetInnerHTML={{ __html: title }}></h1>
        </div>
      </Container>
    </section>
  );
};
