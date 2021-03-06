import React from "react";
import { AppUI } from "./AppUI";


//import logo from './logo.svg';
//import './App.css';
//import './Component/TotalSales.css'

function App() {

  const [lastYearSales, setLastYearSales] = React.useState(1000000);
  const [unitPrice, setUnitPrice] = React.useState(50000);

  const [whatIWant, setWhatIWant] = React.useState(10000000);
  const [whatIGuess, setWhatIGuess] = React.useState(20000000);
  const [scenarios, setScenarios] = React.useState(30000000);
  const [clientDetail, setClientDetail] = React.useState(40000000);
  const [breakeven, setBreakeven] = React.useState(50000000); //"Punto de equilibrio"
  const [acquisitionCost, setAcquisitionCost] = React.useState(60000000);
  const [byCollection, setByCollection] = React.useState(70000000);
  const [avg, setAverage] = React.useState(0);
  const [max, setMaximum] = React.useState(0);
  const [min, setMinimum] = React.useState(0);



  return (
    <AppUI
      lastYearSales={lastYearSales}
      setLastYearSales={setLastYearSales}
      unitPrice={unitPrice}
      setUnitPrice={setUnitPrice}
      whatIWant={whatIWant}
      setWhatIWant={setWhatIWant}
      whatIGuess={whatIGuess}
      setWhatIGuess={setWhatIGuess}
      scenarios={scenarios}
      setScenarios={setScenarios}
      clientDetail={clientDetail}
      setClientDetail={setClientDetail}
      breakeven={breakeven}
      setBreakeven={setBreakeven}
      acquisitionCost={acquisitionCost}
      setAcquisitionCost={setAcquisitionCost}
      byCollection={byCollection}
      setByCollection={setByCollection}
      avg={avg}
      setAverage={setAverage}
      max={max}
      setMaximum={setMaximum}
      min={min}
      setMinimum={setMinimum}
    />
  );
}

export default App;
