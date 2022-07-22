//styles
import "./App.css";
import { ThemeProvider } from "styled-components";

//hooks
import useResize from "utils/hooks/useResize";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//containers
//rating
import Rating1 from "containers/RatingSeries/Rating1";

function App() {
  const [windowWidth, windowHeight] = useResize();

  return (
    <ThemeProvider theme={{ windowWidth, windowHeight }}>
      <BrowserRouter>
        <Routes>
          <Route path="/rating1" element={<Rating1 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
