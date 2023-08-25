import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Best from "./components/Best.jsx";
import Released from "./components/Released.jsx";
import TryNew from "./components/TryNew.jsx";
import ShowCase from "./components/ShowCase.jsx";

const App = () => {
  return(
      <>
          <Navbar/>
          <Hero/>
          <Best/>
          <Released/>
          <TryNew/>
          <ShowCase/>
      </>
  )
}
export default App