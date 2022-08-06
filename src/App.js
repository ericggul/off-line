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
          <Route exact path="/fivetimesdostoevsky" element={<FiveTimesDostoevsky />} />
          <Route exact path="/confirmation" element={<Confirmation />} />
          <Route exact path="/instructions" element={<Instructions />} />
          <Route exact path="/rebellion" element={<Rebellion />} />
          <Route exact path="/range-stars" element={<RangeStars />} />

          <Route exact path="/vibration" element={<Vibration />} />
          <Route exact path="/opposition" element={<Opposition />} />
          <Route exact path="/oasis" element={<Oasis />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
