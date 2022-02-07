import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Challanges from "./components/Challanges/Challanges";
import Suggest from "./components/Suggest/Suggest";
import ChallangesItem from "./components/Challanges/ChallangesItem/ChallangesItem";
import { Routes, Route } from "react-router";
import Transition from "./components/HOC/Transition";

function App() {
  return (
    <div className="App">
      <Transition>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <Challanges />
                <Suggest />
              </>
            }
          />

          <Route path="/challanges/:id" element={<ChallangesItem />} />
        </Routes>
      </Transition>
    </div>
  );
}

export default App;
