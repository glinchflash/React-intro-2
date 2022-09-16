import './App.css';
import Inputfield from "./components/Inputfield";
import ToDo from "./components/ToDo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Inputfield/>
        <ToDo/>
    </div>
  );
}

export default App;
