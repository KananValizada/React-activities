import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/signup" element={<Auth />} />
        </Routes>
      </BrowserRouter>

      {/* <Messages /> */}
    </div>
  );
};

export default App;
