import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Main } from "./pages/Main";
import { Footer } from "./components/Footer";
import { Petroleum } from "./pages/Petroleum";
import { SunflowerOil } from "./pages/SunflowerOil";
import { Grain } from "./pages/Grain";
import { Contact } from "./pages/Contact";
import { Process } from "./pages/Process";
import { About } from "./pages/About";
import { CodeOfConduct } from "./pages/CodeOfConduct";
import { Work } from "./pages/Work/Work";
import { NotFound } from "./pages/NotFound";
import { ROUTES } from "./constants/routes";
import "./assets/styles/global.css";
import "./assets/styles/fonts.css";

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Bullet agro";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Energy and Agriculture, Investment and Shipping Firm");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path={ROUTES.initial} element={<Main />} />
        <Route path={ROUTES.petroleum} element={<Petroleum />} />
        <Route path={ROUTES.sunflowerOil} element={<SunflowerOil />} />
        <Route path={ROUTES.grain} element={<Grain />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path={ROUTES.codeOfConduct} element={<CodeOfConduct />} />
        <Route path={ROUTES.process} element={<Process />} />
        <Route path={ROUTES.work} element={<Work />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
