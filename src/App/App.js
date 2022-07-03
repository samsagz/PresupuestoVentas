import React from "react";
import { AppUI } from "./AppUI";


//import logo from './logo.svg';
//import './App.css';
//import './Component/TotalSales.css'

function App() {

const [whatIWant, setWhatIWant] = React.useState(0);
const [whatIGuess, setWhatIGuess] = React.useState(0);
const [scenarios, setScenarios] = React.useState(0);
const [clientDetail, setClientDetail] = React.useState(0);
const [breakeven, setBreakeven] = React.useState(0); //"Punto de equilibrio"
const [acquisitionCost, setAcquisitionCost] = React.useState(0);
const [byCollection, setByCollection] = React.useState(0);



  return (
    <AppUI />
  );
}

export default App;
