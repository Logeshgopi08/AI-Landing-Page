// import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
// import Button from "./components/Button";
import Benefits from "./section/Benefits.jsx";
import Collaboration from "./section/Collabaration.jsx";
import Header from "./section/Header.jsx";
import Hero from "./section/Hero.jsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
    </>
  );
}

export default App;
