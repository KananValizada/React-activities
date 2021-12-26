import { Container, Typography } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
