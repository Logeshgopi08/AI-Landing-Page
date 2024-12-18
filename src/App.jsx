// import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
// import Button from "./components/Button";
import Benefits from "./section/Benefits.jsx";
import Collaboration from "./section/Collabaration.jsx";
import Footer from "./section/Footer.jsx";
import Header from "./section/Header.jsx";
import Hero from "./section/Hero.jsx";
import Pricing from "./section/Pricing.jsx";
import Service from "./section/Service.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Service />
        <Pricing />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
