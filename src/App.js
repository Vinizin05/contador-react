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

  return (
    <>
    <div className="container">
      <div className="inner-container">
        <h2>Contador</h2>
        <div>{number}</div>
      <button onClick={menos}>menos</button> 
      <button onClick={mais}>mais</button>
      </div>  
    </div>
    </>
  );
}

export default App;
