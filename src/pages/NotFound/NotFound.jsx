import { Header } from "../../components/Header";
import { NotFoundBanner } from "../../feature/NotFound/NotFoundBanner";
import { NotFoundRedirect } from "../../feature/NotFound/NotFoundRedirect";

export const NotFound = () => {
  return (
    <>
      <Header />
      <NotFoundBanner />
      <NotFoundRedirect />
    </>
  );
};
