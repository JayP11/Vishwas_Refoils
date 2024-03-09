import "./App.css";
import {
  BrowserRouter,
  // BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Landingpage from "./pages/landingpage/Landingpage";
import Footer from "./common/footer/Footer";
import Sunflower from "./pages/sunflower/Sunflower";
import Groundnut from "./pages/groundnut/Groundnut";
import Cottonseed from "./pages/cottonseed/Cottonseed";
import Corn from "./pages/corn/Corn";
// import Palmolein from "./pages/palmolein/Palmolein";
import Soyabean from "./pages/soyabean/Soyabean";
import GoldPalmolein from "./pages/goldpalmolein/GoldPalmolein";
import AboutUS from "./pages/about_us/AboutUS";
import ContactUS from "./pages/contact_us/ContactUS";
import Career from "./pages/career/Career";
import CastorSinglepro from "./component/castorsinglepro/CastorSinglepro";
import FoundersMessage from "./pages/founders_message/FoundersMessage";
import InvestorDesk from "./pages/investor_desk/InvestorDesk";
import PalmoleinSinglepro from "./component/palmolein_singlepro/PalmoleinSinglepro";
import Recipes from "./pages/recipes/Recipes";
import Recfafdajalebi from "./pages/recfafdajalebi/Recfafdajalebi";
import Recplakpaneer from "./pages/recpalakpaneer/Recplakpaneer";
import Recpabhaji from "./pages/recpavbhaji/Recpavbhaji";
import Recdalbaatichurma from "./pages/recdalbaatichurma/Recdalbaatichurma";
import { FaWhatsapp } from "react-icons/fa";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="/SunflowerOil" element={<Sunflower />}></Route>
          <Route path="/GroundnutOil" element={<Groundnut />}></Route>
          <Route path="/CottonseedOil" element={<Cottonseed />}></Route>
          <Route path="/CornOil" element={<Corn />}></Route>
          <Route path="/PalmoleinOil" element={<PalmoleinSinglepro />}></Route>
          <Route path="/SoyabeanOil" element={<Soyabean />}></Route>
          <Route path="/CastorSinglepro" element={<CastorSinglepro />}></Route>
          <Route path="/GoldPalmoleinOil" element={<GoldPalmolein />}></Route>
          <Route path="/AboutUS" element={<AboutUS />}></Route>
          <Route path="/ContactUS" element={<ContactUS />}></Route>
          <Route path="/Career" element={<Career />}></Route>
          <Route path="/foundersmessage" element={<FoundersMessage />}></Route>
          <Route path="/InvestorDesk" element={<InvestorDesk />}></Route>
          <Route path="/Recipes" element={<Recipes />}></Route>
          <Route w="/recfafdajalebi" element={<Recfafdajalebi />}></Route>
          <Route path="/recpalakpaneer" element={<Recplakpaneer />}></Route>
          <Route path="/recpavbhaji" element={<Recpabhaji />}></Route>
          <Route
            path="/recdalbaatichurma"
            element={<Recdalbaatichurma />}></Route>
        </Routes>
        <Footer />
        <a
          className="whats-app"
          href="https://api.whatsapp.com/send?phone=919157753915"
          target="_blank"
          rel="noreferrer">
          <FaWhatsapp className="my-float" />
        </a>
      </BrowserRouter>
    </>
  );
}

export default App;
