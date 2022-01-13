import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AOS from "aos";

function App() {
  const [loading, isloading] = useState(true);

  useEffect(() => {
    isloading(false);

    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return <div className="App"></div>;
}

export default App;
