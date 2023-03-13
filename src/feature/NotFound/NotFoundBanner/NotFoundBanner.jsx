import { Container } from "../../../components/Container/Container";
import "./NotFoundBanner.css";

export const NotFoundBanner = () => {
  return (
    <section className="not__found__banner">
      <Container>
        <div className="not__found__banner__info">
          <h1 className="not__found__banner__info__title">OOops :( </h1>
          <p className="not__found__banner__info__text">Something went wrong</p>
        </div>
      </Container>
    </section>
  );
};
