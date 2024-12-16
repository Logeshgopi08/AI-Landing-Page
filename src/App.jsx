import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button";
import Header from "./section/Header.jsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
