import { useState } from "react";
import "./App.css";

function App() {

  const [number, setNumber] = useState(0)

  function menos(){
    setNumber(number - 1)
  }

  function mais() {
    setNumber(number + 1)
  }

  function zerar() {
    setNumber(0)
  }

  return (
    <>
    <div className="container">
      <div className="inner-container">
        <h2>Contador</h2>
        <div id="number">{number}</div>
      <button className="btnMenos" onClick={menos}>menos</button>
      <button className="btnZerar" onClick={zerar}>zerar</button> 
      <button className="btnMais" onClick={mais}>mais</button>
      </div>  
    </div>
    </>
  );
}

export default App;
