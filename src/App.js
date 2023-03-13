import { Route, Routes } from "react-router-dom";
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
import "./assets/styles/main.css";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/petroleum" element={<Petroleum />} />
        <Route path="/sunflowerOil" element={<SunflowerOil />} />
        <Route path="/grain" element={<Grain />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/codeOfConduct" element={<CodeOfConduct />} />
        <Route path="/process" element={<Process />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
