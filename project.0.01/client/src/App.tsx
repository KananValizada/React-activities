import Header from './components/Header/Header'
import ActiveChallanges from './components/ActiveChallanges/ActiveChallanges'
import Navbar from './components/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
     <Header />
     <ActiveChallanges/>
    </div>
  );
}

export default App;
