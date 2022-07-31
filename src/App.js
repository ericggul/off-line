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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" default element={<FiveTimesDostoevsky />} />
          <Route exact path="/rating1" element={<Rating1 />} />
          <Route exact path="/fivetimesdostoevsky" element={<FiveTimesDostoevsky />} />
          <Route exact path="/confirmation" element={<Confirmation />} />
          <Route exact path="/oasis" element={<Oasis />} />
          <Route exact path="/instructions" element={<Instructions />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
