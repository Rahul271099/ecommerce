import "./App.css";
import Navbarcomponent from "./Components/Navbar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer.Component";

function App() {
  return (
    <>
      <Navbarcomponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
