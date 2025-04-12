import logo from './logo.svg';
import './App.css';
import Forma from "./Forma";
import Header from "./Header";
import backgrt from './img/background.png'
function App() {
  return (
    <div className="App">
        <img id="backgrt" src={backgrt} alt=""/>
      <Header />
      <Forma />
    </div>
  );
}

export default App;
