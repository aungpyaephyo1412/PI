import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Best from "./components/Best.jsx";
import Released from "./components/Released.jsx";
import TryNew from "./components/TryNew.jsx";
import ShowCase from "./components/ShowCase.jsx";
import ShowCaseTwo from "./components/ShowCaseTwo.jsx";
import ShowCaseThree from "./components/ShowCaseThree.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return(
      <>
          <Navbar/>
          <Hero/>
          <Best/>
          <Released/>
          <TryNew/>
          <ShowCase/>
          <ShowCaseTwo/>
          <ShowCaseThree/>
          <Footer/>
      </>
  )
}
export default App