//styles
import "./App.css";
import { ThemeProvider } from "styled-components";

//hooks
import useResize from "utils/hooks/useResize";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//containers
//rating
import Rating1 from "containers/RatingSeries/Rating1";
import Rating2 from "containers/RatingSeries/Rating2";

//not completed
import Gazed from "containers/Gazed";
import MonaLisa from "containers/MonaLisa";

function App() {
  const [windowWidth, windowHeight] = useResize();

  return (
    <ThemeProvider theme={{ windowWidth, windowHeight }}>
      <BrowserRouter>
        <Routes>
          <Route path="/rating1" element={<Rating1 />} />
          <Route path="/rating2" element={<Rating2 />} />

          <Route path="/gazed" element={<Gazed />} />
          <Route path="/monalisa" element={<MonaLisa />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
