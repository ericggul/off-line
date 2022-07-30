//styles
import "./App.css";
import { ThemeProvider } from "styled-components";

//hooks
import useResize from "utils/hooks/useResize";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//containers: created order
import Rating1 from "containers/RatingSeries/Rating1";
import FiveTimesDostoevsky from "containers/FiveTimesDostoevsky";
import Confirmation from "containers/Confirmation";
import Oasis from "containers/Oasis";
import Instructions from "containers/Instructions";

function App() {
  const [windowWidth, windowHeight] = useResize();

  return (
    <ThemeProvider theme={{ windowWidth, windowHeight }}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" default element={<FiveTimesDostoevsky />} />
          <Route path="/rating1" element={<Rating1 />} />
          <Route path="/fivetimesdostoevsky" element={<FiveTimesDostoevsky />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/oasis" element={<Oasis />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
