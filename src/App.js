//styles
import "./App.css";
import { ThemeProvider } from "styled-components";

//hooks
import useResize from "utils/hooks/useResize";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//containers: created order
//Jul 2022
import Rating1 from "containers/RatingSeries/Rating1";
import FiveTimesDostoevsky from "containers/FiveTimesDostoevsky";
import Confirmation from "containers/Confirmation";
import Instructions from "containers/Instructions";
import Rebellion from "containers/Rebellion";
import RangeStars from "containers/RangeStars";

//Aug 2022
import Vibration from "containers/Vibration";
import Epsilon from "containers/Epsilon";
import Layout from "containers/Layout";
import Controller from "containers/Controller";
import ModernTraveling from "containers/ModernTraveling";
import Bascilica from "containers/Bascilica";

import SquarePillars from "containers/SquarePillars";
import Opposition from "containers/Opposition";
import Oasis from "containers/Oasis";

function App() {
  const [windowWidth, windowHeight] = useResize();

  return (
    <ThemeProvider theme={{ windowWidth, windowHeight }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" default element={<FiveTimesDostoevsky />} />
          <Route exact path="/rating1" element={<Rating1 />} />
          <Route exact path="/five-times-dostoevsky" element={<FiveTimesDostoevsky />} />
          <Route exact path="/confirmation" element={<Confirmation />} />
          <Route exact path="/instructions" element={<Instructions />} />
          <Route exact path="/rebellion" element={<Rebellion />} />
          <Route exact path="/range-stars" element={<RangeStars />} />

          <Route exact path="/vibration" element={<Vibration />} />
          <Route exact path="/epsilon" element={<Epsilon />} />
          <Route exact path="/layout" element={<Layout />} />
          <Route exact path="/controller" element={<Controller />} />
          <Route exact path="/modern-traveling" element={<ModernTraveling />} />
          <Route exact path="/bascilica" element={<Bascilica />} />

          <Route exact path="/square-pillars" element={<SquarePillars />} />
          <Route exact path="/opposition" element={<Opposition />} />
          <Route exact path="/oasis" element={<Oasis />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
