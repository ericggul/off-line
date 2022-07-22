//styles
import "./App.css";
import { ThemeProvider } from "styled-components";

//hooks
import useResize from "utils/hooks/useResize";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//containers: created order
import Rating1 from "containers/RatingSeries/Rating1";
import FiveTimesDostoevsky from "containers/FiveTimesDostoevsky";

function App() {
  const [windowWidth, windowHeight] = useResize();

  return (
    <ThemeProvider theme={{ windowWidth, windowHeight }}>
      <BrowserRouter>
        <Routes>
          <Route path="/rating1" element={<Rating1 />} />
          <Route path="/fivetimesdostoevsky" element={<FiveTimesDostoevsky />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
