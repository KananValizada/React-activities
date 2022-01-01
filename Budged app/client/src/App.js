import "./App.css";
import Form from "./components/Form/Form";
import Outcome from "./components/Outcome/Outcome";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import { GlobaleReducer } from "./context/GlobalState";

function App() {
  return (
    <GlobaleReducer>
      <div className="App">
        <Outcome />
        <div className="Calc">
          <Form />
          <TransactionHistory />
        </div>
      </div>
    </GlobaleReducer>
  );
}

export default App;
