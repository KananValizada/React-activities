import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Challanges from "./components/Challanges/Challanges";
import Suggest from "./components/Suggest/Suggest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Challanges />
      <Suggest />
    </div>
  );
}

export default App;
