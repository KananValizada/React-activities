import "./App.css";
import Form from "./components/Form/Form";
import Outcome from "./components/Outcome/Outcome";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="App">
      <Outcome />
      <div className="Calc">
        <Form />
        <TransactionHistory />
      </div>
    </div>
  );
}

export default App;
